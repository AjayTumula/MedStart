

import './App.css'
import Hospital from './components/Home';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import medStartLogo from './assets/logomed.png';
import Home from './components/Home';

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
              href="#app-bar-with-responsive-menu"
              sx={{
                fontFamily: 'sans-serif',
                fontWeight: 700,
                letterSpacing: '.2rem',
                color: 'black',
                textDecoration: 'none',
              }}
            >
            MedStart
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>

     <Home />

    </div>  
  )
}

export default App
