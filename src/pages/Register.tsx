import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { Container, Box, Typography, TextField, Button, Stack } from '@mui/material';
import { FormEvent } from 'react';
import Parse from '../config/parseConfig';

function Register() {
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;

    if (password !== confirmPassword) {
      alert('As senhas não coincidem');
      return;
    }

    try {
      await Parse.User.logOut();
      localStorage.removeItem('Parse/CurrentUser');
      const user = new Parse.User();
      user.set('username', email);
      user.set('password', password);
      user.set('email', email);
      user.set('name', name);

      await user.signUp();
      alert('Usuário registrado com sucesso!');
      navigate('/login');
    } catch (error: any) {
      console.error('Erro ao registrar usuário:', error);
      alert('Erro ao registrar usuário: ' + error.message);
    }
  };

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
        }}
      >
        {/* Parte Esquerda */}
        <Box
          sx={{
            backgroundColor: '#005988',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: { xs: '3rem', md: '6rem' },
            flex: 1,
          }}
        >
          <Typography variant="h4" gutterBottom>
            Cadastre-se gratuitamente
          </Typography>
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
            <Typography variant="h5" align="center" color="black" gutterBottom>
              Cadastre-se
            </Typography>
            <Box component="form" noValidate autoComplete="off" sx={{ mt: 2, width: '100%' }} onSubmit={handleSubmit}>
              <Stack spacing={2}>
                <TextField required fullWidth id="name" label="Nome" name="name" variant="outlined" />
                <TextField required fullWidth id="email" label="Email" name="email" autoComplete="email" variant="outlined" />
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Senha"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  variant="outlined"
                />
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Repetir senha"
                  type="password"
                  id="confirmPassword"
                  variant="outlined"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    backgroundColor: '#1A1A8A',
                    '&:hover': { backgroundColor: '#141476' },
                  }}
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

export default Register;
