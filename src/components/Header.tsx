import { AppBar, Toolbar, Link, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Header() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'space-between' }}>
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
          <Link
            component={RouterLink}
            to="/register"
            color="inherit"
            underline="none"
            sx={{ marginLeft: 197 }}
          >
            Registro
          </Link>
          <Link
            component={RouterLink}
            to="/login"
            color="inherit"
            underline="none"
            sx={{ justifyContent: 'space-between' }}
          >
            Login
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
