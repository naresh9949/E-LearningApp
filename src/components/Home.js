import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CoursesRow from "./courses/CoursesRow";
import { Container } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HomeCard from "./HomeCard";
import YouTube from "react-youtube";
import Testimorials from "./Testimorials";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import Spinner from "./SharedComponents/Spinner";
import { CardActionArea } from "@mui/material";
import { useState, useEffect } from 'react';
import {Get} from './Utilities/AxiosHandler';
import "./../app.css";

const steps = [
  {
    label: "Latest tech courses",
    description: `We are expert in bringing the courses in latest tech. We don't put band-aid on existing old courses, as we are not marketplace.`,
  },
  {
    label: "No need to pay!",
    description:
      "You are not required to pay single rupee to learn,just enroll in the course you want and enjoy the learning",
  },
  {
    label: "Easy to understand",
    description: `What's the point of best and latest course if that is not understandable and fun to learn. We are experts in turning tough topics into easy ones`,
  },
];

const HomeStepper = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Container>
      <Container>
      <h3 className="home-titles">Why Choose Us?</h3>
      </Container>
      <p className="paragraph">
        <Container>
        There can be hundreds of reasons but here we will give you top three
        reasons to choose us.
        </Container>
        
      </p>
      <Container>
      <Box sx={{ maxWidth: 900 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                optional={
                  index === 2 ? (
                    <Typography variant="caption">Last step</Typography>
                  ) : null
                }
              >
                <h2 className="subtitle m-0">{step.label}</h2>
              </StepLabel>
              <StepContent>
                <p className="paragraph">{step.description}</p>
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {index === steps.length - 1 ? "Finish" : "Continue"}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Back
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button variant="contained" endIcon={<ArrowForwardIcon />}>
              <Link href="/courses" color="inherit" underline="none">
                Enroll now
              </Link>
            </Button>
          </Paper>
        )}
      </Box>
      </Container>
    </Container>
  );
};

const Video = () => {
  return (
    <Container>
      <Container>
      <h2 className="home-titles"> Our Videos Set Us Apart. </h2>
      </Container>
      <Container className="content">
        Contents are curated by industry experts from top-notch youtubers with a
        great experience in their respective fields.Get in-depth understanding
        of concepts with visually engaging videos.Remember concepts forever by
        connecting concepts with real-life events.Gain industry knowledge
        through practical examples
      </Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Container sx={{ display: "flex", padding: 4 }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/5388/5388860.png"
              alt="img"
              height="56px"
            />
            &nbsp;&nbsp;
            <h3 style={{ paddingTop: 8 }} className="dropdown-title">
              Conceptual Overview
            </h3>
          </Container>
          <Container className="content">
            We handpick content from top-notch industry experts & convert it
            into highly engaging visual videos with the help of animation.
          </Container>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Container sx={{ display: "flex", padding: 4 }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1239/1239370.png"
              alt="img"
              height="56px"
            />
            &nbsp;&nbsp;
            <h3 style={{ paddingTop: 8 }} className="dropdown-title">
              Code Walkthrough
            </h3>
          </Container>
          <Container className="content">
            Say bye-bye to the old fashioned recorded PPT videos. Explore the
            art of visual learning experience with our beautiful animated
            videos.
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

const VideoCard = () => {
  const opts = {
    height: "300",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  return (
    <Container sx={{ paddingTop: 12 }}>
      <Card sx={{ maxWidth: 800 }}>
        <CardActionArea>
          <YouTube videoId="R8sUpgRqkgI" opts={opts} />
        </CardActionArea>
      </Card>
    </Container>
  );
};

function Home(props) {
  const [reviews, setReviews] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async() => {
        const reviewsResponse = await Get("/api/review/getReviews");
        setReviews(reviewsResponse.data);
        const coursesResponse = await Get("/api/courses/getPopularCourses");
        setCourses(coursesResponse.data)
        setLoading(false);
  },[]);

  if(loading)
    return <Spinner/>
  return (
    <Box mt={4}>
      <Grid container spacing={2}>
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
              Welcome to Quick Learner
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
            <Button
              variant="contained"
              className="homebutton"
              href="/courses"
              startIcon={<ArrowForwardIcon />}
              sx={{
                backgroundColor: "darkorchid",
                height: 50,
                borderRadius: 7,
              }}
            >
              Explore Course Library
            </Button>
          </Container>
        </Grid>

        <Grid item xs={12} sm={12}>
          <HomeCard />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Container>
          <CoursesRow category={"Popular"} courses={courses}  />
          </Container>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Video/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <VideoCard />
        </Grid>
        <Grid item xs={12} sm={6}>
          <HomeStepper />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Container sx={{ paddingTop: 6 }}>
            <CardMedia
              container
              component="img"
              height="400"
              image="https://cdn.dribbble.com/users/1620156/screenshots/5547104/education.gif"
              alt="green iguana"
            />
          </Container>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Testimorials reviews={reviews}/>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
