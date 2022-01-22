import React,{useState} from "react";
import { Container } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import logo from "./../../images/logo.png";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import Spinner from './../SharedComponents/Spinner';
import {Post,Get} from './../Utilities/AxiosHandler';


function Login() {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorText, setEmailErrorText] = React.useState("");
  const [loading,setLoading] = useState(false);
  const [showpass,setShowpass] = useState(false);
  const [password,setPassword] = useState('');
  const [email,setEmail] = useState('');
  
 

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = async() => {
    setLoading(true)
    const obj = {
      email:email,
      password:password
    }
    const res = await Post('/api/auth/signup',obj);
    console.log(res)
    if(res && res.status===201)
      window.location = '/user/enroll?email='+email;
    else if(res && res.status===200){
      setEmailError(true);
      setEmailErrorText(res.data.message)
    }
  }

  // if(loading)
  // return <Spinner/>


  return (
    <Container align="center">
      <Avatar alt="Remy Sharp" src={logo} sx={{ width: 130, height: 130 }} />
      <h3 className="welcome">Create your account</h3>
      <p className="qustion">
        Already have an account?{" "}
        <span>
          <Link href="/signin" underline="none">
            Login?
          </Link>
        </span>
      </p>
      <TextField
        autoFocus
        error={emailError}
        className="log-input"
        id="outlined-error-helper-text"
        label="Email"
        defaultValue="example@gmail.com"
        onChange={(event)=>{setEmail(event.target.value)}}
        helperText={emailErrorText}
      />
      <br />
      <br />
      <FormControl variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          label="Password"
          className="log-input"
          id="outlined-adornment-password"
          type={showpass ? "text" : "password"}
          value={password}
          onChange={(event)=>{setPassword(event.target.value)}}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={(event)=>{setShowpass(!showpass)}}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showpass ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <br/>
      <br/>
      <Button onClick={handleLogin} className="login-button" variant="contained">
        Sign Up
      </Button>
      <p className="qustion"> 
          By clicking on "signup" you agree to our
          <br/>
      <Link href="/terms-of-service">
        Terms of service
        </Link>
        &nbsp;&nbsp; & &nbsp;&nbsp;
        <Link href="/privacy-policy">
        Privacy Policy
        </Link>
      </p>
      <Button className="social-log" variant="contained" startIcon={<GoogleIcon />}>
  Signin with google
</Button>
<br/>
<br/>
<Button className="social-log" variant="contained" startIcon={<FacebookIcon />}>
  Signin with facebook
</Button>
    </Container>
  );
}

export default Login;
