import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from '@mui/material/Link';
//import jyo from './../../images/';

export default function DeveloperCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }} alt>
      <Avatar
        alt={props.name}
        src={props.image}
        sx={{ width: 156, height: 156 }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.developer}
        </Typography>
        <br/>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
        <Link href={props.insta} target="_blank" underline="hover">
        <InstagramIcon/>
        </Link>
        <Link href={props.git} target="_blank" underline="hover">
        <GitHubIcon/>
        </Link>
        <Link href={props.linkedin} target="_blank" underline="hover">
        <LinkedInIcon/>
        </Link>
        </Stack>
      </CardContent>
      
    </Card>
  );
}
