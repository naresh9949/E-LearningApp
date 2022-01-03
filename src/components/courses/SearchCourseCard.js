import * as React from "react";
import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Avatar from '@mui/material/Avatar';
import Link from "@mui/material/Link";
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const LinearProgressWithLabel = (props)=> {
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


 


export default function SearchCourseCard(props) {
  const [isMobile, setIsMobile] = useState(false);
  const title = props.title;
  const image = props.image;
  const youtubeName = props.youtubeName;
  const youtubeLink = props.youtubeLink;
  const lesson = props.lesson;
  const description = props.description;
  const progress = props.progress?props.progress:null;
  console.log(isMobile);
  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });
  return (
    <Container className="SearchRow" sx={{ padding: 2, display: "flex" }}>
      <img
        src={image}
        width={isMobile ? "150" : "250"}
        height={isMobile ? "60" : "150"}
        alt="fdklekl"
      />
      <Container sx={{ display: "block", padding: 1, margin: 0 }}>
        <h4 className="m-0">{title}</h4>
        <Link href={youtubeLink} underline="none" sx={{mb:1,display:'flex'}}>
        <Avatar alt="Remy Sharp" src="https://toppng.com/uploads/preview/youtube-logo-transparent-png-pictures-transparent-background-youtube-logo-11562856729oa42buzkng.png" sx={{width: 24, height: 24}} />
          {youtubeName}
        </Link>
        <p className="subtext m-0">{lesson} Lessons</p>
        {progress && <LinearProgressWithLabel value={progress} />}
        <p className="m-0">
          {description}
        </p>
      </Container>
    </Container>
  );
}
