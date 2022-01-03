import React from "react";
import Carousel from "react-elastic-carousel";
import { Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import { minHeight } from "@mui/system";

const TesimorialCard = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }} align="center">
      <CardActionArea>
        <Avatar src={props.review.image} sx={{ width: 86, height: 86 }}> {props.review.first_name[0]+props.review.last_name[0]} </Avatar>
        <CardContent>
          <Rating
            name="half-rating-read"
            defaultValue={props.review.rating}
            precision={0.5}
            size="small"
            readOnly
            sx={{ color: "red" }}
          />
          <Typography gutterBottom variant="h5" component="div">
            {props.review.first_name + " " + props.review.last_name}
          </Typography>
          <p
            className="review-content content"
            style={{ width: 315, paddingRight:23, height: 100, overflowY: "scroll" }}
          >
            {props.review.message}
          </p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

function Testimorials(props) {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  console.log(props.reviews);
  return (
    <div className="main-div">
      <Container align="center">
        <h3 className="home-titles">Happy learners from all over the world</h3>
      </Container>
      <Carousel breakPoints={breakPoints}>
        {props.reviews.map((review) => (
          <TesimorialCard review={review} />
        ))}
      </Carousel>
    </div>
  );
}

export default Testimorials;
