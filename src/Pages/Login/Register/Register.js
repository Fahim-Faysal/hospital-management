import { Alert, Button, CircularProgress, Grid, TextField, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';

const Register = () => {
      const { user, googleSignIn, createUser, isloading } = useAuth()
      const theme = useTheme();
      const [values, setValue] = useState({})
      const navigate = useNavigate()

      const useStyles = makeStyles({
            button: {
                  background: 'linear-gradient(90deg, #F9D648 30%, #57E86B 90%)',
                  border: 0,
                  borderRadius: 3,
                  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                  color: 'white',
                  height: 48,
                  padding: '0 30px',
                  [theme.breakpoints.down('sm')]: {
                        alignItems: 'center',
                        width: '45vh'
                  },
                  [theme.breakpoints.up('md')]: {
                        // display: 'none !important'
                        width: '45ch'
                  },
            },
      });
      const { button } = useStyles()

      const handelOnBlur = (e) => {

            const field = e.target.name;
            const value = e.target.value;
            const newValue = { ...values }
            newValue[field] = value;
            console.log(newValue);
            setValue(newValue)
            e.preventDefault()


      }

      const handelSubmit = e => {
            if (values?.password !== values?.password2) {
                  alert('password did not match')
                  return
            }
            createUser(values?.email, values?.password, values?.name, navigate)
            e.preventDefault()
      }

      return (
            <>
                  <Navigation />
                  {
                        isloading && <CircularProgress />
                  }

                  <div style={{ width: '50%', border: '2px solid gray', padding: '25px', margin: 'auto', marginTop: '60px' }}>
                        <h1>Create an Account</h1>
                        <Grid spacing={2}>
                              <Grid xs={12} md={12} lg={12}>
                                    {
                                          !isloading &&
                                          <form onSubmit={handelSubmit}>
                                                <TextField sx={{ width: '85%' }} onBlur={handelOnBlur} label="Full Name" type='text' name='name' variant="standard" />
                                                <br />
                                                <TextField sx={{ width: '85%' }} onBlur={handelOnBlur} label="Email" type='email' name='email' variant="standard" />
                                                <br />
                                                <TextField sx={{ width: '85%' }} onBlur={handelOnBlur} label="Password" type='password' name='password' variant="standard" />
                                                <br />
                                                <TextField sx={{ width: '85%' }} onBlur={handelOnBlur} label="Confirm Password" type='password' name='password2' variant="standard" />
                                                <br />
                                                <Button type='submit' sx={{ width: '85%', backgroundColor: '#00008b', marginTop: '20px' }} variant="contained">Create an account</Button>
                                                <p>Already Have an account <Link to='/login'>Login</Link></p>
                                          </form>
                                    }
                              </Grid>
                        </Grid>
                  </div>

                  {
                        user?.email &&
                        <Alert sx={{ width: '25%', margin: 'auto', marginTop: "15px" }} severity="success">User Registered Successfully!</Alert>

                  }

                  <p>----------------------OR----------------</p>
                  <Button onClick={googleSignIn} className={button} variant="contained">Google Sign In</Button>

            </>
      );
};

export default Register;