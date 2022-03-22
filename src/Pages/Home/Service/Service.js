import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './Service.css'
import ServiceShow from '../ServiceShow/ServiceShow'

const Service = () => {
      const [services, setServices] = useState([])
      useEffect(() => {
            fetch('https://salty-coast-47899.herokuapp.com/appointments')
                  .then(res => res.json())
                  .then(data => setServices(data))

      }, [])


      return (
            <Container sx={{ marginTop: '50px' }}>
                  <Typography sx={{ width: '50%', fontWeight: 'bold', margin: 'auto', marginBottom: '70px' }} variant="h4" gutterBottom component="div">
                        Here is our Todays <br />
                        Appointments
                  </Typography>
                  <Grid container spacing={4} style={{ display: 'flex' }}>

                        {
                              services.map(service => <ServiceShow
                                    key={service?._id}
                                    service={service}
                              >
                              </ServiceShow>)
                        }

                  </Grid>

            </Container>
      );
};

export default Service;