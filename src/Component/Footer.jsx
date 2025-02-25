import { Box,Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
function Footer() {
  return (
    <>
    <Box  sx={{textAlign:"center", bgcolor:"black",color:"white",marginTop:"100px",padding:"3px"}}>
      <Box sx={{my:3,"& svg":{
       fontSize:"60px",
       cursor:"pointer",
       mr:2
      },
      "& svg:hover":{
        color:"goldenrod",
        transform:"translateX(5px)",
        transition:"all 400ms"
      }
    }}>
      <InstagramIcon />
      <XIcon />
      <GitHubIcon />
      <YouTubeIcon />
      </Box>
        <Typography 
        variant="h5"
        sx={{
          "@media (max-width:600px)":{
            fontSize:"1rem"
          }
      }}
        >
         All Rights Reserved &copy; My Restaurant
        </Typography>
    </Box>
    </>
  )
}

export default Footer