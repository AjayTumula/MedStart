
import './App.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import medStartLogo from './assets/logomed.png';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import SelectHospital from './components/SelectHospital';

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

      <Routes>
        <Route path='/'  element={<Home />}/>
        <Route path='/clinic/:id'  element= {<SelectHospital />}/>
      </Routes>
    </div>  
  )
}

export default App;
