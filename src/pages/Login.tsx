import Header from '../components/Header';
import { Container, Box, Typography, TextField, Button, Stack } from '@mui/material';

function Login() {
  return (
    <>
      <Header />
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          minHeight: '100vh', 
          width: '100vw', 
          margin: 0,
          marginLeft: '-300px'
          
        }}
      >
        {/* Parte Esquerda */}
        <Box
          sx={{
            backgroundColor: '#1A1A8A',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
            flex: 1,
          }}
        >
          <Typography variant="h4" gutterBottom>Faça login e aproveite!</Typography>
          <Typography variant="body1">Descrever algo aqui ou não</Typography>
        </Box>

        {/* Parte Direita */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            backgroundColor: 'white',
            padding: '2rem',
          }}
        >
          <Container maxWidth="xs" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h5" align="center" color='black' gutterBottom>Login</Typography>
            <Box component="form" noValidate autoComplete="off" sx={{ mt: 2, width: '100%' }}>
              <Stack spacing={2}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  variant="outlined"
                />
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Senha"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  variant="outlined"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Entrar
                </Button>
              </Stack>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default Login;
