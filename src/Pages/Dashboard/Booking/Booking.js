import { Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Booking = () => {
      const [values, setValues] = useState({})


      const handelOnBlur = (e) => {
            e.preventDefault()
            const field = e.target.name;
            const value = e.target.value;
            const newvalue = { ...values }
            newvalue[field] = value;
            setValues(newvalue)

      }

      const formSubmit = (e) => {
            e.preventDefault()
            const result = { ...values }
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
                              Swal.fire({
                                    icon: 'success',
                                    title: 'Thanks',
                                    text: 'Booked Successfully!'
                              })
                              e.target.reset()
                        }

                  })

      }

      return (
            <div >

                  <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={6} lg={8}>

                              <form onSubmit={formSubmit}>
                                    <TextField onBlur={handelOnBlur} sx={{ width: '75%', margin: '10px' }} name='name' type='text' label="Your Name" required />
                                    <br />

                                    <TextField onBlur={handelOnBlur} sx={{ width: '75%', margin: '10px' }} name='email' type='text' label="Email" required />


                                    <br />
                                    <TextField onBlur={handelOnBlur} sx={{ width: '75%', margin: '10px' }} name='service' type='text' label="Service Name" required />
                                    <Button type='submit' sx={{ width: '25%', margin: '10px', backgroundColor: '#00008b' }} variant="contained">Submit</Button>

                              </form>

                        </Grid>

                  </Grid>



            </div>
      );
};

export default Booking;