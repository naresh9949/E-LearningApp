import React from "react";
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
function Login() {
    const [email, setEmail] = React.useState("");
    const [otp, setOtp] = React.useState("");
    const [password, setPassword] = React.useState("");
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorText, setEmailErrorText] = React.useState("");
  const [ui_obj, setUi] = React.useState({
      otp:false,
      password:false,
      btn_text : "send otp",
      email:null
  });
  const [values, setValues] = React.useState({
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const emailHandler = (event) => {
      setEmail(event.target.value)
  }

  const otpHandler = (event) => {
    setOtp(event.target.value)
}

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value)
}

const otpCheckHandler = () => {
    setUi({
        otp:false,
        password:true,
        btn_text : "confirm",
        email:email
    })
}

  const passwordHandler = ()=>{

    if(ui_obj.email===null){
    setUi({
        otp:true,
        password:false,
        btn_text : "confirm",
        email:email
    })
}else{
    setUi({
        otp:false,
        password:true,
        btn_text : "confirm",
        email:email
    })
}

    console.log(ui_obj)
  }
  return (
    <Container align="center" sx={{paddingTop:5}}>
      <Avatar alt="Remy Sharp" src={logo} sx={{ width: 130, height: 130 }} />
      <h3 className="welcome">Forgot Password?</h3>
      <p className="qustion">please enter your email id to receive OTP</p>
      <TextField
        autoFocus
        error={false}
        className="log-input"
        id="outlined-error-helper-text"
        label="Email"
        onChange={emailHandler}
        InputProps={{
            readOnly: ui_obj.otp || ui_obj.password,
          }}
        defaultValue="example@gmail.com"
        helperText={emailErrorText}
      />
      <br />
      <br />

        {ui_obj.otp &&  <TextField
        autoFocus
        className="log-input"
        id="outlined-error-helper-text"
        label="OTP"
        onChange={otpHandler}
        defaultValue="456785"
        helperText={emailErrorText}
      />}
      {ui_obj.password && (
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              label="Password"
              className="log-input"
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={passwordChangeHandler}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        ) }

            
            

      <br />
      <br />
      <Button className="login-button" onClick={passwordHandler} variant="contained">
        {ui_obj.btn_text}
      </Button>
      
    </Container>
  );
}

export default Login;
