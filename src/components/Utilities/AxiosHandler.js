import axios from "axios";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
let options = { withCredentials: true, headers: { Authorization: "random" } };




export const Post = async (url, data) => {
  try {
    const response = await axios.post(BACKEND_URL + url, data, options);
    return response;
  } catch (err) {
    return null;
  }
};


export const Patch = async (url, data) => {
 
  try {
    const response = await axios.patch(BACKEND_URL + url, data, options);
  } catch (err) {
    return null;
  }
  
};


export const Delete = async (url, data) => {
  
  try {
    const response = await axios.delete(BACKEND_URL + url, data, options);
  } catch (err) {
    return null;
  }
};



export const Get = async (url) => { 

let cancelToken;
  if(typeof(cancelToken) !== typeof(undefined))
  {
    cancelToken.cancel("Canceling previous req");
  }

  cancelToken = axios.CancelToken.source();

  try {
    const response = await axios.get(BACKEND_URL + url);
   return response;
    
  } catch (err) {
    console.log(err)
   return null;
  }
  
};

