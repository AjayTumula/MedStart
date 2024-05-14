
import './App.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import medStartLogo from './assets/logomed.png';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import SelectHospital from './components/SelectHospital';
import { useEffect, useState } from 'react';

function App() {


  const [latLng, setLatLng]  = useState({});

  useEffect(() => {
    if("geolocation" in navigator){
        navigator.geolocation.getCurrentPosition((position) => {
            setLatLng({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            })
            console.log(latLng);
        })   
    }
}, [])

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
        <Route path='/'  element={<Home latLng={latLng}/>}/>
        <Route path='/clinic/:id'  element= {<SelectHospital latLng={latLng}/>}/>
      </Routes>
    </div>  
  )
}

export default App;
