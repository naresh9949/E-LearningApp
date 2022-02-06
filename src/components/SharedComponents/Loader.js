import { Container } from '@mui/material'
import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
function Loader() {
    return (
        <Container align="center" sx={{marginTop:10}}>
           <CircularProgress />
        </Container>
    )
}

export default Loader
