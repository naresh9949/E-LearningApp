import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import './../../app.css'
export default function CourseCard(props) {
  console.log(props.course);
  return (
    <Card sx={{ maxWidth: 345,maxHeight:320}} className='card'>
      <CardMedia
        component="img"
        height="160"
        image={props.course.image}
        alt={props.course.name}
      />
      <CardContent sx={{padding:1}}>
        <h3 className="coursecardTitle">
        <Link href={"/course/"+props.course.name} color="inherit" underline="none">
        {props.course.name}
</Link>

        </h3>
        <p className="qustion">{props.course.classes} Classes</p>
        <p className="qustion" style={{color:'green'}}>FREE</p>
      </CardContent>
      
    </Card>
  );
}
