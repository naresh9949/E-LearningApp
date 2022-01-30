import React from 'react';
import Container from "@mui/material/Container";
import CardMedia from '@mui/material/CardMedia';


function PageNotFound() {
  return <Container align="center" sx={{paddingTop:15,paddingBottom:15}}>
 <CardMedia
        component="img"
        height="300"
        image="https://cdn.dribbble.com/users/879147/screenshots/6766595/404_4x.jpg?compress=1&resize=400x300"
        alt="green iguana"
      />
      
  </Container>;
}

export default PageNotFound;
