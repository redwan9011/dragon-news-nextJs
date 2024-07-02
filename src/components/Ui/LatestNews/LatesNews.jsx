import { Box, Grid } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import image1 from '../../../assets/top-news (1).png'
import image2 from '../../../assets/top-news2.png'
import Image from "next/image";
import { getAllNews } from "@/Utils/getAllNews";
const LatesNews = async () => {
  const {data} = await getAllNews();
  console.log(data);
    return (
      <Box className='mb-8'>

 <Card >
      <CardActionArea>
      <CardMedia>
        <Image src={data[0].thumbnail_url} width={1000} height={250} alt="bitcoin image" className="w-full"></Image>
      </CardMedia>
   
        <CardContent>
            <p className="bg-red-600 text-white w-fit text-sm px-2 py-1 rounded-md" >{data[0].category}</p>
          <Typography gutterBottom variant="h5" fontWeight={600} component="div">
          {data[0].title}
          </Typography>

          <Typography>By   {data[0].author.name}_  Publish:   {data[0].author.published_date}</Typography>
          <Typography variant="body2" color="text.secondary">
          {data[0].details.length > 200 ? data[0].details.slice(0,200) + "....." : data[0].details}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
 

    <Grid container spacing={2} columns={16}>
  {
    data.slice(0,4).map( news => (
      <Grid item xs={8} key={news._id}>
      <Card className="mt-8">
          <CardActionArea>
          <CardMedia>
            <Image  src={news.thumbnail_url} width={300} height={300} alt="bitcoin image" className="w-full h-40"></Image>
          </CardMedia>
       
            <CardContent>
                <p className="bg-red-600 text-white w-fit text-sm px-2 py-1 rounded-md" >Technology</p>
              <Typography gutterBottom variant="h7" fontWeight={600} className="h-10 my-2" component="div">
               {news.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" className="mt-2">
                {news.details.length > 200 ? news.details.slice(0,200) +"...." : news.details}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    ))
  }
 

</Grid>
 

      </Box>
    );
};

export default LatesNews;