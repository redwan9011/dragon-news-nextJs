import { Box, Container, IconButton, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from "next/link";

const Footer = () => {
    const navItems = [
        {
            routes: "Home",
            path: "/"
        },
        {
            routes: "Pages",
            path: "/pages"
        },
        {
            routes: "Category",
            path: "/category"
        },
        {
            routes: "Contact",
            path: "/contact"
        },
        {
            routes: "About",
            path: "/about"
        },
    
    ];
    return (
        <div>
            <Box className='bg-black py-8'>

                <Container>
                    <Box className='w-full flex justify-center' sx={{
                        "& svg": { color: "white" }
                    }}>
                        <IconButton> <FacebookIcon /></IconButton>
                        <IconButton> <LinkedInIcon /></IconButton>
                        <IconButton> <LinkedInIcon /></IconButton>
                        <IconButton> <LinkedInIcon /></IconButton>
                    </Box>

                    <Box className='flex justify-center gap-2'>
            {navItems.map((item) => (
                <Link key={item} href={item.path} className=' text-white'> {item.routes}</Link>
            ))}
          </Box>

          <Typography variant="body2" marginTop='10px' textAlign='center' color={'gray'}>

            @2024 The dragon News. Design by Redwan

          </Typography>
                </Container>
            </Box>
        </div>
    );
};

export default Footer;