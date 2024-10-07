import { Container, Typography } from '@mui/material'
import React from 'react'
import Header from '../components/Header'

const About = () => {
  return (
    <Container>
        <Header />
      <Typography variant="h2">Sobre Nós</Typography>
      <Typography>Informações sobre o projeto.</Typography>
    </Container>
  )
}

export default About
