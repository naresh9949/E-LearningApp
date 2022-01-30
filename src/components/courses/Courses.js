import React,{useState,useEffect} from 'react'
import { Container } from "@mui/material";
import CourseRow from './CoursesRow';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import {Get} from './../Utilities/AxiosHandler';
import Spinner from './../SharedComponents/Spinner'
import './../../app.css';

const Chips = (props)=> {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <div className="category-chips">
    <p className="categories">categories</p>
    <Stack direction="row" spacing={1} sx={{overflow:'scroll'}}>
    {props.categories.map((category,idx) => (
                <Chip className="chip" label={category} onClick={handleClick} />
              ))}
    
    </Stack>
    </div>
  );
}



function Courses() {
    const [loading,setLoading] = useState(true);
    const [categories,setCategories] = useState([]);
    const [courses,setCourses] = useState([]);
    useEffect(async()=>{
      var categories;
      var courses=[];
      const res1 = await Get('/api/home/getCategories');
      if(res1 && res1.status===200){
        categories = res1.data;
      }
      
      for(let i=0;i<categories.length;i++){
        const res2 = await Get('/api/Courses/getByCategory/'+categories[i]);
        if(res2 && res2.status===200)
        courses.push(res2.data)
      }

      setCategories(categories);
      setCourses(courses);
      setLoading(false);
    },[])

    if(loading)
      return <Spinner/>
    return (
        <Container>
            <Chips categories={categories}/>
            {categories.map((category,idx) => (
                <CourseRow category={category} courses={courses[idx]}/>
              ))}
           
        </Container>
    )
}

export default Courses
