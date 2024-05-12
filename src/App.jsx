

import './App.css'
import Hospital from './components/Home';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import medStartLogo from './assets/logomed.png';

function App() {

  return (
    <div>
      <AppBar position="static" style={{background: 'white'}}>
      <Container maxWidth="xl" sx={{ml: 0}}>
        <Toolbar disableGutters >
          <img src={medStartLogo} style={{marginRight: 20}} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            // href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'sans-serif',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
           MedStart
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>

     <Hospital />
    </div>
   
  )
}

export default App
