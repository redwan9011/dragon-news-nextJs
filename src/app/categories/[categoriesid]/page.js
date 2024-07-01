import { getCategoryNews } from '@/Utils/getCategoryNews';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DynamicNewspage = async({params,searchParams}) => {
    // console.log(searchParams);
    const  {data}= await getCategoryNews(searchParams.category);
//   console.log(data);  
    return (
        <div>
            {/* dynamic page {params?.categoriesid} <br /> */}
            <h1>Total <strong>{searchParams.category}</strong> News: {data.length}</h1>

    <Grid container spacing={2} columns={16}>
         
  {
    data.map(news=> (
        <Grid item xs={8} key={news._id}>
      <Link href={`/${news.category.toLowerCase()}/${news._id}`}>
      <Card className="mt-8">
          <CardActionArea>
          <CardMedia sx={{ "& img" : {
            width: "100%",
            height: "250px"
          }}}>
            <Image src={news.thumbnail_url} width={200} height={0} alt="bitcoin image" className="w-full"></Image>
          </CardMedia>
         
       
            <CardContent>
                <p className="bg-red-600 text-white w-fit text-sm px-2 py-1 rounded-md" >{news.category}</p>
              <Typography gutterBottom variant="h7" fontWeight={600} component="div">
              {news.title.length > 30 ? news.title.slice(0,30) + "...." : news.title}
              </Typography>

              <Typography variant="body2" color="text.secondary">
               By {news.details.length>200 ? news.details.slice(0,200)+ "...see more" : news.details} 
              </Typography>
                        
              <Typography variant="body2 h3" className='font-semibold' color="text.secondary">
               By {news.author.name} - {news.author.published_date}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
      </Grid>
    ))
  }

    </Grid>

  
        </div>
    );
};

export default DynamicNewspage;