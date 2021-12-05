import React from 'react'
import Card from './Card'
import './../app.css'
import Chip from '@mui/material/Chip';
import { Container } from '@mui/material'
import Typography from '@mui/material/Typography';
const Courses = (props)=>{
  return (
    <Container>
      <Typography gutterBottom variant="h5" component="div">
          {props.category} &nbsp;<Chip label={props.number} />
        </Typography>
    <div className="container">
      <Card url="https://uploads-ssl.webflow.com/5f841209f4e71b2d70034471/6078b650748b8558d46ffb7f_Flutter%20app%20development.png"/>
      <Card url="https://appinventiv.com/wp-content/uploads/sites/1/2019/08/How-Much-Does-React-Native-App-Development-Costs.png"/>
      <Card url="https://image.freepik.com/free-vector/cryptographic-officer-system-administrator-create-algorithm-code-key-owner-blockchain-cryptography-encryption-algorithm-concept_335657-1835.jpg"/>
      <Card url="https://image.freepik.com/free-vector/cryptographic-officer-system-administrator-create-algorithm-code-key-owner-blockchain-cryptography-encryption-algorithm-concept_335657-1835.jpg"/>
      <Card url="https://image.freepik.com/free-vector/cryptographic-officer-system-administrator-create-algorithm-code-key-owner-blockchain-cryptography-encryption-algorithm-concept_335657-1835.jpg"/>
      <Card url="https://image.freepik.com/free-vector/cryptographic-officer-system-administrator-create-algorithm-code-key-owner-blockchain-cryptography-encryption-algorithm-concept_335657-1835.jpg"/>
      <Card url="https://image.freepik.com/free-vector/cryptographic-officer-system-administrator-create-algorithm-code-key-owner-blockchain-cryptography-encryption-algorithm-concept_335657-1835.jpg"/>
      
    </div>
    </Container>
  )
}

export default Courses;