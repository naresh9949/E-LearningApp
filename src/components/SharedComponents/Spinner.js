import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Container } from "@mui/material";
function Spinner() {
  return (
    <Container align="center" sx={{marginTop:'20%'}}>
      <CircularProgress color="secondary" />
      <p>Loading...</p>
    </Container>
  );
}

export default Spinner;
