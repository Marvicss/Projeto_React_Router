import React from "react";
import { AppBar, Toolbar, Typography, Button, Box, Container, TextField, Grid, Card, CardMedia, CardContent, CardActions } from "@mui/material";
import styles from './home.module.css'
import { Link } from "react-router-dom";



const Home: React.FC = () => {
  return (
    <>
    
      {/* Navbar */}
      <AppBar className={styles.nav1} position="static" color="transparent" elevation={0}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Logo no canto esquerdo */}
          <Box>
            <img src="/logo.png" alt="Logo" style={{ height: "7rem", width: "10rem" }} />
          </Box>

          {/* Links no lado direito */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Vagas</Button>
            <Button color="inherit">Empresas</Button>
            <Button color="inherit">Contato</Button>
            <Link className={styles.header} to="/login" >
              Entrar
            </Link>
          </Box>
        </Toolbar>
</AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          
          height: "100vh", // Adiciona 100% da altura da tela
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center"
        }}
      >
        <Container maxWidth="lg" sx={{ display: "flex", alignItems: "center", gap: 4}}>
          <Box sx={{ flex: 1 }}>
            <Typography className={`${styles.texto1} ${styles.textoExtrabold}`} variant="h3" gutterBottom color="#005988" >
              Sua vaga a <br /> <span>um clique de</span> você
            </Typography>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              Aproximando talentos das oportunidades certas.
            </Typography>
            <Box sx={{ display: "flex", gap: 2, marginTop: 3 }}>
              <TextField fullWidth placeholder="Cargo ou palavra-chave" variant="outlined" />
              <TextField fullWidth placeholder="Localidade" variant="outlined" />
              <Button className={styles.buscar} variant="contained" size="large"  >
                Buscar
              </Button>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ marginTop: 2 }}>
              Popular: UI Designer, UX Designer, Contador, Adm
            </Typography>
          </Box>
          <Box sx={{ flex: 1 }}>
            <img
              src="/hero-image.png"
              alt="Pessoa sorrindo"
              style={{ width: "100%", borderRadius: "8px", height: "20%"}}
            />
          </Box>
        </Container>
      </Box>

      {/* Missão, Visão e Valores */}
      <Box sx={{ backgroundColor: "#005988", color: "white", padding: "3rem 0", borderRadius: 5}}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h5" gutterBottom>
                Missão
              </Typography>
              <Typography>
                Conectar talentos a oportunidades, facilitando processos e contribuindo para o sucesso de candidatos e empresas.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h5" gutterBottom>
                Visão
              </Typography>
              <Typography>
                Ser a plataforma de empregos mais confiável e reconhecida, promovendo o crescimento de profissionais e empresas.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h5" gutterBottom>
                Valores
              </Typography>
              <Typography>
                • Qualidade <br />• Inovação <br />• Ética e Transparência <br />• Sucesso do cliente
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Vagas em Destaque */}
      <Container maxWidth="lg" sx={{ padding: "3rem 0" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Vagas em Destaque
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" gutterBottom>
          Veja as vagas que mais fazem sucesso
        </Typography>
        <Grid container spacing={3}>
          {[1, 2, 3].map((card) => (
            <Grid item xs={12} sm={6} md={4} key={card}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={`/vaga-${card}.jpg`}
                  alt="Vaga em destaque"
                />
                <CardContent>
                  <Typography variant="h6">Título da Vaga</Typography>
                  <Typography color="text.secondary">Local: Recife</Typography>
                  <Typography color="text.secondary">Tipo: Presencial</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" variant="contained">
                    Candidatar-se
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
