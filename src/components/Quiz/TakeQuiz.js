import React from "react";
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


function Quiz() {
    const data = [
       1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30
      ];

  return (
    <Grid container spacing={2} sx={{paddingLeft:{xs:1,sm:3},paddingRight:{xs:1,sm:3},paddingTop:3,paddingBottom:3}}>
       <Grid item sm={12} xs={12}>
      <Stack direction="row" spacing={1} overflow="scroll">
      {data.map((num) => (
        <Button variant="contained">{num}</Button>
      ))}
      
      </Stack>
      </Grid>

      <Grid item sm={12} sm={12}>
      <FormControl component="fieldset">
      <FormLabel component="legend"><p>This set of Data Structure Multiple Choice Questions & Answers (MCQs) focuses on “Stack Operations – 1”.</p></FormLabel>
      <RadioGroup
        aria-label="gender"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        <FormControlLabel value="op4" control={<Radio />} label="Op4" />
      </RadioGroup>
      <br/>
      <ButtonGroup disableElevation variant="contained">
      <Button>Next</Button>
      <Button>Previous</Button>
    </ButtonGroup>
    </FormControl>
    

      </Grid>
     
      {/* <Grid item xs={6} md={4}>
       
      </Grid>
      <Grid item xs={6} md={8}>
        
      </Grid> */}
    </Grid>
  );
}

export default Quiz;
