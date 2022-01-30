import React from "react";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';
import Typography from "@mui/material/Typography";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AlertTitle from "@mui/material/AlertTitle";
import Alert from "@mui/material/Alert";
import TextField from '@mui/material/TextField';

 function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '30ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Name" variant="outlined" />
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <TextField className="w-100" id="outlined-basic" label="Subject" variant="outlined" />
      <TextField className="w-100" id="outlined-basic" multiline
          rows={4} label="Message" variant="outlined" />
        <Button className="submit-btn" variant="contained" endIcon={<SendIcon />}>send</Button>
    </Box>
  );
}



function BasicCard() {
  return (
   
      <CardContent>
        <Alert
          severity="info"
          icon={<AddIcCallIcon fontSize="large" />}
          className="contact-com"
        >
          <AlertTitle>
            {" "}
            <h3 className="contact-title">Call us</h3>{" "}
          </AlertTitle>
          <strong className="qustion">+91 8310946163</strong>
        </Alert>
        <br/>
        <Alert
          severity="info"
          icon={<AttachEmailIcon fontSize="large" />}
          className="contact-com"
        >
          <AlertTitle>
            {" "}
            <h3 className="contact-title">Email us</h3>{" "}
          </AlertTitle>
          <strong className="qustion">example@gmail.com</strong>
        </Alert>
        <br/>
        <Alert
          severity="info"
          icon={<AddLocationAltIcon fontSize="large" />}
          className="contact-com"
        >
          <AlertTitle>
            {" "}
            <h3 className="contact-title">Address</h3>{" "}
          </AlertTitle>
          <strong className="qustion">Not disclosure</strong>
        </Alert>
      </CardContent>
    
  );
}

function Contactus() {
  return (
    <Container>
        <br/>
        <br/>
        <br/>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={5}>
          <BasicCard />
        </Grid>
        <Grid item xs={12} sm={7}>
          <BasicTextFields />
        </Grid>
      </Grid>
      <br/>
        <br/>
        <br/>
    </Container>
  );
}

export default Contactus;
