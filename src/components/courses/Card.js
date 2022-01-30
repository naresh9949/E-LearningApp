import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import './../../app.css'
export default function CourseCard(props) {
  return (
    <Card sx={{ maxWidth: 250,minWidth:250}} elevation={0} className='card'>
      <CardMedia
        component="img"
        height="150"
        image={props.course.image}
        alt={props.course.name}
      />
      <CardContent sx={{padding:1}}>
        <Typography className="coursecardTitle" >
        <Link href={"/course/"+props.course.name} color="blue" underline="none">
        {props.course.name}
</Link>

        </Typography>
        <Typography className="qustion">{props.course.classes} Classes</Typography>
        <Typography className="qustion" style={{color:'green'}}>FREE</Typography>
      </CardContent>
      
    </Card>
  );
}
