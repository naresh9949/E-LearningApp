import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import CourseCard from ".//courses/SearchCourseCard";
import Typography from "@mui/material/Typography";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Get } from "./Utilities/AxiosHandler";
import Spinner from "./SharedComponents/Spinner";

const top100Films = ["Web Development", "Mobile App Development", "testing"];

function SearchList() {
  const [results, setResult] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [courses, setCourses] = React.useState([]);
  const searchValue = window.location.search;
  const params = new URLSearchParams(searchValue);
  let search = params.get("search_query");

  useEffect(async () => {
    const res = await Get("/api/Courses/searchCourse?search_query="+search);
    if (res && res.status === 200) setCourses(res.data);
    console.log(res);
    setLoading(false);
  }, []);

  if (loading) return <Spinner />;

  return (
    <Container>
      <br />
      <Typography
        variant="h5"
        gutterBottom
        component="div"
        sx={{ fontFamily: "sans-serif" }}
      >
        Search results for '{search}' in all
      </Typography>
      
      <br />
      <Typography variant="h5" gutterBottom component="div">
        {courses.length} results
      </Typography>

      {courses.map((course, idx) => (
        <CourseCard title={course.name} path={"/course/"+course.name} image={course.image} youtubeName={course.channelName} lesson={course.classes} />
      ))}
    </Container>
  );
}

export default SearchList;
