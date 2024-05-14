import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useLocation } from "react-router-dom";
import axios from "axios";
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const SelectHospital = ({latLng}) => {

    const location = useLocation();
    const {city, lat, lon, name, state, formatted, website, datasource: {raw: { email }} }  = location.state;
    const [userFormattedAdd, setUserFormattedAdd] = useState([]);
    const [direction, setDirection] = useState([]);

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
        if (Object.keys(latLng).length > 0){
        const GEO_ROUTING_API = `https://api.geoapify.com/v1/routing?waypoints=${latLng.latitude},${latLng.longitude}|${lat},${lon}&mode=drive&apiKey=8d3bbb9cb56248728d4751eb24464a1b`;
        axios.get(GEO_ROUTING_API).then(res => {
            const featuresArr = (res.data.features[0].properties.legs[0].steps);
            const routeText = [];
            featuresArr.map((feature) => { 
                routeText.push(feature.instruction.text)    
            });
            setDirection(routeText);
        })
        }
      }, [latLng])
      
      

    return (
        <div>
            <Box style={{ maxWidth: '80%', marginTop: 30 }}>
            <Grid container spacing={10} marginLeft={30}>
                <Grid item > 
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
                <Grid item >
                    <Item style={{height: 'auto', maxWidth: 500, padding: 0}} >
                    <div>
                        {
                            direction.map((text, index) => {
                                return(
                                    <div key={index}>
                                        <Timeline
                                            sx={{
                                            [`& .${timelineItemClasses.root}:before`]: {
                                                    flex: 0,
                                                    padding: 0,
                                            },
                                            }}
                                        >
                                        <TimelineItem>
                                            <TimelineSeparator>
                                            <TimelineDot />                                           
                                            </TimelineSeparator>
                                            <TimelineContent>{text}</TimelineContent>
                                        </TimelineItem>   
                                        </Timeline>    
                                    </div>
                                )
                            })
                        }
                    </div>  
                    </Item>
                </Grid>
            </Grid>
            </Box>
        </div>
    )
}

export default SelectHospital;