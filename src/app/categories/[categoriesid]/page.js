import { getCategoryNews } from '@/Utils/getCategoryNews';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Image from 'next/image';
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
        <Card className="mt-8">
          <CardActionArea>
          {/* <CardMedia>
            <Image src={news.thumbnail_url} width={200} height={100} alt="bitcoin image" className="w-full"></Image>
          </CardMedia> */}
         
       
            <CardContent>
                <p className="bg-red-600 text-white w-fit text-sm px-2 py-1 rounded-md" >{news.category}</p>
              <Typography gutterBottom variant="h7" fontWeight={600} component="div">
              {news.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
              <Typography variant="body2" color="text.secondary">
               By {news.author.name} - {news.author.published_date}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    ))
  }

    </Grid>

  
        </div>
    );
};

export default DynamicNewspage;