import { Container, Grid, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
      return (
            <Container style={{ marginTop: "50px", backgroundColor: '#00008b', color: 'white', padding: '60px' }}>
                  <Grid container sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <Grid xs={12} sm={12} md={3} lg={4}>
                              <Typography variant='subtitle1'>
                                    H#000(5th Floor),Road,#00 <br />
                                    New DOHS, Mohakhali, Dhaka, Bangladesh
                              </Typography>
                        </Grid>
                        <Grid xs={12} sm={12} md={3} lg={2}>
                              <Typography variant='h5'>
                                    Company
                              </Typography>
                              <ul style={{ listStyleType: 'none', textAlign: 'start' }}>
                                    <li>About</li>
                                    <li>Projects</li>
                                    <li>Our Team</li>
                                    <li>Terms and Conditon</li>
                                    <li>Submit Listing</li>
                              </ul>

                        </Grid>
                        <Grid xs={12} sm={12} md={3} lg={2}>
                              <Typography variant='h5'>
                                    Quick Links
                              </Typography>
                              <ul style={{ listStyleType: 'none', textAlign: 'start' }}>
                                    <li>Quick Links</li>
                                    <li>Rentails</li>
                                    <li>Sales</li>
                                    <li>Contacts</li>
                                    <li>Our Blogs</li>
                              </ul>

                        </Grid>
                        <Grid xs={12} sm={12} md={3} lg={4}>
                              <Typography variant='h5'>
                                    About Us
                              </Typography>
                              <Typography variant='subtitle1'>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum ut quae iusto minima ad libero? Atque obcaecati
                              </Typography>

                        </Grid>

                  </Grid>
            </Container>
      );
};

export default Footer;