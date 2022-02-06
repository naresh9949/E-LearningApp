import React from "react";
import { useEffect, useRef, useState, useContext } from "react";
import Container from "@mui/material/Container";
import { createMuiTheme, ThemeProvider } from "@mui/material/styles";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import YouTube from "react-youtube";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useParams } from "react-router-dom";
import Spinner from "./../SharedComponents/Spinner";
import Loader from "./../SharedComponents/Loader";
import { Get, Post } from "./../Utilities/AxiosHandler";
import JoditEditor from "jodit-react";
import { UserContext } from "./../../App.js";
import { useTheme } from "styled-components";

const ReplyForm = (props) => {
  const [open, setOpen] = React.useState(false);
  const [text, setText] = React.useState("");
  const courseId = props.courseId;
  const user = props.user;
  const commentId = props.commentId;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const reply = async () => {
    const obj = {
      courseId: courseId,
      commentId: commentId,
      first_name: user.first_name,
      last_name: user.last_name,
      image: user.image ? user.image : null,
      userId: user._id,
      comment: text,
    };

    const res = await Post("/api/Courses/addReply", obj);
    if (res && res.status === 201) setOpen(false);
  };
  return (
    <React.Fragment>
      <Button sx={{ color: "black" }} onClick={handleClickOpen}>
        What to Reply?
      </Button>
      <Dialog open={open} fullWidth onClose={handleClose}>
        <DialogTitle>Reply</DialogTitle>
        <DialogContent>
          <br />
          <TextField
            id="outlined-multiline-static"
            onChange={(event) => {
              setText(event.target.value);
            }}
            fullWidth
            multiline
            rows={4}
            defaultValue="Rely here..."
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={reply}>
            reply
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

const About = (props) => {
  const course = props.course;

  return (
    <div>
      <p>COURSE</p>
      <h2 className="courceTitle">{course.name}</h2>

      <p className="courceDescription">{course.description}</p>

      <h4 className="subtitle">Author</h4>
      <div style={{ display: "flex" }}>
        <Avatar
          alt={course.channelName}
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
    </div>
  );
};

const Answer = (props) => {
  return (
    <React.Fragment>
      {props.replies.map((reply) => (
        <React.Fragment>
        <div style={{ display: "flex" }}>
          <Avatar
            sx={{ width: 36, height: 36 }}
            alt={reply.first_name + " " + reply.last_name}
            src={reply.image}
          />
          <div style={{ display: "block", padding: 0 }}>
            <Typography sx={{ marginTop: 0.5, marginLeft: 1 }}>
              <span>{reply.first_name + " " + reply.last_name}</span>
            </Typography>
            
            <Typography>{reply.comment}</Typography>
          </div>
          
        </div>
        <br/>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

const Discussions = (props) => {
  const [text, setText] = React.useState("");
  const { user, setUserObj } = useContext(UserContext);
  const comments = props.comments;
  console.log(comments);
  const saveQuistion = async () => {
    if (!user) window.location = "/signin";

    const obj = {
      first_name: user.first_name,
      last_name: user.last_name,
      image: user.image ? user.image : null,
      courseId: props.id,
      userId: user._id,
      comment: text,
    };

    const res = await Post("/api/Courses/addComment", obj);
    if (res && res.status === 201) setText("");
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <TextField
            fullWidth
            size="small"
            onChange={(event) => {
              setText(event.target.value);
            }}
            id="outlined-basic"
            label="Ask a Question"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={1}>
          <Button onClick={saveQuistion} variant="contained">
            Ask
          </Button>
        </Grid>
      </Grid>
      <br />
      {comments.map((comment) => (
        <React.Fragment>
        <div style={{ display: "flex" }}>
          <Avatar
            sx={{ width: 36, height: 36 }}
            alt={comment.first_name + " " + comment.last_name}
            src={comment.image}
          />
          <div style={{ display: "block", padding: 0 }}>
            <Typography sx={{ marginTop: 0.5, marginLeft: 1 }}>
              <span>{comment.first_name + " " + comment.last_name}</span>
              <span>
                <ReplyForm
                  commentId={comment._id}
                  courseId={props.id}
                  user={user}
                />
              </span>
            </Typography>

            <Typography>
              {" "}
              <span>{comment.comment}</span>
            </Typography>
            <br/>
            <Answer replies={comment.replies} />
          </div>
        </div>
        <hr/>
        </React.Fragment>
      ))}
    </div>
  );
};

const TextEditor = (props) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [oldcontent, setOldContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("primary");

  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
  };
  const saveNotes = async() =>{
    const obj = {
      courseId : props.courseId,
      content : content
    }
    const res = await Post('/api/user/addNote',obj);
    if(res && res.status === 201)
      setColor("primary");
    
  }

  useEffect(async () => {
    const obj = {
      courseId : props.courseId,
    }
    const res = await Post('/api/user/getNote',obj);
    if(res && res.status === 200){
      setContent(res.data);
      setOldContent(res.data);
      setLoading(false);
    }

    if(content===oldcontent)
      setColor("primary");
    
  },[])

  if(loading)
    return <Loader/>

  return (
    <Container fixed sx={{ backgroundColor: "#F5F5F5" }}>
      <Alert
        action={
          <Button size="small" color={color} onClick={saveNotes} variant="contained">
            Save
          </Button>
        }
        sx={{ backgroundColor: "#F5F5F5" }}
        icon={false}
      >
        Save Changes After Taking Notes
      </Alert>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        tabIndex={1} // tabIndex of textarea
        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={(newContent) => {
          if(content===oldcontent)
              setColor("primary");
          else
            setColor("secondary");
        }}
      />
    </Container>
  );
};

const BottamTabs = (props) => {
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="About" value="1" />
            <Tab label="Discussions" value="2" />
            <Tab label="notes" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <About course={props.course} />
        </TabPanel>
        <TabPanel value="2">
          <Discussions id={props.course._id} comments={props.course.comments} />
        </TabPanel>
        <TabPanel value="3">
          <TextEditor courseId={props.course._id} />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

const CourseAccordition = (props) => {
  return (
    <div style={{ height: "100vh", position: "relative", overflow: "scroll" }}>
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
                  onClick={() => props.handler(video.videoId)}
                  action={
                    <Button color="inherit" size="small">
                      {video.duration} Minutes
                    </Button>
                  }
                >
                  <Link href="#" color="inherit" underline="none">
                    {video.title}
                  </Link>
                </Alert>
              ))}
            </Stack>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

function CoursePlayer() {
  const [loading, setLoading] = React.useState(true);
  const [course, setCourse] = React.useState(null);
  const [videoId, setVideoId] = React.useState("");
  const [videos, setVideos] = React.useState([]);
  const [percentage, setPercentage] = React.useState(null);
  const { courseName } = useParams();

  const playNextVideo = async () => {
    const idx = videos.indexOf(videoId);
    if (idx + 1 < videos.length) setVideoId(videos[idx + 1]);
    const res = await Post("/api/user/addVideo", {
      courseId: course._id,
      videoId: videoId,
    });
    if(res && res.status === 201)
      setPercentage(res.data);
  };

  const opts = {
    height: "450",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(async () => {
    const res = await Get("/api/Courses/GetCoursePlayer/" + courseName);
    console.log(res.data);
    if (res && res.status === 200) setCourse(res.data);

    const video_content = res.data.video_content;
    var videos = [];

    for (let i = 0; i < video_content.length; i++) {
      for (let j = 0; j < video_content[i].videos.length; j++) {
        videos.push(video_content[i].videos[j].videoId);
      }
    }

    setVideos(videos);
    setVideoId(videos[0]);

    setLoading(false);
  }, []);

  if (loading) return <Spinner />;

  return (
    <Grid container spacing={0}>
      <Grid
        item
        xs={12}
        sm={8}
        style={{ height: "100vh", position: "relative", overflow: "scroll" }}
      >
        <YouTube videoId={videoId} opts={opts} onEnd={playNextVideo} />
        <BottamTabs course={course} />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Container sx={{ padding: 2 }}>
          <LinearProgressWithLabel value={percentage} />
        </Container>
        <CourseAccordition course={course} handler={setVideoId} />
      </Grid>
    </Grid>
  );
}

export default CoursePlayer;
