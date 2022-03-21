import { Alert, Button, Grid, Modal, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';


const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 1000,
      height: 500,
      bgcolor: 'white',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
};



const ProjectModal = ({ open, handleClose, design }) => {
      const { img, description, price, name } = design;
      const { user } = useAuth()

      const [values, setValues] = useState({ email: user?.email, name, price })
      const [success, setSucess] = useState(false)

      const handelSubmit = e => {
            e.preventDefault()

            fetch('https://peaceful-citadel-92019.herokuapp.com/todaysorder', {
                  method: 'POST',
                  headers: {
                        'content-type': 'application/json'
                  },
                  body: JSON.stringify(values)

            })
                  .then(res => res.json())
                  .then(data => {
                        if (data.insertedId) {
                              setSucess(true)
                        }
                        e.target.reset()
                  })
      }

      const handelBlur = (e) => {
            e.preventDefault()
            const field = e.target.name;
            const value = e.target.value;
            const newValue = { ...values }
            newValue[field] = value;
            setValues(newValue);
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
                              <Grid style={{ display: 'flex', justifyContent: 'center' }}>

                                    <Grid xs={6} sm={6} md={8} lg={6}>

                                          <img style={{ width: '500px', height: '300px' }} src={img} alt="" />
                                          <br />
                                          <Typography variant="h4">
                                                Description
                                          </Typography>
                                          <Typography style={{ width: '500px' }} variant="caption">
                                                {description}
                                          </Typography>
                                          <br />
                                          <Typography sx={{ color: 'red', marginTop: '10px' }} variant='h4'>
                                                Price: $ {price}
                                          </Typography>
                                    </Grid>
                                    <Grid style={{ display: 'flex', justifyContent: 'center' }} xs={6} sm={6} md={4} lg={6}>
                                          <form onSubmit={handelSubmit} style={{ width: '75%' }}>
                                                <Typography variant='h3'>Fill up the form for this design</Typography>
                                                <br />

                                                <TextField onBlur={handelBlur} sx={{ width: '100%', margin: '10px' }} value={user?.email} name='email' type='email' label="User Email" required />
                                                <br />

                                                <TextField onBlur={handelBlur} sx={{ width: '100%', margin: '10px' }} value={name} name='name' type='text' label="Service Title" required />

                                                <br />

                                                <TextField onBlur={handelBlur} sx={{ width: '100%', margin: '10px' }} value={price} name='price' type='number' label="price" required />

                                                <br />

                                                <Button sx={{ width: '100%', margin: '10px' }} type='submit' variant='contained'>Book Now</Button>
                                          </form>
                                    </Grid>
                              </Grid>
                              {
                                    success &&
                                    <Alert style={{ width: '25%', margin: 'auto' }} severity="success">Thank You! Will you contact you</Alert>
                              }
                        </Box>
                  </Modal>
            </div>
      );
};

export default ProjectModal;