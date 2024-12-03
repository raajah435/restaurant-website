import React from 'react'
import { Box,Typography } from '@mui/material'
import Layout from '../Component/Layout'
function About() {
  return (
    <Layout>
  <Box
  sx={{
    my:15,
    textAlign:"center",
    "& h4":{
      fontWeight:"bold",
      my:2,
      fontSize:"2rem"
    },
    "& p":{
      textAlign:"justify"
    },
    "@media (max-width:600px)":{
      mt:0,
      "& h4":{
        fontSize:"1.5rem"
      }
    }
  }}
  >
    <Typography variant='h4'>
      Welcome To My Restaurant
    </Typography>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex illum nobis ipsa, itaque dicta obcaecati officia, accusamus molestias aspernatur esse soluta? Illo quaerat eos culpa. Laboriosam, voluptas? Perferendis, non at ex provident, sed vel eligendi adipisci veniam placeat architecto, a nesciunt magni voluptates accusantium minima amet pariatur harum odit saepe sapiente temporibus praesentium possimus consequuntur! Enim similique rerum excepturi, et maiores voluptatem recusandae. Voluptatum sequi debitis porro officiis excepturi? Nobis perferendis et architecto quo veniam sequi maxime voluptate voluptatibus dolor praesentium id repellendus, deserunt placeat molestiae? Error dolor quibusdam corrupti quam ea voluptate sit impedit. Natus minima deleniti eos minus.</p>
    <br />
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, eius velit laborum in veniam fuga quo non quae, tempore cupiditate recusandae. Natus commodi ad aspernatur impedit neque enim illo accusantium, quidem cum nulla reprehenderit architecto numquam eos molestias, consequatur esse, libero unde. Earum odio tempore molestiae. Modi nisi, possimus debitis eveniet soluta neque porro inventore, perferendis harum deserunt officiis quaerat tempore? Minus cum molestias adipisci nihil harum distinctio, a molestiae nisi reiciendis incidunt! Nisi rerum at error eveniet dolorum molestias ducimus ex iure laboriosam id eos natus, quae, saepe, nam temporibus? Ducimus laborum quis, itaque ad consequatur mollitia velit obcaecati.
    </p>
  </Box>
    </Layout>
  )
}

export default About