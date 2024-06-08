import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import heading from "../../assets/The Dragon News.png"

const Header = () => {
    const getCurrentDate = () => {
        const date = new Date();
        const weekday = date.toLocaleString('default', { weekday: 'long' }); // Full weekday name
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();
        return `${weekday}, ${month} ${day}, ${year}`;
    };
    const currentDate =  getCurrentDate(); 
 

    return (
       <Box className='py-6'>
        <Container className="w-full flex flex-col items-center space-y-1 justify-center">

        
        <Image className=" w-1/4" src={heading}  alt="Dragon news image"></Image>
        <Typography className="text-gray-500">
            Journalism without fear or favour
        </Typography>
      <p className="text-gray-500">{currentDate}</p>

        </Container>


       </Box>
    );
};

export default Header;