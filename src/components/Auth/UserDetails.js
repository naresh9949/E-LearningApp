import React, { useState,useEffect } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Autocomplete from "@mui/material/Autocomplete";
import { useSearchParams } from 'react-router-dom';
import Spinner from './../SharedComponents/Spinner';
import {Get, Post} from './../Utilities/AxiosHandler';
function UserDetails() {
    
const [searchParams] = useSearchParams();
const email = searchParams.get('email')
const [firstName, setFirstName] = useState("");
const [loading, setLoading] = useState(true);
const [lastName, setLastName] = useState("");
const [branch, setBranch] = useState("");
const [institute, setInstitute] = useState("");
const [number, setNumber] = useState("");
const [branches, setBranches] = useState(["CSE", "ECE"]);
const [institutes, setInstitutes] = useState([34,44,4,4]);
const [inputValue, setInputValue] = React.useState('');

  const handleSave = async() => {
      const object = {
        first_name : firstName,
        last_name: lastName,
        branch: branch,
        institute_name: institute,
        mobile: number,
        email:email
      }

        const res = await Post('/api/user/updateuser',object);
      if(res && res.status === 201)
          window.location = '/';
        
  }

  useEffect(async ()=>{
    

    const res1 = await Get('/dashboard/api/home/getBranches');
    if(res1 && res1.status===200)
        setBranches(res1.data)

    const res2 = await Get('/dashboard/api/home/getInstitutions');
    if(res2 && res2.status===200)
        setInstitutes(res2.data)

    setLoading(false)
    
  },[])
  if(loading)
  return <Spinner/>
  
  return (
    <Grid container spacing={2} sx={{ paddingTop: "5%" }}>
      <Grid item sm={4} sx={{ display: { xs: "none", md: "flex" } }}>
        <CardMedia
          component="img"
          image="https://image.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7478.jpg"
          alt="Paella dish"
        />
      </Grid>
      <Grid
        container
        spacing={2}
        sm={8}
        sx={{ padding: { xs: 4 }, paddingTop: { md: 14 } }}
      >
        <Grid item sm={6} xs={12}>
          <TextField
            id="outlined-basic"
            fullWidth
            size="small"
            onChange={(event)=>{setFirstName(event.target.value)}}
            label="First Name"
            variant="outlined"
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField
            id="outlined-basic"
            fullWidth
            size="small"
            onChange={(event)=>{setLastName(event.target.value)}}
            label="Last Name"
            variant="outlined"
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField
            id="outlined-basic"
            fullWidth
            size="small"
            value={email}
            InputProps={{
                readOnly: true,
              }}
            label="Email"
            variant="outlined"
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField
            id="outlined-basic"
            fullWidth
            size="small"
            value="XXXXXXXXX"
            InputProps={{
                readOnly: true,
              }}
            label="Password"
            variant="outlined"
          />
        </Grid>

        <Grid item sm={6} xs={12}>
          <TextField
            id="outlined-basic"
            fullWidth
            size="small"
            onChange={(event)=>{setNumber(event.target.value)}}
            label="Contact Number"
            variant="outlined"
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Branch</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              size="small"
              value={branch}
              label="Branch"
              onChange={(event) => {
                setBranch(event.target.value);
              }}
            >
              {branches.map((item) => (
                <MenuItem value={item}>{item}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={12} xs={12}>
        <Autocomplete
        value={institute}
        onChange={(event, institute) => {
          setInstitute(institute);
        }}
        size="small"
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={institutes}
        fullWidth
        renderInput={(params) => <TextField {...params} label="Institute" />}
      />
        </Grid>
        <Grid item sm={2} xs={12}>
          <Button onClick={handleSave} fullWidth variant="contained">
            Save
          </Button>
        </Grid>
        <Grid item xs={6}>
          &nbsp;
        </Grid>
        <Grid item xs={6}>
          &nbsp;
        </Grid>
        <Grid item xs={6}>
          &nbsp;
        </Grid>
        <Grid item xs={6}>
          &nbsp;
        </Grid>
        <Grid item xs={6}>
          &nbsp;
        </Grid>
      </Grid>
    </Grid>
  );
}

export default UserDetails;
