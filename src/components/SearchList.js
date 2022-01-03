import React from 'react'
import Container from '@mui/material/Container';
import CourseCard from './/courses/SearchCourseCard';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const top100Films = [
    "Web Development",
    "Mobile App Development",
    "testing"
  ];


function SearchList() {
    const search = "web development";
    const results = 5;
    return (
        <Container>
            <br/>
             <Typography variant="h5" gutterBottom component="div" sx={{fontFamily:'sans-serif'}}>
        Search results for '{search}' in all
      </Typography>
      <br/>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={top100Films}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Search..."
          />
        )}
      />
       <br/>
      <Typography variant="h5" gutterBottom component="div">
        {results} results
      </Typography>

            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
        </Container>
    )
}

export default SearchList
