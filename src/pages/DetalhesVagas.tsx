import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  Button,
  Chip,
  Divider,
  IconButton,
  Grid,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FacebookIcon from "@mui/icons-material/Facebook";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import LayersSharpIcon from "@mui/icons-material/LayersSharp";
import WalletIcon from "@mui/icons-material/AccountBalanceWallet";
import LinkIcon from "@mui/icons-material/Link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailSharpIcon from "@mui/icons-material/EmailSharp";
import styles from "./home.module.css";

const DetalhesVagas: React.FC = () => {

  const location = useLocation();
  const vaga = location.state;

  if (!vaga) {
    return <div>Vaga não encontrada.</div>;
  }
  console.log("Página Detalhe da Vaga");
  console.log(vaga)
  return (
    <>
      {/* Barra de navegação */}
      <AppBar className={styles.nav1} position="static" color="transparent" elevation={0}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <img src="/logo.png" alt="Logo" style={{ height: "7rem", width: "10rem" }} />
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <NotificationsIcon sx={{ fontSize: 30, cursor: "pointer" }} />
            <AccountCircleIcon sx={{ fontSize: 30, cursor: "pointer" }} />
          </Box>
        </Toolbar>

        <Box sx={{ backgroundColor: "#f0f0f0", padding: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333" }}>
              Detalhes da Vaga
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Link to="/" style={linkStyle}>
                Home
              </Link>
              <span>/</span>
              <Link to="/Vagas" style={linkStyle}>
                Vagas
              </Link>
              <span>/</span>
              <Link to="/Marketing" style={linkStyle}>
                Marketing
              </Link>
              <span>/</span>
              <Typography sx={{ fontWeight: "bold", color: "#333" }}>Detalhes da Vaga</Typography>
            </Box>
          </Box>
        </Box>
      </AppBar>

      {/* Detalhes da vaga */}
      <Container sx={{ paddingTop: 4 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 6,
          }}
        >
          {/* Lado esquerdo */}
          <Box sx={{ flex: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <FacebookSharpIcon sx={{ fontSize: 80, color: "#1877f2" }} />
              <Box>
                <Typography variant="h5" fontWeight="bold">
                  {vaga.title}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography variant="body1" color="text.secondary">
                    Facebook
                  </Typography>
                  <CheckCircleIcon sx={{ fontSize: 16, color: "#4caf50" }} />
                  <Chip
                    label="FULL-TIME"
                    color="success"
                    size="small"
                    sx={{ fontWeight: "bold", fontSize: "0.75rem" }}
                  />
                  <Typography variant="body2" color="text.secondary">
                    Presencial
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Descrição */}
            <Box sx={{ marginTop: 3 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Descrição da Vaga
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                {vaga.description}
              </Typography>




            </Box>
            <Box sx={{ marginTop: 3 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Requisito da vaga
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                {vaga.requirements}
              </Typography>




            </Box>
          </Box>

          {/* Lado direito */}
          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 1 }}>
              <IconButton color="primary">
                <BookmarkIcon />
              </IconButton>
              <Button variant="contained" color="primary" size="large">
                Inscreva-se Agora
              </Button>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: 1,
                border: "1px solid #ddd",
                borderRadius: 1,
                backgroundColor: "#f9f9f9",
                marginTop: 4,
              }}
            >
              <Box sx={{ flex: 3 }}>
                <Typography variant="h6" color="text.secondary">
                  Salário (BR)
                </Typography>
                <Typography fontWeight="bold" color="green">
                  R$ {vaga.salary}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Salário mensal
                </Typography>
              </Box>
              <Divider orientation="vertical" flexItem />
              <Box sx={{ flex: 2 }}>
                <Typography variant="h6" color="text.secondary">
                  Localização da Vaga
                </Typography>
                <Typography variant="body1" fontWeight="bold">
                  {vaga.localization}
                </Typography>
              </Box>
            </Box>

            {/* Nova box - Visão geral do trabalho */}
            <Box
              sx={{
                padding: 3,
                border: "1px solid #ddd",
                borderRadius: 1,
                backgroundColor: "#f9f9f9",
                marginTop: 2,
              }}
            >
              <Box sx={{ display: "flex", gap: 1, marginBottom: 2 }}>
                <Box sx={{ textAlign: "center" }}>
                  <LayersSharpIcon color="primary" />
                  <Typography>CARGA HORARIA</Typography>
                  <Typography color="text.secondary">{vaga.workload}</Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", gap: 4 }}>
                <Box sx={{ textAlign: "center" }}>
                  <WalletIcon color="primary" />
                  <Typography>SALÁRIO ANUAL</Typography>
                  <Typography color="text.secondary">R$ {vaga.salary * 12}</Typography>
                </Box>

              </Box>

              <Divider sx={{ my: 2 }} />

              {/* Segunda parte */}
              <Typography variant="h6">Compartilhe a vaga</Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2.5 }}>
                <IconButton>
                  <LinkIcon style={{ color: "blue" }} />
                </IconButton>
                <Typography>Copiar links</Typography>
                <IconButton>
                  <LinkedInIcon style={{ color: "blue" }} />
                </IconButton>
                <IconButton>
                  <FacebookIcon style={{ color: "blue" }} />
                </IconButton>
                <IconButton>
                  <TwitterIcon style={{ color: "blue" }} />
                </IconButton>
                <IconButton>
                  <EmailSharpIcon style={{ color: "blue" }} />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Rodapé */}
      <Box sx={{ py: 6, backgroundColor: "#003D66", color: "#FFF", marginTop: "50px" }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom>
                Sobre Nós
              </Typography>
              <Typography variant="body2">
                A Vaga Certa é uma plataforma de empregos que conecta talentos às melhores
                oportunidades de forma ágil, confiável e acessível.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom>
                Empresa
              </Typography>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                <li>Sobre Nós</li>
                <li>Como Funciona?</li>
                <li>Principais Vagas</li>
                <li>Serviços</li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom>
                Vagas
              </Typography>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                <li>Categorias de Vagas</li>
                <li>Vagas Presenciais</li>
                <li>Vagas Remotas</li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom>
                Contato
              </Typography>
              <Typography variant="body2">
                +55 81 9 9697-3442
                <br />
                vagacertape@gmail.com
                <br />
                Recife, Pernambuco
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="body2" color="inherit" align="center" sx={{ mt: 4 }}>
            © VagaCerta, 2024
          </Typography>
        </Container>
      </Box>
    </>
  );
};

// Estilo dos links
const linkStyle = {
  textDecoration: "none",
  color: "inherit",
  fontWeight: "normal",
};

export default DetalhesVagas;
