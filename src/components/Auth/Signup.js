import React, { useState } from "react";
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
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import Spinner from "./../SharedComponents/Spinner";
import { Post, Get } from "./../Utilities/AxiosHandler";
import {setAuthCookie,getAuthCookie} from './../Utilities/UserHandler';
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import Cookies from 'universal-cookie';

let options = {
  maxAge: 1000 * 60 * 60 * 24 * 7,
}

function Login() {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorText, setEmailErrorText] = React.useState("");
  const [loading, setLoading] = useState(false);
  const [showpass, setShowpass] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const cookies = new Cookies();
  
  const responseGoogle = (response) => {
    console.log(response);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSignup = async () => {
    const obj = {
      email: email,
      password: password,
    };
    const res = await Post("/api/auth/signup", obj);
    
    if (res && res.status === 201){
      setAuthCookie(res.data.token);
      window.location = "/user/enroll?email=" + email;
    }
    else if (res && res.status === 200) {
      setLoading(false);
      setEmailError(true);
      setEmailErrorText(res.data.message);
    }
  };

  const handleGoogleLogin = async (googleData) => {
    
    const res = await Post("/api/auth/google", { token: googleData.tokenId });
    setAuthCookie(res.data.token);
    if(res){
     
      if(res.status === 200 || res.status===201)
      window.location = '/';
    }
    // store returned user somehow
  };

  const responseFacebook = async(response) => {

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

  if (loading) return <Spinner />;

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
        onChange={(event) => {
          setEmail(event.target.value);
        }}
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
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={(event) => {
                  setShowpass(!showpass);
                }}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showpass ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <br />
      <br />
      <Button
        onClick={handleSignup}
        className="login-button"
        variant="contained"
      >
        Sign Up
      </Button>
      <p className="qustion">
        By clicking on "signup" you agree to our
        <br />
        <Link href="/terms-of-service">Terms of service</Link>
        &nbsp;&nbsp; & &nbsp;&nbsp;
        <Link href="/privacy-policy">Privacy Policy</Link>
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
