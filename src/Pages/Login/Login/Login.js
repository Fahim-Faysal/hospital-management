import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Alert, Button, CircularProgress, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';


const Login = () => {

      const { user, googleSignIn, emailSignIn, isloading } = useAuth()
      const [emailAndPass, setEmailAndPass] = useState({})
      const navigate = useNavigate()
      const location = useLocation()

      const theme = useTheme();

      const useStyles = makeStyles({
            button: {
                  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
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

      const [values, setValues] = React.useState({
            password: '',
            showPassword: false,
      });
      const handleChange = (prop) => (event) => {
            setValues({ ...values, [prop]: event.target.value });
      };

      const handleClickShowPassword = () => {
            setValues({
                  ...values,
                  showPassword: !values.showPassword,
            });
      };

      const handleMouseDownPassword = (event) => {
            event.preventDefault();
      };

      const handelOnBlur = (e) => {

            const field = e.target.name;
            const value = e.target.value;
            const newValue = { ...emailAndPass }
            newValue[field] = value;
            setEmailAndPass(newValue)


            e.preventDefault()
      }

      const handelLogin = (e) => {
            e.preventDefault()
            emailSignIn(emailAndPass?.email, emailAndPass?.password, location, navigate)
      }


      return (
            <>
                  <Navigation />
                  {
                        isloading && <CircularProgress />
                  }
                  <div style={{ marginTop: '50px' }}>

                        <div>
                              <h1>Please Login Here</h1>
                              {
                                    !isloading &&
                                    <form onSubmit={handelLogin}>
                                          <TextField onBlur={handelOnBlur} sx={{ m: 1, width: '45ch' }} name='email' type='email' label="Email" variant="outlined" />

                                          <br />

                                          <FormControl sx={{ m: 1, width: '45ch' }} variant="outlined">
                                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                                <OutlinedInput
                                                      onBlur={handelOnBlur}
                                                      name='password'
                                                      type={values.showPassword ? 'text' : 'password'}
                                                      value={values.password}
                                                      onChange={handleChange('password')}
                                                      endAdornment={
                                                            <InputAdornment position="end">
                                                                  <IconButton
                                                                        aria-label="toggle password visibility"
                                                                        onClick={handleClickShowPassword}
                                                                        onMouseDown={handleMouseDownPassword}
                                                                        edge="end"
                                                                  >
                                                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                                                  </IconButton>
                                                            </InputAdornment>
                                                      }
                                                      label="Password"
                                                />
                                                <Button type='submit' sx={{ width: '58ch', backgroundColor: '#00008b', marginTop: '20px' }} variant="contained">Login</Button>
                                          </FormControl>
                                    </form>}
                              {
                                    user?.email &&
                                    <Alert sx={{ width: '25%', margin: 'auto', marginTop: "15px" }} severity="success">Log In Successfully!</Alert>

                              }
                              <p>Don't have an Account? <Link to='/register'>Register Here</Link> </p>
                              <p>Or Sing In With</p>
                              <Button onClick={() => googleSignIn(navigate, location)} className={button} variant="contained">Google Sign In</Button>

                        </div>
                  </div>
            </>

      );
};

export default Login;