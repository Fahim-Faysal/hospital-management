import { Button, TextField, Grid } from '@mui/material';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const AddService = () => {

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

            fetch('https://salty-coast-47899.herokuapp.com/addservice', {
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
                                    title: 'Done',
                                    text: 'Service Added Successfully!'
                              })
                              e.target.reset()
                        }

                  })

      }
      return (
            <div>
                  <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={6} lg={8}>
                              <form onSubmit={formSubmit}>
                                    <TextField onBlur={handelOnBlur} sx={{ width: '75%', margin: '10px' }} name='name' type='text' label="Appointment Title" required />

                                    <br />

                                    <TextField onBlur={handelOnBlur} sx={{ width: '75%', margin: '10px' }} name='price' type='number' label="price" required />

                                    <br />

                                    <TextField onBlur={handelOnBlur} sx={{ width: '75%', margin: '10px' }} name='img' type='text' label="Doctor Image Url" required />

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



                                    <Button type='submit' sx={{ width: '25%', margin: '10px', backgroundColor: '#00008b' }} variant="contained">Add Service</Button>

                              </form>
                        </Grid>
                  </Grid>
            </div >
      );
};

export default AddService;