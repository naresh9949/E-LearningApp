import * as React from "react";
import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';


const LinearProgressWithLabel = (props) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "70%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
};

export default function SearchCourseCard(props) {
  const [isMobile, setIsMobile] = useState(false);
  const title = props.title;
  const image = props.image;
  const youtubeName = props.youtubeName;
  const youtubeLink = props.youtubeLink;
  const lesson = props.lesson;
  const path = props.path;
  const progress = props.progress ? props.progress : null;
  console.log(isMobile);
  //choose the screen size

  return (
    <Container className="SearchRow" sx={{ padding: 2, display: "flex" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3.5}>
        <CardMedia
        component="img"
        alt={title}
        height="160"
        image={image}
      />
        </Grid>
        <Grid item xs={12} sm={8.5}>
        <Typography variant="button" display="block" gutterBottom>
        COURSE
      </Typography>
      <Typography className="subtitle" variant="h6" gutterBottom>
       
        <Link href={path} color="inherit" underline="none">
        <span>{title}</span>
</Link>
      </Typography>

      <Typography className="subtitle" variant="h6" gutterBottom>
      
      <Stack direction="row" spacing={1}>
      <Avatar alt="Remy Sharp" sx={{ width: 24, height: 30 }} src="https://p7.hiclipart.com/preview/282/811/691/youtube-play-button-logo-graphic-designer-subscribe.jpg" />
      <Typography variant="subtitle1" gutterBottom component="div">
        {youtubeName}
      </Typography>
      </Stack>
      </Typography>
      {progress && <LinearProgressWithLabel value={progress}/>}
      <Typography variant="body1" gutterBottom>
        {lesson} Lessons
      </Typography>

        </Grid>

        
      </Grid>
    </Container>
  );
}
