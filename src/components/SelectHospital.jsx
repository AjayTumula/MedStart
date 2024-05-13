import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useLocation } from "react-router-dom";

const SelectHospital = () => {

    const location = useLocation();
    const {city, lat, lon, name, state, formatted, website, contact: {email} } = location.state;
    console.log({lat})
    console.log({lon})

    const Item = styled(Paper)((theme) => ({
        // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        // ...theme.typography.body2,
        // padding: theme.spacing(1)
        textAlign: 'left',
        border: '1px solid gray',
        // color: theme.palette.text.secondary,
      }));

    return (
        <div>
            <Box sx={{ width: '100%', marginTop: 10 }}>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                     <Item style={{height: 'auto', padding: 20}}>
                        {
                            <div>
                            <h1>{name}</h1>
                            <hr />
                                 <div>
                                    <p>User Latitude: </p>
                                    <p>User Longitude: </p>
                                    <p>User Formatted Address: </p>
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
                                    <p>Hospital Email: {email}</p>
                                    <p>State: {state}</p>
                                    <p>City: {city}</p>
                                 </div>
                            </div>
                        }
                     </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>2</Item>
                </Grid>
            </Grid>
            </Box>
        </div>
    )
}

export default SelectHospital;