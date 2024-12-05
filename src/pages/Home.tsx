import React from "react";
import { AppBar, Toolbar, Typography, Button, Box, Container, TextField, Grid, Card, CardMedia, CardContent } from "@mui/material";
import styles from './home.module.css';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearUser } from '../redux/slices/userSlice';
import { RootState } from '../store/store'


const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Seleciona o estado do usuário
  const user = useSelector((state: RootState) => state.user);

  const handleLogout = () => {
    dispatch(clearUser()); // Limpa o estado do usuário
    navigate('/login'); // Redireciona para a página de login
  };



  return (
    <>
      {/* Navbar */}
      <AppBar className={styles.nav1} position="static" color="transparent" elevation={0}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <img src="/logo.png" alt="Logo" style={{ height: "7rem", width: "10rem" }} />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button color="inherit">Home</Button>

            <Link to="/Vagas"
              style={{
                textDecoration: "none",
                color: "inherit",
                padding: "8px 16px",
                borderRadius: "4px",
                fontWeight: "bold",
                transition: "box-shadow 0.3s",
                boxShadow: "none",

              }}
            >
              VAGAS


            </Link>

            <Link to="/postar-vaga"
              style={{
                textDecoration: "none",
                color: "inherit",
                padding: "8px 16px",
                borderRadius: "4px",
                fontWeight: "bold",
                transition: "box-shadow 0.3s",
                boxShadow: "none",

              }}
            >
              CRIAR VAGA


            </Link>
            <Button color="inherit">Empresas</Button>
            <Button color="inherit">Sobre</Button>

            {/* Verificação de usuário logado */}
            {user ? (
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                {/* Exemplo de um link de "Sair" (Logout) */}
                <Button
                  color="inherit"
                  onClick={handleLogout} // A função de logout
                  sx={{ fontWeight: "bold", marginTop: 0.5 }}
                >
                  Sair
                </Button>
              </Box>

            ) :
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                {/* Link "Entrar" estilizado */}
                <Link
                  to="/login"
                  style={{
                    marginTop: "20px",
                    textDecoration: "none",
                    backgroundColor: "#005988",
                    color: "#FFFFFF",
                    fontWeight: "bold",
                    padding: "8px 24px",
                    borderRadius: "20px",
                    textAlign: "center",
                    display: "inline-block",
                    transition: "background-color 0.3s",
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
            }
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box sx={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
        <Container maxWidth="lg" sx={{ display: "flex", alignItems: "center", gap: 4 }}>
          <Box sx={{ flex: 1 }}>
            <Typography className={`${styles.texto1} ${styles.textoExtrabold}`} variant="h3" gutterBottom color="#005988">
              Sua vaga a <br /> <span>um clique de</span> você
            </Typography>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              Aproximando talentos das oportunidades certas.
            </Typography>
            <Box sx={{ display: "flex", gap: 2, marginTop: 3 }}>
              <TextField fullWidth placeholder="Cargo ou palavra-chave" variant="outlined" />
              <TextField fullWidth placeholder="Localidade" variant="outlined" />
              <Button className={styles.buscar} variant="contained" size="large">
                Buscar
              </Button>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ marginTop: 2 }}>
              Popular: UI Designer, UX Designer, Contador, Adm
            </Typography>
          </Box>
          <Box sx={{ flex: 1 }}>
            <img src="/hero-image.png" alt="Colaborador sorrindo" style={{ width: "80%", borderRadius: "8px", height: "20%" }} />
          </Box>
        </Container>
      </Box>

      {/* Missão, Visão e Valores */}
      <Box sx={{ backgroundColor: "#005988", py: 4, display: "flex", justifyContent: "center" }}>
        <Container
          sx={{
            backgroundColor: "#005988",
            color: "white",
            borderRadius: 3,
            width: "100%", // Ajusta para ocupar todo o espaço permitido pelo Container
            maxWidth: "900px", // Define a largura máxima desejada
            padding: 3, // Espaçamento interno
          }}
        >
          <Grid container spacing={3} alignItems="center">
            {/* Missão */}
            <Grid item xs={12} sm={4} textAlign="center">
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Missão
              </Typography>
              <Typography fontSize="0.95rem" >
                Conectar talentos a oportunidades, facilitando processos e contribuindo para o sucesso de candidatos e empresas.
              </Typography>
            </Grid>

            {/* Visão */}
            <Grid item xs={12} sm={4} textAlign="center">
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Visão
              </Typography>
              <Typography fontSize="0.95rem">
                Ser a plataforma de empregos mais confiável e reconhecida, promovendo o crescimento de profissionais e empresas.
              </Typography>
            </Grid>

            {/* Valores */}
            <Grid item xs={12} sm={4} textAlign="center">
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Valores
              </Typography>
              <Typography fontSize="0.95rem" component="div">
                • Qualidade <br />• Inovação <br />• Ética e Transparência <br />• Sucesso do cliente
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Vagas em Destaque */}
      <Box sx={{ backgroundColor: "#F9F9F9", py: 6 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Typography variant="h4" gutterBottom>
              Vagas em Destaque
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Veja as vagas que mais fazem sucesso
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {[1, 2, 3].map((card) => (
              <Grid item xs={12} sm={6} md={4} key={card}>
                <Box
                  sx={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "8px",
                    overflow: "hidden",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <Box
                    component="img"
                    src={`/vaga-${card}.jpg`}
                    alt={`Vaga ${card}`}
                    sx={{
                      width: "100%",
                      height: "140px",
                      objectFit: "cover",
                    }}
                  />
                  <Box sx={{ p: 2, flexGrow: 1 }}>
                    <Typography variant="h6" gutterBottom>
                      Título da Vaga
                    </Typography>
                    <Typography color="text.secondary">Local: Recife</Typography>
                    <Typography color="text.secondary">Tipo: Presencial</Typography>
                  </Box>
                  <Box sx={{ p: 2, textAlign: "center" }}>
                    <Button variant="contained" size="small" sx={{ width: "100%" }}>
                      Candidatar-se
                    </Button>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>


      {/* "Seja Certeiro na Vaga" */}
      <Box sx={{ backgroundColor: "#FDF8EE", py: 8 }}>
        <Container maxWidth="lg" sx={{ display: "flex", alignItems: "center", gap: 6 }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h4" color="#050C26" gutterBottom>
              Seja <strong>Certeiro na</strong> Vaga
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Vagas sem pegadinhas com links obscurecidos e redirecionamentos desnecessários.
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Plataforma moderna e acessível. Descubra tudo que podemos oferecer além das vagas em destaque.
            </Typography>
          </Box>
          <Box sx={{ flex: 1 }}>
            <img src="/seja-certeiro.png" alt="Ilustração de pessoa no notebook" style={{ width: "100%", borderRadius: "8px" }} />
          </Box>
        </Container>
      </Box>

      {/* Comentários dos Contratados */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" gutterBottom>
            <h3>O Que os Contratados Dizem</h3>
            <p >O que as pessoas que foram contratadas <br />
              estão comentando</p>
          </Typography>
          <Grid container spacing={4}>
            {[1, 2, 3].map((testimonial) => (
              <Grid item xs={12} sm={4} key={testimonial}>
                <Card>
                  <CardContent>
                    <Typography variant="body1">
                      "A plataforma é intuitiva e me conectou com empresas incríveis. A experiência foi muito fácil, e hoje estou na vaga dos sonhos!"
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 2 }}>
                      - Nome da Pessoa
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Cursos Gratuitos */}
      <Box sx={{ backgroundColor: "white", py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" gutterBottom>
            Cursos Gratuitos
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary" gutterBottom>
            Parceiro com cursos gratuitos em diversas plataformas.
          </Typography>
          <Grid container spacing={3}>
            {[1, 2, 3].map((course) => (
              <Grid item xs={12} sm={6} md={4} key={course}>
                <Card>
                  <CardMedia component="img" height="140" image={`/curso-${course}.png`} alt="Curso em destaque" />
                  <CardContent>
                    <Typography variant="h6">Título do Curso</Typography>
                    <Typography color="text.secondary">Parceiro: Nome da Plataforma</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Empresas Parceiras */}
      <Box sx={{ py: 4, textAlign: "center", backgroundColor: "#white" }}>
        <Typography variant="h5" gutterBottom>
          Empresas Parceiras
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 4, flexWrap: "wrap" }}>
          <img src="/walmart-logo.png" alt="Walmart" style={{ width: "8rem", height: "8rem" }} />
          <img src="/cisco-logo.png" alt="Cisco" style={{ width: "20rem", height: "8rem" }} />
          <img src="/volvo-logo.png" alt="Volvo" style={{ width: "8rem", height: "8rem" }} />
          <img src="/deloitte-logo.png" alt="Deloitte" style={{ width: "20rem", height: "8rem" }} />
          <img src="/okta-logo.png" alt="Okta" style={{ width: "8rem", height: "8rem" }} />
        </Box>
      </Box>


      {/* Inscrição */}
      <Box sx={{ py: 6, backgroundColor: "#005988", color: "#FFF", textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>
          Inscreva-se e receba diversas vagas
        </Typography>
        <Box sx={{ maxWidth: "600px", margin: "0 auto", display: "flex", gap: 2, mt: 3 }}>
          <TextField
            fullWidth
            placeholder="Endereço de e-mail"
            variant="outlined"
            sx={{ backgroundColor: "#FFF", borderRadius: "4px" }}
          />
          <Button variant="contained" size="large" sx={{ backgroundColor: "#FFF", color: "#005988" }}>
            Enviar
          </Button>
        </Box>
      </Box>


      {/* Rodapé */}
      <Box sx={{ py: 6, backgroundColor: "#005988", color: "#FFF", marginTop: "50px" }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom sx={{ color: "#FFF" }}>
                Sobre Nós
              </Typography>
              <Typography variant="body2" sx={{ color: "#FFF" }}>
                A Vaga Certa é uma plataforma de empregos que conecta talentos às melhores oportunidades de forma ágil, confiável e acessível.
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
              <Typography variant="h6" gutterBottom sx={{ color: "#FFF" }}>
                Contato
              </Typography>
              <Typography variant="body2" sx={{ color: "#FFF" }}>
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

export default Home;
