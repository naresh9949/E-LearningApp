import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './../app.css'
import Box from "@mui/material/Box";
export default function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }} className='card'>
      <CardMedia
        component="img"
        height="160"
        image={props.url}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Introduction to ReactJs
        </Typography>
      </CardContent>
      <CardActions sx={{backgroundColor:'whitesmoke',alignItems:'flex-end'}}>
      <Typography variant="body2">
        66 lessons
      </Typography>

      <Typography variant="body2" sx={{float:'left'}}>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;₹899
      </Typography>
      </CardActions>
    </Card>
  );
}
