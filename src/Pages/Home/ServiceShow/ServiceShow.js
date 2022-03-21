import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import useAuth from '../../Hooks/useAuth';
import BookingModal from '../BookingModal/BookingModal';


const ServiceShow = ({ service }) => {
      const { user } = useAuth()

      const { name, description, img } = service;

      const [open, setOpen] = React.useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);

      return (
            <>
                  <Grid key={service.name} xs={12} sm={6} md={6} lg={4} sx={{
                        justifyContent: 'center',
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                              m: 1,
                              width: 250,
                              height: 350,
                        },
                  }}>
                        <Paper className='service'>
                              <img style={{ height: '100px', width: '130px' }} src={img} alt="" />
                              <Typography sx={{ color: 'blueviolet' }} variant='h6' gutterBottom component="div">
                                    {name} <br />
                                    <span style={{ color: 'red' }}>$ {service?.price}</span>
                              </Typography>
                              <Typography sx={{ marginBottom: '10px' }} variant='subtitle1'>
                                    {description}
                              </Typography>

                              <Button onClick={handleOpen} sx={{ backgroundColor: "#00008b" }} variant='contained' >Book Now</Button>
                        </Paper>

                  </Grid>
                  {open && <BookingModal
                        service={service}
                        open={open}
                        handleOpen={handleOpen}
                        handleClose={handleClose}
                        displayName={user.displayName}
                  >

                  </BookingModal>}
            </>
      );
};

export default ServiceShow;