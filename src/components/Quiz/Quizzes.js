import React from 'react'
import { Container } from "@mui/material";
import CourseRow from './../courses/CoursesRow';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const Chips = ()=> {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <Container className="category-chips" sx={{padding:2}}>
    <p className="categories">categories</p>
    <Stack direction="row" spacing={1} sx={{overflow:'scroll'}}>
      <Chip className="chip" label="MOBILE APPLICATION DEVELOPMENT" onClick={handleClick} />
      <Chip className="chip" label="WEB DEVELOPMENT" onClick={handleClick} />
      <Chip className="chip" label="CS FUNDAMENTALS" onClick={handleClick} />
      <Chip className="chip" label="SPOKEN ENGLISH" onClick={handleClick} />
      <Chip className="chip" label="DATA BASES" onClick={handleClick} />
      <Chip className="chip" label="PROGRAMMING LANGUAGES" onClick={handleClick} />
      <Chip className="chip" label="DEVOPS" onClick={handleClick} />
      <Chip className="chip" label="CLOUD COMPUTING" onClick={handleClick} />
    </Stack>
    </Container>
  );
}



function Quizzes() {
    return (
        <Container sx={{paddingTop:2}}>
            <Chips/>
            <CourseRow category="Popular Courses" number={14}/>
            <CourseRow category="Web Development" number={22}/>
            <CourseRow category="Mobile Application Development" number={3}/>
            <CourseRow category="CS Fundamentals" number={15}/>
            <CourseRow category="Web Development" number={23}/>
        </Container>
    )
}

export default Quizzes
