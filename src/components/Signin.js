import React from "react";
import { Container } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import logo from "./../images/logo.png";
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
function Login() {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorText, setEmailErrorText] = React.useState("");
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
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
        error={false}
        className="log-input"
        id="outlined-error-helper-text"
        label="Email"
        defaultValue="example@gmail.com"
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
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange("password")}
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
      <br/>
      <br/>
      <Button className="login-button" variant="contained">
        Sign In
      </Button>
      <p className="qustion">
      <Link href="/signup" color="inherit" underline="none">
        Forgot Password?
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
