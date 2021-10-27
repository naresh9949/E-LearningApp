import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Courses from "./Courses";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "./../app.css";

function Home(props) {
  //const message = "fnowejfo ijiogjrgioj ighroih thjrti joihjrt ohjorthjrotei";
  return (
    <Box mt={4}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <CardMedia
            container
            component="img"
            height="300"
            image="https://cdn.dribbble.com/users/380990/screenshots/4282707/comp_animation_3.gif"
            alt="green iguana"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Container>
            <Box sx={{ height: 25 }} />
            <Typography
              variant="h3"
              gutterBottom
              component="div"
              className="mainheading"
            >
              Welcome to Ls Academy
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              component="div"
              className="mainheading"
            >
              Quality courses with out any money and handpicked from best
              youtube channels
            </Typography>
            <Button variant="contained" className="homebutton" startIcon={<ArrowForwardIcon />} sx={{backgroundColor:'darkorchid',height:50,borderRadius:7}}>
              Explore Course Library
            </Button>
          </Container>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Courses />
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* <Item>xs=6 md=8</Item> */}
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
