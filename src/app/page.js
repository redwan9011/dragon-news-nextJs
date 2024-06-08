import LatesNews from '@/components/Ui/LatestNews/LatesNews';
import Sidebar from '@/components/Ui/Sidebar/Sidebar';
import { Grid} from '@mui/material';
import React from 'react';

const HomePage = () => {
  return (
    <>
      <Grid container spacing={8} className='mt-10'>
  <Grid item xs={8}>
    <LatesNews></LatesNews>
  </Grid>
  <Grid item xs={4}>
  <Sidebar></Sidebar>
  </Grid>
</Grid>
    </>
  );
};

export default HomePage;