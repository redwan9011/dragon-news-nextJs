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
  const {data} = await getAllNews()
    return (
      <Box className='mb-8'>

 <Card >
      <CardActionArea>
      <CardMedia>
        <Image src={image1} alt="bitcoin image" className="w-full"></Image>
      </CardMedia>
   
        <CardContent>
            <p className="bg-red-600 text-white w-fit text-sm px-2 py-1 rounded-md" >Technology</p>
          <Typography gutterBottom variant="h5" fontWeight={600} component="div">
           Bitcoin climbs as Elon mask says as tesla likely to accept it again
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
 

    <Grid container spacing={2} columns={16}>
  <Grid item xs={8}>
  <Card className="mt-8">
      <CardActionArea>
      <CardMedia>
        <Image src={image2} alt="bitcoin image" className="w-full"></Image>
      </CardMedia>
   
        <CardContent>
            <p className="bg-red-600 text-white w-fit text-sm px-2 py-1 rounded-md" >Technology</p>
          <Typography gutterBottom variant="h7" fontWeight={600} component="div">
           Bitcoin climbs as Elon mask says as tesla likely to accept it again
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
  <Grid item xs={8}>
  <Card className="mt-8">
      <CardActionArea>
      <CardMedia>
        <Image src={image2} alt="bitcoin image" className="w-full"></Image>
      </CardMedia>
   
        <CardContent>
            <p className="bg-red-600 text-white w-fit text-sm px-2 py-1 rounded-md" >Technology</p>
          <Typography gutterBottom variant="h7" fontWeight={600} component="div">
           Bitcoin climbs as Elon mask says as tesla likely to accept it again
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>

</Grid>
    <Grid container spacing={2} columns={16}>
  <Grid item xs={8}>
    <Card className="mt-8">
      <CardActionArea>
      <CardMedia>
        <Image src={image2} alt="bitcoin image" className="w-full"></Image>
      </CardMedia>
   
        <CardContent>
            <p className="bg-red-600 text-white w-fit text-sm px-2 py-1 rounded-md" >Technology</p>
          <Typography gutterBottom variant="h7" fontWeight={600} component="div">
           Bitcoin climbs as Elon mask says as tesla likely to accept it again
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
  <Grid item xs={8}>
  <Card className="mt-8">
      <CardActionArea>
      <CardMedia>
        <Image src={image2} alt="bitcoin image" className="w-full"></Image>
      </CardMedia>
   
        <CardContent>
            <p className="bg-red-600 text-white w-fit text-sm px-2 py-1 rounded-md" >Technology</p>
          <Typography gutterBottom variant="h7" fontWeight={600} component="div">
           Bitcoin climbs as Elon mask says as tesla likely to accept it again
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
</Grid>

      </Box>
    );
};

export default LatesNews;