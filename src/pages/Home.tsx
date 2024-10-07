import { Container, Typography } from '@mui/material';
import Header from '../components/Header';


function Home() {
  return (
   
      <Container sx={{marginTop: 8}}>
      <Header />
      <Typography variant="h2">Bem-vindo à nossa página Home!</Typography>
      <Typography>Esta é a página inicial do nosso projeto =D.</Typography>
    </Container>
    
  )
}

export default Home
