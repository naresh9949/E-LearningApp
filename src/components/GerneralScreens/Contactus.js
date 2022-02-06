import React, { useState } from "react";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import {Post} from './../Utilities/AxiosHandler';

function BasicTextFields() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [emailError,setEmailError] = useState({error:false,msg:null}); 
  const [submitted, setSubmitted] = useState(false);

  function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

  const handleSend = async() => {
    if(!validateEmail(email))
    {
      setEmailError({
        error:true,
        msg:'invalid email'
      })
    }else{
      setEmailError({
        error:false,
        msg:null
      })
    }

    const obj = {
      name:name,
      email:email,
      subject:message,
      message:message
    }

    const res = await Post('/api/feedback/Addfeedback',obj);
    if(res && res.status === 201)
      setSubmitted(true);

  };

  if(submitted)
  return <Container align="center" sx={{paddingTop:10}}>
    <p>we have received your message. we will get back to you shortly</p>
  </Container>


  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "30ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Name"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        label="Email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        variant="outlined"
        error={emailError.error}
        helperText={emailError.msg}
      />
      <TextField
        value={subject}
        className="w-100"
        id="outlined-basic"
        label="Subject"
        variant="outlined"
        onChange={(event) => {
          setSubject(event.target.value);
        }}
      />
      <TextField
        value={message}
        className="w-100"
        id="outlined-basic"
        onChange={(event) => {
          setMessage(event.target.value);
        }}
        multiline
        rows={4}
        label="Message"
        variant="outlined"
      />
      <Button variant="contained" onClick={handleSend} >
        send
      </Button>
    </Box>
  );
}

function Contactus() {
  return (
    <Container>
      <br />
      <br />
      <br />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={2.5}>
          &nbsp;
        </Grid>
        <Grid item xs={12} sm={7}>
          <BasicTextFields />
        </Grid>
        <Grid item xs={12} sm={2.5}>
          &nbsp;
        </Grid>
      </Grid>
      <br />
      <br />
      <br />
    </Container>
  );
}

export default Contactus;
