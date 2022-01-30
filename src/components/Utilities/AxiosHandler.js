import axios from "axios";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const options = { withCredentials: true, headers: { Authorization: "random" } };




export const Post = async (url, data) => {
  try {
    const response = await axios.post(BACKEND_URL + url, data,options);
    console.log(response);
    if(response && response.status && response.status===401)
      window.location = '/signin';
    return response;
  } catch (err) {
    const msg = err.toString();
    if(msg==='Error: Request failed with status code 401')
      window.location = '/signin';
    return null;
  }
};


export const Patch = async (url, data) => {
 
  try {
    const response = await axios.patch(BACKEND_URL + url, data,options);
    return response;
  } catch (err) {
    const msg = err.toString();
    if(msg==='Error: Request failed with status code 401')
      window.location = '/signin';
    return null;
  }
  
};


export const Delete = async (url, data) => {
  
  try {
    const response = await axios.delete(BACKEND_URL + url, data,options);
    
    return response;
  } catch (err) {
    const msg = err.toString();
    if(msg==='Error: Request failed with status code 401')
      window.location = '/signin';
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
    const response = await axios.get(BACKEND_URL + url,options);
   return response;
    
  } catch (err) {
   return null;
  }
  
};

