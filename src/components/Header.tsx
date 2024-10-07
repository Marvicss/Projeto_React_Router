import { AppBar, Toolbar, Typography, Link, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Header() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Box sx={{ display: 'flex', flexGrow: 1 }}>
          <Link
            component={RouterLink}
            to="/"
            color="inherit"
            underline="none"
            sx={{ marginRight: 2 }}
          >
            Home
          </Link>
          <Link
            component={RouterLink}
            to="/about"
            color="inherit"
            underline="none"
          >
            Sobre
          </Link>
        </Box>
        <Typography variant="h6" component="div">
          Meu Projeto
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
