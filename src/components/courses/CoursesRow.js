import React from 'react'
import Card from './Card'
import './../../app.css'
import Chip from '@mui/material/Chip';
import { Container } from '@mui/material'
import Typography from '@mui/material/Typography';
const CourseRow = (props)=>{

  if(props.courses.length===0)
    return <React.Fragment></React.Fragment>
    
  return (
    <>
      <Typography gutterBottom variant="h5" component="div">
          {props.category} &nbsp;<Chip label={props.courses.length} />
        </Typography>
    <div className="container">
      {props.courses.map(course=>(
        <Card course={course}/>
      ))}
       
    </div>
    </>
  )
}

export default CourseRow;