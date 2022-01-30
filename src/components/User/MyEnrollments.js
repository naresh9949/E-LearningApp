import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import CourseCard from "./../courses/SearchCourseCard";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Spinner from "./../SharedComponents/Spinner";
import { Post } from "./../Utilities/AxiosHandler";

function SearchList() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const res = await Post("/api/user/myEnrollments",{});
    if (res && res.status === 200) setCourses(res.data);
    setLoading(false);
  }, []);

  if (loading) return <Spinner />;
  return (
    <Container>
      <br />
      <Typography className="subtitle" variant="h5" gutterBottom>
        <span>Enrollments</span> <Chip label={courses.length} />
      </Typography>
      <br />

      {courses.map((course) => (
        <CourseCard
          title={course.name}
          image={course.image}
          path={"/courseplayer/"+course.name}
          youtubeName={course.channelName}
          lesson={24}
          progress={34}
        />
        
      ))}

     
      <br />
    </Container>
  );
}

export default SearchList;
