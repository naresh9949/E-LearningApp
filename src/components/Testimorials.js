import React from 'react'
import Carousel from "react-elastic-carousel";
import { Container } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';


const TesimorialCard = ()=> {
  return (
    <Card sx={{ maxWidth: 345 }} align="center">
      <CardActionArea>
      <Avatar
  alt="Remy Sharp"
  src="https://static.theprint.in/wp-content/uploads/2020/11/EilxqtGWkAgg3vL-e1605948236762-696x392.jpeg"
  sx={{ width: 86, height: 86 }}
/>
        <CardContent>
        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} size="small" readOnly sx={{color:'red'}} />
          <Typography gutterBottom variant="h5" component="div">
            Naresh Kollipra
          </Typography>
          <p className="review-content content">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}


function Testimorials() {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
      ];
    return (
        <div className="main-div">
            <Container align="center">
                    <h3 className="home-titles">Happy learners from all over the world</h3>
            </Container>
        <Carousel breakPoints={breakPoints}>
        <TesimorialCard/>
        <TesimorialCard/>
        <TesimorialCard/>
        <TesimorialCard/>
        <TesimorialCard/>
        <TesimorialCard/>
        <TesimorialCard/>
      </Carousel>
      </div>
    )
}

export default Testimorials
