import React from 'react';
import { Box, Typography, TextField, Button, Stack } from '@mui/material';
import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './auth.module.css';

function ResetPassword() {
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const code = formData.get('code') as string;
    const newPassword = formData.get('new-password') as string;
    const confirmPassword = formData.get('confirm-password') as string;

    if (newPassword !== confirmPassword) {
      alert('As senhas não coincidem.');
      return;
    }

    alert(`Código: ${code}\nNova senha cadastrada com sucesso!`);
    navigate('/login');
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
          Redefinição de senha
        </Typography>
        <Typography variant="body1" align="center" color="white" className={styles.text}>
          Insira o código enviado para o seu email e defina sua nova senha.
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
            Digite o código e redefina sua senha
          </Typography>
          <Stack spacing={2} className={styles.inputStack}>
            <TextField
              required
              fullWidth
              id="code"
              label="Código"
              name="code"
              autoComplete="off"
              variant="outlined"
            />
            <TextField
              required
              fullWidth
              id="new-password"
              label="Nova senha"
              name="new-password"
              type="password"
              variant="outlined"
            />
            <TextField
              required
              fullWidth
              id="confirm-password"
              label="Confirmar senha"
              name="confirm-password"
              type="password"
              variant="outlined"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={styles.submitButton}
            >
              Redefinir senha
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default ResetPassword;


