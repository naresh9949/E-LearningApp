import React from 'react'
import Card from './Card'
import './../../app.css'
import Chip from '@mui/material/Chip';
import { Container } from '@mui/material'
import Typography from '@mui/material/Typography';
const CourseRow = (props)=>{
  console.log(props.courses)
  return (
    <div>
      <Typography gutterBottom variant="h5" component="div">
          {props.category} &nbsp;<Chip label={props.courses.length} />
        </Typography>
    <div className="container">
      {props.courses.map(course=>(
        <Card course={course}/>
      ))}
       
    </div>
    </div>
  )
}

export default CourseRow;