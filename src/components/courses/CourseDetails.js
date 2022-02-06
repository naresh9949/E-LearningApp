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
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { Get,Post } from "./../Utilities/AxiosHandler";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "./../SharedComponents/Spinner";

const CourseCard = (props) => {
  const primary = "red";
  const [loading, setLoading] = React.useState(false);


  const handleClick = async()=>{
    setLoading(true);
    console.log("clicked");
    const res = await Post('/api/user/enroll',{courseId:props.course._id});
    console.log(res)
    if(res && res.status===200)
      window.location = '/courseplayer/'+props.course.name;
    else
      window.location = '/signup';
  }


  return (
    <Card sx={{ minWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          width="350"
          image={props.course.image}
          alt={props.course.name}
        />
        <CardContent>
          <h3 className="dropdown-title">what's included?</h3>
          <h4>
            {props.course.classes}{" "}
            <span className="lesson-description">Lessons</span>{" "}
          </h4>
          <h4>
            {props.course.noenrolls + 3452}{" "}
            <span className="lesson-description">Enrollments</span>{" "}
          </h4>
          <h4>
            Online <span className="lesson-description">Accessibility</span>{" "}
          </h4>
          <h4>
            Life Time <span className="lesson-description">Validity</span>{" "}
          </h4>
          <h4 style={{ color: "green" }}>FREE</h4>
          <LoadingButton
            onClick={handleClick}
            fullWidth
            loading={loading}
            loadingIndicator="Enrolling..."
            variant="contained"
          >
            Enroll Now
          </LoadingButton>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const CourseAccordition = (props) => {
  return (
    <div>
      
      {props.course.video_content.map((video_section, idx) => (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="subtitle2" gutterBottom component="div">
              <h4 className="dropdown-title">
                {idx + 1 + "   " + video_section.section_title}
              </h4>
              <p className="courceDescription m-0">
                {video_section.videos.length} Lessons
              </p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack sx={{ width: "100%" }} spacing={2}>
              {video_section.videos.map((video) => (
                <Alert
                  severity="info"
                  icon={<VideoLibraryIcon fontSize="small" />}
                  action={
                    <Button color="inherit" size="small">
                      {video.duration} Minutes
                    </Button>
                  }
                >
                  {video.title}
                </Alert>
              ))}
            </Stack>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

function CourseDetails() {
  const [loading, setLoading] = useState(true);
  const { courseName } = useParams();
  const [course, setCourse] = useState({});

  const Enroll = async () => {};

  useEffect(async () => {
    const courseResponse = await Get(
      "/api/Courses/GetCourseByName/" + courseName
    );
    console.log(courseResponse.data);
    if (courseResponse) setCourse(courseResponse.data);
    setLoading(false);
  }, []);

  if (loading) return <Loader />;
  return (
    <Container>
      <Container sx={{ display: "flex", padding: 0 }}>
        <p>
          {" "}
          <Link sx={{ color: "black" }} href="#" underline="none">
            Courses
          </Link>{" "}
          / <span>{course.name}</span>
        </p>
      </Container>
      <Container sx={{ padding: 0 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={8}>
            <p>COURSE</p>
            <h2 className="courceTitle">{course.name}</h2>

            <p className="courceDescription">{course.description}</p>

            {course.cos.map((co) => (
              <Alert
                sx={{
                  backgroundColor: "inherit",
                  padding: 0,
                  margin: 0,
                  color: "black",
                }}
                iconMapping={{
                  success: <CheckCircleOutlineIcon fontSize="inherit" />,
                }}
              >
                {co}
              </Alert>
            ))}

            <h4 className="subtitle">Syllabus</h4>
            <CourseAccordition course={course} />
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
                  {course.channelName}
                </Link>
              </h3>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <CourseCard course={course} />
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export default CourseDetails;
