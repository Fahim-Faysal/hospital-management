import { Button, Grid, TextField, Typography, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const HandelProject = () => {

      const [values, setValues] = useState({})

      const theme = useTheme()

      const useStyles = makeStyles({
            button: {
                  [theme.breakpoints.down('md')]: {
                        alignItems: 'center',
                        width: '100%'
                  },
                  [theme.breakpoints.up('md')]: {
                        width: '50%', margin: 'auto'
                  },
            },
      });
      const { button } = useStyles()

      const handelOnBlur = (e) => {
            e.preventDefault()
            const field = e.target.name;
            const value = e.target.value;
            const newValue = { ...values }
            newValue[field] = value;
            setValues(newValue)
      }

      const formSubmit = (e) => {
            e.preventDefault()
            const result = { ...values }

            fetch('https://peaceful-citadel-92019.herokuapp.com/messeage', {
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
                                    text: 'We will contact you shortly!'
                              })
                              e.target.reset()
                        }

                  })

      }

      return (
            <div style={{ marginTop: '50px' }}>
                  <Typography sx={{ width: '50%', fontWeight: 'bold', margin: 'auto', marginBottom: '70px' }} variant="h4" gutterBottom component="div">
                        Let us handel your <br /> project, personally
                  </Typography>

                  <form onSubmit={formSubmit} className={button} >
                        <Grid container spacing={2}>
                              <Grid item xs={12} lg={6}>
                                    <TextField onBlur={handelOnBlur} style={{ width: '75%' }} name='fullName' label="Full Name" variant="filled" required />

                              </Grid>
                              <Grid item xs={12} lg={6} >
                                    <TextField style={{ width: '75%' }} name='lastName' label="Last Name" variant="filled" required />

                              </Grid>
                              <Grid item xs={12} lg={6}>
                                    <TextField onBlur={handelOnBlur} style={{ width: '75%' }} name='email' type='email' label="Email Address" variant="filled" required />

                              </Grid>
                              <Grid item xs={12} lg={6}>
                                    <TextField onBlur={handelOnBlur} style={{ width: '75%' }} name='phone' type="number" label="Phone Number" variant="filled" required />
                              </Grid>
                              <Grid item xs={12} lg={12}>
                                    <TextField
                                          onBlur={handelOnBlur}
                                          style={{ width: '88%', textAlign: 'start' }}
                                          type='text'
                                          name='messeage'
                                          label="Your Messeage"
                                          multiline
                                          rows={4}
                                          variant="filled"
                                          required
                                    />
                              </Grid>
                        </Grid>
                        <br />
                        <Button type='submit' style={{ width: '25%', margin: 'auto', backgroundColor: '#00008b', padding: '15' }}
                              variant="contained">Send Messeage</Button>
                  </form>

            </div>
      );
};

export default HandelProject;