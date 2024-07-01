import CategoryList from "@/components/Ui/CategoryList/CategoryList";
import { Box, Container, Grid } from "@mui/material";


const Categorieslayout = ({children}) => {
    return (
       <Box>

        <Container>

        <Grid container spacing={8} className='mt-1'>
  <Grid item xs={3}>
        <CategoryList></CategoryList>
  </Grid>

  <Grid item xs={9}>
       {children}
  </Grid>

</Grid>
        </Container>
       </Box>
    );
};

export default Categorieslayout;