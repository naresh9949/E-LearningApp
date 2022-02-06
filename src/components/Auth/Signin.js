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
import {Post} from './../Utilities/AxiosHandler';
import {setAuthCookie} from './../Utilities/UserHandler';
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

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
    const res = await Post('/api/auth/signin',obj);
    console.log(res)
    setAuthCookie(res.data.token);
    if(res && res.status===200)
      window.location = '/';
    else if(res && res.status===201){
      setLoading(false)
      setEmailError(true);
      setEmailErrorText(res.data.message)
    }
  }

  const handleGoogleLogin = async (googleData) => {
    setLoading(true)
    const res = await Post("/api/auth/google", { token: googleData.tokenId });
    setAuthCookie(res.data.token);
    if(res){
      if(res.status === 200 || res.status===201)
      window.location = '/';
    }
    // store returned user somehow
  };

  const responseFacebook = async(response) => {
    setLoading(true)
    if(response && response.accessToken){
      const obj ={
        token:response.accessToken,
        email:response.email,
        picture : response.picture.data.url,
        id:response.id
      }
    const res = await Post('/api/auth/fb',obj);
    setAuthCookie(res.data.token);
    if(res)
    {
      if(res.status === 200 || res.status===201)
      window.location = '/';
    }
    }
  };

  const responseGoogle = (response) => {
    console.log(response);
  };


  if(loading)
  return <Spinner/>
  
  return (
    <Container align="center">
      <Avatar alt="Remy Sharp" src={logo} sx={{ width: 130, height: 130 }} />
      <h3 className="welcome">Welcome back</h3>
      <p className="qustion">
        Don't have account?{" "}
        <span>
          <Link href="/signup" underline="none">
            Register?
          </Link>
        </span>
      </p>
      <TextField
        autoFocus
        error={emailError}
        className="log-input"
        id="outlined-error-helper-text"
        label="Email"
        placeholder="example@gmail.com"
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
        Sign in
      </Button>
      <p className="qustion">
      <Link href="/signup" color="inherit" underline="none">
        Forgot Password?
        </Link>
      </p>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Signin with Google"
        render={(renderProps) => (
          <Button
            onClick={renderProps.onClick}
            className="social-log"
            variant="contained"
            startIcon={<GoogleIcon />}
            disabled={renderProps.disabled}
          >
            Signin with Google
          </Button>
        )}
        sx={{ width: "100% !important" }}
        onSuccess={handleGoogleLogin}
        onFailure={responseGoogle}
      />

      <br />
      <br />
      <FacebookLogin
        appId={process.env.REACT_APP_FACEBOOK_APP_ID}
        autoLoad={true}
        fields="name,email,picture"
        onClick={() => {console.log("PPPPP")}}
        render={(renderProps) => (
          <Button
            onClick={renderProps.onClick}
            className="social-log"
            variant="contained"
            startIcon={<FacebookIcon />}
          >
            Signin with facebook
          </Button>
        )}
        callback={responseFacebook}
      />
    </Container>
  );
}

export default Login;
