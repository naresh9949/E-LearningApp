import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import './../app.css'
export default function CourseCard(props) {
  return (
    <Card sx={{ maxWidth: 345,maxHeight:320}} className='card'>
      <CardMedia
        component="img"
        height="160"
        image={props.url}
        alt="green iguana"
      />
      <CardContent sx={{padding:1}}>
        <h3 className="coursecardTitle">
        <Link href="/courses" color="inherit" underline="none">
        Introduction to ReactJs
</Link>

        </h3>
        <p className="qustion">78 Lessons</p>
        <p className="qustion" style={{color:'green'}}>FREE</p>
      </CardContent>
      
    </Card>
  );
}
