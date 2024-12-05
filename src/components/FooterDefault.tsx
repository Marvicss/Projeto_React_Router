import {
    Typography,
    Box,
    Container,
    Grid,
} from "@mui/material";


function FooterDefault() {
    return (
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
    )
}

export default FooterDefault;