import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Alert, Grid, TextField } from '@mui/material';
import useAuth from '../../Hooks/useAuth';
import { useEffect } from 'react';

const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 700,
      height: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
};

const BookingModal = ({ service, open, handleOpen, handleClose }) => {

      const { name, price } = service;
      const { user } = useAuth()
      const [success, setSuccess] = useState(false)

      // const [allBooking, setAllBooking] = useState({})
      const [info, setInfo] = useState({ name, price, email: user?.email, displayName: user.displayName })

      const handleSubmit = (e) => {
            e.preventDefault()
            const result = { ...info }
            console.log(result);
            fetch('https://peaceful-citadel-92019.herokuapp.com/booking', {
                  method: 'POST',
                  headers: {
                        'content-type': 'application/json'
                  },
                  body: JSON.stringify(result)
            })
                  .then(res => res.json())
                  .then(data => {
                        if (data.insertedId) {
                              setSuccess(true)
                        }

                  })
      }

      return (
            <div>
                  <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                  >
                        <Box sx={style}>
                              <Grid>
                                    <Grid style={{ display: 'flex', justifyContent: 'center' }} xs={6} sm={6} md={12} lg={12}>
                                          <form onSubmit={handleSubmit} style={{ width: '75%' }}>
                                                <Typography variant='h4'>Fill up the form for Booking</Typography>
                                                <br />


                                                <TextField value={info.displayName} onChange={(e) => setInfo(prev => {
                                                      return { ...prev, displayName: e.target.value }
                                                })} sx={{ width: '100%', margin: '10px' }} name='name' type='text' label="User Name" required />

                                                <br />
                                                <TextField value={info.name} onChange={(e) => setInfo(prev => {
                                                      return { ...prev, name: e.target.value }
                                                })} sx={{ width: '100%', margin: '10px' }} name='service' type='text' label="Service Title" required />

                                                <br />

                                                <TextField value={info.price} onChange={(e) => setInfo(prev => {
                                                      return { ...prev, price: e.target.value }
                                                })} sx={{ width: '100%', margin: '10px' }} name='price' type='number' label="price" required />

                                                <br />

                                                <Button sx={{ width: '100%', margin: '10px' }} onClick={handleSubmit} variant='contained'>Book Now</Button>
                                          </form>

                                    </Grid>
                                    {
                                          success &&
                                          <Alert sx={{ width: '50%', margin: 'auto' }} severity="success">Booked Successfully !</Alert>
                                    }
                              </Grid>

                        </Box>
                  </Modal>
            </div >
      );
};

export default BookingModal;