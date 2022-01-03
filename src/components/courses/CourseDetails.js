import React from "react";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

const CourseCard = ()=> {
  const primary = "red";
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          width="350"
          image="https://d29xdxvhssor07.cloudfront.net/assets/schools/2410/courses/53635/reactimage_fq7uz.png"
          alt="course image"
        />
        <CardContent>
          <h3 className="dropdown-title">
            what's included?
          </h3>
          <h4>67 <span className="lesson-description">Lessons</span> </h4>
          <h4>6888 <span className="lesson-description">Enrollments</span> </h4>
          <h4>Online <span className="lesson-description">Accessibility</span> </h4>
          <h4>Life Time <span className="lesson-description">Validity</span> </h4>
          <h4 style={{color:'green'}}>FREE</h4>
          <LoadingButton
          sx={{backgroundColor:'blue'}}
        onClick={handleClick}
        fullWidth
        loading={loading}
        loadingIndicator="Loading..."
        variant="contained"
      >
        Fetch data
      </LoadingButton>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}


const CourseAccordition = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="subtitle2" gutterBottom component="div">
            <h4 className="dropdown-title">01 Introduction to ML</h4>
            <p className="courceDescription m-0">8 Lessons</p>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert
              severity="info"
              icon={<VideoLibraryIcon fontSize="small" />}
              action={
                <Button color="inherit" size="small">
                  2.48 Minutes
                </Button>
              }
            >
              Introduction To Machine Learning!
            </Alert>
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="subtitle2" gutterBottom component="div">
            <h4 className="dropdown-title">01 Introduction to ML</h4>
            <p className="courceDescription m-0">8 Lessons</p>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert
              severity="info"
              icon={<VideoLibraryIcon fontSize="small" />}
              action={
                <Button color="inherit" size="small">
                  2.48 Minutes
                </Button>
              }
            >
              Introduction To Machine Learning!
            </Alert>
          </Stack>
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
};

function CourseDetails() {
  return (
    <Container>
      <Container sx={{ display: "flex", padding: 0 }}>
        <p>
          {" "}
          <Link sx={{ color: "black" }} href="#" underline="none">
            Courses
          </Link>{" "}
          / <span>Introduction to MachineLearning</span>
        </p>
      </Container>
      <Container sx={{ padding: 0 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={8}>
            <p>COURSE</p>
            <h2 className="courceTitle">
              Introduction to MachineLearning using Python
            </h2>

            <p className="courceDescription">
              Python can be used on a server to create web applications. Python
              can be used alongside software to create workflows. Python can
              connect to database systems. It can also read and modify files.
              Python can be used to handle big data and perform complex
              mathematics. Python can be used for rapid prototyping, or for
              production-ready software development.
            </p>
            <h4 className="subtitle">Syllabus</h4>
            <CourseAccordition />
            <h4 className="subtitle">Author</h4>
            <div style={{ display: "flex" }}>
              <Avatar
                alt="Hitesh"
                src="https://cliply.co/wp-content/uploads/2019/04/371903520_SOCIAL_ICONS_YOUTUBE.png"
                sx={{ width: 56, height: 56, backgroundColor: "red" }}
              />
              <h3>
                &nbsp;&nbsp;
                <Link href="#" underline="none">
                  LearnCodeOnline
                </Link>
              </h3>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <CourseCard/>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export default CourseDetails;
