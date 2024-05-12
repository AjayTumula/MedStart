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
            const featureArr = res.data.features;
            const name = [];
            featureArr.map((feature) => name.push(feature.properties.name));
            setClinics(name);
            console.log(name);
        })
    }, [])



    return(
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {
            clinics.map((clinic, index) => {
                return (
                    <div key={index} style={{padding: 20}}>
                    <Card sx={{ maxWidth: 385, mt: 5, border: '0.2px solid gray' }}>
                        <CardActionArea>                    
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {clinic}
                                </Typography>
                                <hr />
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
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