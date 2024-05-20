"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Image from 'next/image';
import logo from "@/assets/logo.png"
import { IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';

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


function Navbar() {
  

  return (
    <AppBar position="static"  className='bg-black'>
      <Container maxWidth="xl">
        <Toolbar disableGutters className='flex justify-between '>

       <Image src={logo} alt='logo' width={100} height={80}/>

          <Box >
            {navItems.map((item) => (
                <Link key={item} href={item.path} className='mx-3'> {item.routes}</Link>
            ))}
          </Box>
            
            <Box className= '' sx={{
                "& svg": { color: "white"}
            }}>
            <IconButton> <FacebookIcon/></IconButton>
            <IconButton> <LinkedInIcon/></IconButton>
            <IconButton> <LinkedInIcon/></IconButton>
            <IconButton> <LinkedInIcon/></IconButton>
            </Box>
       
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
