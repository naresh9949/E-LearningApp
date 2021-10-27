import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
const RegistationForm = () => {
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
    <React.Fragment>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "90vh", paddingTop: "90" }}
      >
        <Box sx={{ m: 8 }} />
        <Grid item xs={5}>
          <Card sx={{ maxWidth: 345,alignItems:"center"}}>
            <CardContent >
            <Typography gutterBottom variant="h5">
                SIGN IN
              </Typography>
              <Box sx={{ m: 5 }} />
              <FormControl
                sx={{ width: "40ch"}}
                variant="outlined"
              >
                <TextField
                  fullWidth
                  error={false}
                  id="outlined-error"
                  label="Email"
                  defaultValue="Hello World"
                  helperText=""
                />

                <Box sx={{ m: 1 }} />

                <FormControl
                  sx={{ width: "40ch", maxWidth: 445 }}
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    fullWidth
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
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                   <Box sx={{ m: 1 }} />
                   <Button variant="contained" size="large">
                   SIGN IN

        </Button>
              <Box sx={{ m: 1 }} />
                </FormControl>
              </FormControl>
            </CardContent>
          </Card>
          
        </Grid>
        
      </Grid>
    </React.Fragment>
  );
};

export default RegistationForm;
