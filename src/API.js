//const axios = require('axios');
//const POSTS = "https://jsonplaceholder.typicode.com/posts";
const data = require('./data.json')

const FetchRabbitMQ = () =>{
  // code to Fetch RabbitMQ data to display on screen
}

const ActivateListner = (Listner) =>{
  // code  to activate the Listner
  console.log(Listner)
}

const DeactivateListner = (Listner) =>{
  // code  to Deactivate the Listner
  console.log(Listner)
}


const getData = ()=>{
  return data;
}

module.exports =  {getData,FetchRabbitMQ,ActivateListner,DeactivateListner};