import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
} from '@mui/material';
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
        }}
      >
        {/* Parte Esquerda */}
        <Box
          sx={{
            backgroundColor: '#005988',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            padding: '2rem',
            flex: 1,
            marginTop: "4rem"
          }}
        >
          <img
            src="logo-login.svg"
            alt="Logo Vaga Certa"
            style={{ width: '500px', marginBottom: '2px' }}
          />
          <Typography variant="h4" gutterBottom>
            Junte-se a nós!
          </Typography>
          <Typography variant="body1" align="center" color="white">
            Crie sua conta e aproveite nossas oportunidades.
          </Typography>
        </Box>

        {/* Parte Direita */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            backgroundColor: '#f9f9f9',
            padding: '2rem',
          }}
        >
          <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
              maxWidth: '450px',
              padding: '0 1rem',
            }}
            onSubmit={handleSubmit}
          >
            <Typography
              variant="h5"
              align="center"
              color="black"
              gutterBottom
              sx={{ fontWeight: 500 }}
            >
              Crie sua conta
            </Typography>
            <Typography variant="body2" color="gray" sx={{ mb: 3 }}>
              Preencha seus dados
            </Typography>
            <Stack spacing={2} sx={{ width: '100%' }}>
              <TextField
                required
                fullWidth
                id="name"
                label="Nome"
                name="name"
                autoComplete="name"
                variant="outlined"
              />
              <TextField
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                variant="outlined"
              />
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
                color="primary"
                sx={{
                  mt: 3,
                  mb: 2,
                  borderRadius: '50px',
                  padding: '0.8rem',
                }}
              >
                Registrar
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Register;
