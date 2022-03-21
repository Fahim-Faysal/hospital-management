import { Button, Grid, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2'


const Review = () => {



      const [values, setValues] = useState({})


      const handelOnBlur = (e) => {
            e.preventDefault()
            const field = e.target.name;
            const value = e.target.value;
            const newvalue = { ...values }
            newvalue[field] = value;
            setValues(newvalue)

      }

      const hanelSubmit = (e) => {
            e.preventDefault()

            axios.post('https://peaceful-citadel-92019.herokuapp.com/review', {
                  ...values
            })
                  .then(function (response) {
                        if (response.data.insertedId) {
                              Swal.fire({
                                    icon: 'success',
                                    title: 'Submitted',
                                    text: 'Thanks For the review!'
                              })

                        }
                  })
                  .catch(function (error) {

                  });

      }
      return (
            <div >

                  <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={6} lg={8}>


                              <form onSubmit={hanelSubmit}>
                                    <TextField onBlur={handelOnBlur} sx={{ width: '75%', margin: '10px' }} name='name' type='text' label="Your Name" required />
                                    <br />
                                    <TextField onBlur={handelOnBlur} sx={{ width: '75%', margin: '10px' }} name='companyName' type='text' label="Company Name" required />
                                    <br />
                                    <TextField onBlur={handelOnBlur} sx={{ width: '75%', margin: '10px' }} name='rating' type='number' label="Rating" placeholder='Must be a number between 0-5' required />
                                    <br />
                                    <TextField onBlur={handelOnBlur} sx={{
                                          width: '75%', margin: '10px'
                                    }}
                                          name='description'
                                          label="Description"
                                          multiline
                                          rows={3}
                                          required

                                    />
                                    <Button type='submit' sx={{ width: '25%', margin: '10px', backgroundColor: '#00008b' }} variant="contained">Submit</Button>

                              </form>

                        </Grid>

                  </Grid>



            </div>
      );
};

export default Review;