import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Toolbar,
  AppBar,
} from '@mui/material';
import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/slices/userSlice';
import { AppDispatch } from '../store/store';
import { Link } from 'react-router-dom'; // Import necessário para Links
import Parse from '../config/parseConfig';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      await Parse.User.logIn(email, password);

      dispatch(setUser(email));

      alert('Login realizado com sucesso!');
      navigate('/');
    } catch (error: any) {
      console.error('Erro ao fazer login:', error);
      alert('Erro ao fazer login: ' + error.message);
    }
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

  return (
    <>
      {/* Navbar */}
      <AppBar position="static" color="transparent" elevation={0} sx={{padding: 0, margin: 0}}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <img src="/logo.png" alt="Logo" style={{ height: "7rem", width: "10rem" }} />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
           
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit', padding: '8px 16px', borderRadius: '4px', fontWeight: 'bold' }}>Home</Link>
            <Link to="/Vagas" style={{ textDecoration: 'none', color: 'inherit', padding: '8px 16px', borderRadius: '4px', fontWeight: 'bold' }}>Vagas</Link>
            <Link to="/postar-vaga" style={{ textDecoration: 'none', color: 'inherit', padding: '8px 16px', borderRadius: '4px', fontWeight: 'bold' }}>Criar Vaga</Link>
            <Link to="/about" style={{ textDecoration: 'none', color: 'inherit', padding: '8px 16px', borderRadius: '4px', fontWeight: 'bold' }}>Sobre</Link>
            <Link
              to="/login"
              style={{
                textDecoration: 'none',
                backgroundColor: '#005988',
                color: '#FFFFFF',
                fontWeight: 'bold',
                padding: '8px 24px',
                borderRadius: '20px',
                transition: 'background-color 0.3s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#003F63")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#005988")}
            >
              Entrar
            </Link>

            {/* Link "Cadastrar-se" */}
            <Link
                  to="/register"
                  style={{
                    marginTop: "8px",
                    fontSize: "14px",
                    textDecoration: "none",
                    color: "#005988",
                    fontWeight: "bold",
                  }}
                >
                  Cadastrar-se
                </Link>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Tela de Login */}
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
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center',
    padding: '2rem',
    height: '100vh', // Adicionado para ocupar 100% da altura da tela
    flex: 1,
  }}
>
  <img
    src="logo-login.svg"
    alt="Logo Vaga Certa"
    style={{ width: '500px', marginBottom: '2px' }}
  />
  <Typography variant="h4" gutterBottom>
    Bem-vindo <br /> de volta!
  </Typography>
  <Typography variant="body1" align="center" color="white">
    Acesse sua conta agora <br /> mesmo.
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
              Faça login na sua conta
            </Typography>
            <Typography variant="body2" color="gray" sx={{ mb: 3 }}>
              Insira seus dados
            </Typography>
            <Stack spacing={2} sx={{ width: '100%' }}>
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
                sx={{ mt: 3, mb: 2, borderRadius: '50px', padding: '0.8rem' }}
              >
                Entrar
              </Button>
              <Button
                variant="text"
                color="primary"
                onClick={handleForgotPassword}
                sx={{ textTransform: 'none', fontWeight: 400 }}
              >
                Esqueci minha senha
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Login;
