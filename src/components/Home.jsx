import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



const Home = () => {

    const [clinics, setClinics] = useState([]);
  
    useEffect(() => {
        const GEO_API_URL = `https://api.geoapify.com/v2/places?categories=healthcare.hospital&filter=circle:78.4740613,17.360589,5000&bias=proximity:78.4740613,17.360589&limit=20&apiKey=8d3bbb9cb56248728d4751eb24464a1b`;
        axios.get(GEO_API_URL).then(res => {
            console.log(res.data.features);
            setClinics(res.data.features);          
        })
    }, [])

    return(
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {
            clinics.map((clinic) => {
                return (
                    <div key={clinic.properties.datasource.raw.osm_id} style={{padding: 20}}>
                    <Card style={{ maxWidth: 400, mt: 5, border: '0.2px solid gray', height: 180 }}>
                        <CardActionArea>                    
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">  
                                    {clinic.properties.name}
                                </Typography>
                                <hr/>
                                
                                <Typography variant="body4" color="text.secondary" marginTop= '1rem'>
                                   {clinic.properties.address_line2}
                                </Typography>

                                <Typography variant="body1" color="text.primary" marginTop= '10px'>
                                    {clinic.properties.city}, {clinic.properties.state} 
                                    {clinic.properties.datasource.raw.email && `, ${clinic.properties.datasource.raw.email}`}  
                                    {clinic.properties.datasource.raw.website && `, ${clinic.properties.datasource.raw.website}`}   
                                </Typography>
                                
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    </div>
                )}
        )}     
        </div>
    )           
}

export default Home;