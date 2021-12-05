import React from "react";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import YouTube from 'react-youtube';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const ReplyForm = ()=> {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      
      <Button sx={{color: "black"}} onClick={handleClickOpen}>What to Reply?</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Reply</DialogTitle>
        <DialogContent sx={{width: "500px"}}>
         <br/>
        <TextField
          
          id="outlined-multiline-static"
          fullWidth
          multiline
          rows={4}
          defaultValue="Rely here..."
        />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleClose}>reply</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}



const About = () => {
  return(
  <div>
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
  </div>
  )
}

const Answer = () =>{
  return(
    <div style={{ display: "flex" }}>
            <Avatar sx={{padding:0,marginRight:1,marginTop:1,bgcolor:'red'}}>N</Avatar>
              <div style={{ display: "block",padding:0}}>
                <p>Naresh Kollipora 
                  <span>&nbsp;</span>
                  <span className="instructor">Instructor</span>
                </p>
                
                <p className="qustion">What are the routes we can here?</p>
                
              </div>
              
    </div>
  )
}

const Discussions = () => {
  return(
  <div>
    
            <div style={{ display: "flex" }}>
            <Avatar sx={{padding:0,marginRight:1,marginTop:1,bgcolor:'red'}}>N</Avatar>
              <div style={{ display: "block",padding:0}}>
                <p>Naresh Kollipora 
                  <span>&nbsp;</span>
                  <span className="instructor">Instructor</span>
                  <span>
                    <ReplyForm/>
                  </span>
                </p>
                
                <p>What are the routes we can here?</p>
                <Answer/>
              </div>
              
            </div>

            
  </div>
  )
}

const BottamTabs = ()=> {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="About" value="1" />
            <Tab label="Discussions" value="2" />
            <Tab label="bookmark" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <About/>
        </TabPanel>
        <TabPanel value="2">
          <Discussions/>
        </TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}


function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};



const CourseDropdown = ()=> {
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
}




function CoursePlayer() {
  const opts = {
    height: '450',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    
      
        <Grid container spacing={0}>
          <Grid item xs={12} sm={8}>
          <YouTube videoId="SN2owMCzkT0" opts={opts} onReady={()=>{}}/>
          <BottamTabs/>
          </Grid>
          <Grid item xs={12} sm={4}>
          <Container sx={{padding:2}}>
          <LinearProgressWithLabel value={45} />
          </Container>
          <CourseDropdown/>
          </Grid>
        </Grid>
     
    
  );
}

export default CoursePlayer;
