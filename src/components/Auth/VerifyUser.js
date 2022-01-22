import React,{useState,useEffect} from "react";
import { Container } from "@mui/material";
import tick from './../../images/tick.png';
import Avatar from "@mui/material/Avatar";
import Spinner from "./../SharedComponents/Spinner";
import {Post} from './../Utilities/AxiosHandler';
import {useParams } from "react-router-dom";

function VerifyUser() {
    const [loading,setLoading] = useState(true);
    let { id } = useParams();
    const obj = {id:id};

    useEffect(async () => {
        const res = await Post('/api/user/verify',obj);
        console.log(res)
        if(res && res.status === 201)
        {
            setLoading(false);
        }
    },[])

if(loading)
    return <Spinner/>

  return <Container align="center" sx={{paddingTop:'10%'}}>
      <Avatar alt="Remy Sharp" src={tick} sx={{ width: 200, height: 200 }} />
      <p>user verified successfully!</p>
     
  </Container>;
}

export default VerifyUser;
