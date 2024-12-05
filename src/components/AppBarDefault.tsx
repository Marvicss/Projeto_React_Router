
import styles from '../pages/home.module.css'
import { Link } from "react-router-dom";


import {
    AppBar,
    Toolbar,
    Box,
} from "@mui/material";

function AppBarDefault() {
    return (
        <AppBar className={styles.nav1} position="static" color="transparent" elevation={0} >
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                    <img src="/logo.png" alt="Logo" style={{ height: "7rem", width: "10rem" }} />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Link to="/"
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
                        Home


                    </Link>

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
                        Vagas


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
                        Criar Vaga


                    </Link>

                    <Link to="/about"
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
                        Sobre


                    </Link>

                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default AppBarDefault;