import React from 'react';
import { Box, Typography, TextField, Button, Stack } from '@mui/material';
import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './auth.module.css';

function ForgotPassword() {
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;

    alert(`Um código foi enviado para o email: ${email}`);
    navigate('/reset-password');
  };

  return (
    <Box className={styles.container}>
      <Box className={styles.leftSection}>
        <img
          src="logo-login.svg"
          alt="Logo Vaga Certa"
          className={styles.logo}
        />
        <Typography variant="h4" gutterBottom className={styles.title}>
          Esqueceu sua senha?
        </Typography>
        <Typography variant="body1" align="center" color="white" className={styles.text}>
          Informe seu email para receber um código de recuperação.
        </Typography>
      </Box>

      <Box className={styles.rightSection}>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          className={styles.formContainer}
          onSubmit={handleSubmit}
        >
          <Typography variant="h5" align="center" color="black" gutterBottom className={styles.formTitle}>
            Recuperação de senha
          </Typography>
          <Typography variant="body2" color="gray" className={styles.formSubTitle}>
            Insira seu email
          </Typography>
          <Stack spacing={2} className={styles.inputStack}>
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={styles.submitButton}
            >
              Enviar código
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default ForgotPassword;


