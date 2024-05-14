import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useLocation } from "react-router-dom";
import axios from "axios";

const SelectHospital = ({latLng}) => {

    const location = useLocation();
    const {city, lat, lon, name, state, formatted, website, datasource: {raw: { email }} }  = location.state;
    const [userFormattedAdd, setUserFormattedAdd] = useState([]);

    const Item = styled(Paper)(() => ({
       
        textAlign: 'left',
        border: '1px solid gray',
      
      }));


      useEffect(() => {
        
           async function loadAddress(){
                
                const res = await axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${latLng.latitude}&lon=${latLng.longitude}&format=json&apiKey=8d3bbb9cb56248728d4751eb24464a1b`);
                setUserFormattedAdd(res.data.results[0]);
            }
        
        // const GEO_API_ADD_URL = `https://api.geoapify.com/v1/geocode/reverse?lat=${latLng.latitude}&lon=${latLng.longitude}&format=json&apiKey=8d3bbb9cb56248728d4751eb24464a1b`;
        // axios.get(GEO_API_ADD_URL).then(res => {
        //     setUserFormattedAdd(res.data.results[0]);
        // })
        loadAddress();
      }, [latLng])


      useEffect(() => {
        const GEO_ROUTING_API = `https://api.geoapify.com/v1/routing?waypoints=${latLng.latitude},${latLng.longitude}|${lat},${lon}&mode=drive&apiKey=8d3bbb9cb56248728d4751eb24464a1b`;
        axios.get(GEO_ROUTING_API).then(res => {
            console.log(res.data.features)
        })
      }, [latLng])
      

    return (
        <div>
            <Box sx={{ width: '90%', marginTop: 10 }}>
            <Grid container spacing={1}>
                <Grid item xs={6}> 
                     <Item style={{height: 'auto', maxWidth: 500, padding: 20}}>
                        {
                            <div>
                            <h1>{name}</h1>
                            <hr />
                                 <div>
                                    <p>User Latitude: {latLng.latitude}</p>
                                    <p>User Longitude: {latLng.longitude}</p>
                                    <p>User Formatted Address: {userFormattedAdd.formatted}</p>
                                 </div>
                                 <hr />
                                 <div>
                                    <p>Hospital Latitude: {lat}</p>
                                    <p>Hospital Longitude: {lon}</p>
                                    <p>Hospital Formatted Address: {formatted}</p>
                                 </div>
                                 <hr />
                                 <div>
                                    <p>Hospital Website: {website} </p>
                                    <p>Hospital Email: {email} </p>
                                    <p>State: {state}</p>
                                    <p>City: {city}</p>
                                 </div>
                            </div>
                        }
                     </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item style={{height: 'auto', maxWidth: 500, padding: 20}} >2</Item>
                </Grid>
            </Grid>
            </Box>
        </div>
    )
}

export default SelectHospital;