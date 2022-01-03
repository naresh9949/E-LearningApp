import React from 'react'
import Container from '@mui/material/Container';
import CourseCard from './courses/SearchCourseCard';

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
            <CourseCard title="Introduction to Flutter" image="https://miro.medium.com/max/560/1*y9qRStXm3LEkQP7krJYjEA.png" youtubeName="LearnCodeOnline" youtubeLink="" lesson={24} progress={34} description="React is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time"/>
            <CourseCard title="Introduction to Flutter" image="https://i.ytimg.com/vi/nvHeB32ICDM/maxresdefault.jpg" youtubeName="LearnCodeOnline" youtubeLink="" lesson={56} progress={34} description="React is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time"/>
            <CourseCard title="Introduction to Flutter" image="https://i.ytimg.com/vi/nvHeB32ICDM/maxresdefault.jpg" youtubeName="LearnCodeOnline" youtubeLink="" lesson={43} progress={34} description="React is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time"/>
            <CourseCard title="Introduction to Django" image="https://assets.website-files.com/5b6901669b93d7837e36dc4c/615e1104ffbf5ae592265cc7_python-django.png" youtubeName="LearnCodeOnline" youtubeLink="" lesson={33} progress={34} description="React is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time"/>
            <CourseCard title="Introduction to Flutter" image="https://rbots.in/wp-content/uploads/2018/09/python-logo.png" youtubeName="LearnCodeOnline" youtubeLink="" lesson={12} progress={34} description="React is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time"/>
            <CourseCard title="Introduction to Flutter" image="https://i.ytimg.com/vi/nvHeB32ICDM/maxresdefault.jpg" youtubeName="LearnCodeOnline" youtubeLink="" lesson={10} progress={34} description="React is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time"/>
            <br/>
        </Container>
    )
}

export default SearchList
