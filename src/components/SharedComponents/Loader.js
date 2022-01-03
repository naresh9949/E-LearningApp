import { Container } from '@mui/material'
import React from 'react'

function Loader() {
    return (
        <Container align="center" sx={{height:'80vh'}}>
            <img src="https://i.pinimg.com/originals/d7/34/49/d73449313ecedb997822efecd1ee3eac.gif" alt=""/>
        </Container>
    )
}

export default Loader
