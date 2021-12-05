import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import "./../app.css";
import { Container } from "@mui/material";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Container>
      <Container align="center">
        <h3 className="home-titles">Grow your skills With Best Tutors</h3>
        <Button variant="outlined" endIcon={<ArrowForwardIcon />}>
          <Link href="/courses" color="inherit" underline="none">
            try it now
          </Link>
        </Button>
        <p className="m-0">&nbsp;</p>
      </Container>

      <Grid container spacing={5}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ minWidth: 300 }}>
            <CardContent align="center">
              <img
                src="https://assets.materialup.com/uploads/897dce47-abf1-4013-b1cf-32352470830d/preview.jpg"
                alt="image"
                height="180"
              />
              <h3 className="CardHeaders">Courses</h3>
              <p sx={{ fontWeight: 20 }}>
                Our Specially designed curriculum, combined with high quality
                audio video production, makes learning fun. 100+ courses
                produced.
              </p>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ minWidth: 300 }}>
            <CardContent align="center">
              <img
                src="https://i.pinimg.com/736x/21/ca/64/21ca6436f73bdb4cb4549e6dbca60ac8.jpg"
                alt="image"
                height="180"
              />
              <h3 className="CardHeaders">Quick Learning</h3>
              <p sx={{ fontWeight: 20 }}>
                Being a quick learner is an important in current industry and so
                we pick short courses with great value from best tutors of
                youtube community.
              </p>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ minWidth: 300 }}>
            <CardContent align="center">
              <img
                src="https://music2deal.files.wordpress.com/2017/10/youtube-logo.jpg"
                alt="image"
                height="180"
              />
              <h3 className="CardHeaders">YoutTube</h3>
              <p sx={{ fontWeight: 20 }}>
                Our website contain 100+ courses handpicked from various youtube
                channels and the conent is played in the YouTube palayer
              </p>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
