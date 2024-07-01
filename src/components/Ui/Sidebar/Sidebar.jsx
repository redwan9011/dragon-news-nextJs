import { Box, Grid } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Image from "next/image";
import image1 from '../../../assets/side-top-news.png'
import blackImage from "../../../assets/blankImage.png"
import sidebottom from "../../../assets/side-bottom-img.png"
const Sidebar = () => {
    return (
        <Box>
            <Card >
      <CardActionArea>
      <CardMedia>
        <Image src={image1} alt="bitcoin image" className="w-full"></Image>
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


    <Grid container spacing={1} className='mt-8'>
  <Grid item xs={4}>
        <Image src={blackImage} alt="blank image"></Image>
  </Grid>
  <Grid item xs={8}>
  Bitcoin climbs as Elon mask says as tesla likely to accept it again
  </Grid>
</Grid>
    <Grid container spacing={1} className='mt-4'>
  <Grid item xs={4}>
        <Image src={blackImage} alt="blank image"></Image>
  </Grid>
  <Grid item xs={8}>
  Bitcoin climbs as Elon mask says as tesla likely to accept it again
  </Grid>
</Grid>
    <Grid container spacing={1} className='mt-4'>
  <Grid item xs={4}>
        <Image src={blackImage} alt="blank image"></Image>
  </Grid>
  <Grid item xs={8}>
  Bitcoin climbs as Elon mask says as tesla likely to accept it again
  </Grid>
</Grid>
    <Grid container spacing={1} className='mt-3'>
  <Grid item xs={4}>
        <Image src={blackImage} alt="blank image"></Image>
  </Grid>
  <Grid item xs={8}>
  Bitcoin climbs as Elon mask says as tesla likely to accept it again
  </Grid>
</Grid>
    <Grid container spacing={1} className='mt-3'>
  <Grid item xs={4}>
        <Image src={blackImage} alt="blank image"></Image>
  </Grid>
  <Grid item xs={8}>
  Bitcoin climbs as Elon mask says as tesla likely to accept it again
  </Grid>
</Grid>

<Image src={sidebottom} alt="sidebootm image " className="mt-8"></Image>
        </Box>
    );
};

export default Sidebar;