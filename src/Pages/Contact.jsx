import React from 'react'
import { SupportAgent } from '@mui/icons-material'
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import { Box,Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'

import Layout from '../Component/Layout'
function Contact() {
  return (
    <Layout>
    <Box sx={{my:10,ml:10,"@ h4":{fontWeight:"bold", mb:2}}}>
      <Typography>
        Contact My Restaurant
      </Typography>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis itaque quod odit accusantium architecto quia quidem esse dolorem nihil, delectus voluptatibus illo unde! At minus non dolor nesciunt, sint eaque?</p>
    </Box>
    <Box 
    sx={{m:3,width:"600px",ml:10,
   "@media (max-width:600px)":{
    width:"300px"
   }
  
  }}
  >
      <TableContainer component={Paper}>
        <Table aria-label='contact table'>
     <TableHead>
      <TableRow>
<TableCell 
sx={{bgcolor:"black",color:"white"}}
align="center"
>Contact Details</TableCell>
      </TableRow>
     </TableHead>
     <TableBody>
      <TableRow>
        <TableCell>
          <SupportAgent  sx={{color:"red",pt:1}}/>18-00-0000 (tollfree)
        </TableCell>
      </TableRow>
      <TableRow>
      <TableCell>
          <MailIcon sx={{color:"skyblue",pt:1}}/> email.com
        </TableCell>
      </TableRow>
      <TableRow>
      <TableCell>
          <CallIcon sx={{color:"green",pt:1}}/> 123456789
        </TableCell>
      </TableRow>
     </TableBody>
        </Table>
      </TableContainer>
    </Box>
   </Layout>
  )
}

export default Contact