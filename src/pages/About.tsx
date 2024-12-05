import React from 'react';
import { Box, Typography, Grid, Container, AppBar, Toolbar,  } from '@mui/material';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <>
      {/* Navbar */}
      <AppBar position="static" color="transparent" elevation={0} sx={{ padding: 0, margin: 0 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <img src="/logo.png" alt="Logo" style={{ height: "7rem", width: "10rem" }} />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Link
              to="/"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                padding: '8px 16px',
                borderRadius: '4px',
                fontWeight: 'bold',
              }}
            >
              Home
            </Link>
            <Link
              to="/Vagas"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                padding: '8px 16px',
                borderRadius: '4px',
                fontWeight: 'bold',
              }}
            >
              Vagas
            </Link>
            <Link
              to="/postar-vaga"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                padding: '8px 16px',
                borderRadius: '4px',
                fontWeight: 'bold',
              }}
            >
              Criar Vaga
            </Link>
            <Link
              to="/about"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                padding: '8px 16px',
                borderRadius: '4px',
                fontWeight: 'bold',
              }}
            >
              Sobre
            </Link>
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
          </Box>
        </Toolbar>
      </AppBar>

      {/* Conteúdo da página About */}
      <Box sx={{ backgroundColor: '#005988', minHeight: '100vh', py: 6,}}>
        {/* Sessão Sobre Nós */}
        <Box sx={{ backgroundColor: '#FFFFFF', py: 6, marginTop: 4,  }}>
          <Container maxWidth="md">
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                textAlign: 'left', // Alinha o texto à esquerda
                mb: 4, // Adiciona margem inferior
              }}
            >
              Sobre nós
            </Typography>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: 1.8,
                    textAlign: 'justify',
                    color: 'black',
                  }}
                >
                  O Vaga Certa nasceu com o propósito de transformar a maneira como talentos e
                  empresas se conectam no mercado de trabalho. Somos mais do que uma plataforma de
                  empregos: somos parceiros na construção de carreiras e no fortalecimento de
                  negócios.
                  <br />
                  <br />
                  Combinamos tecnologia, inovação e um compromisso genuíno com a inclusão para
                  oferecer uma experiência única e eficiente. Nossa equipe trabalha incansavelmente
                  para reunir as melhores vagas, criar oportunidades reais e ajudar candidatos a
                  alcançarem suas aspirações profissionais.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <img
                  src="/sobre-nos-image.jpg"
                  alt="Equipe em reunião"
                  style={{ width: '100%', borderRadius: '8px' }}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Como Funcionamos */}
        <Box sx={{ backgroundColor: '#005988', py: 6, color: '#FFFFFF' }}>
          <Container>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              Como funcionamos?
            </Typography>
            <Grid container spacing={4} justifyContent="center" sx={{ mt: 3 }}>
              <Grid item xs={12} sm={4}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                    1. Conexão Direta e Eficiente
                  </Typography>
                  <Typography color="#FFFFFF">
                    Simplificamos o processo de busca por vagas, aproximando talentos de empresas
                    que realmente atendem às expectativas e objetivos profissionais.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                    2. Ferramentas e Recursos
                  </Typography>
                  <Typography color="#FFFFFF">
                    Disponibilizamos cursos gratuitos, dicas práticas e conteúdos exclusivos para
                    preparar candidatos e aprimorar suas habilidades no mercado de trabalho.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                    3. Suporte e Crescimento
                  </Typography>
                  <Typography color="#FFFFFF">
                    Atuamos como ponte entre empresas e candidatos, facilitando contratações rápidas
                    e assertivas e promovendo a inclusão e a inovação.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default About;
