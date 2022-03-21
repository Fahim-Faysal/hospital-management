import { Container, Grid, Typography } from '@mui/material';
import React from 'react';

import about from '../../../Image_Icon/Image/doctor.jpeg'
import Navigation from '../Navigation/Navigation';

const AboutUs = () => {
      return (
            <>
                  <Navigation />
                  <Grid style={{ marginTop: '50px' }}>
                        <Grid xs={12} sm={12} md={12} lg={12} >
                              <img style={{ height: 'auto', width: '70%' }} src={about} alt="" />
                        </Grid>
                        <Grid style={{ marginTop: '105px' }} sm={12} md={12} lg={12}>
                              <Container>
                                    <Typography variant="caption" display="block" gutterBottom>

                                          What to expect from us

                                          With 15 years of rental and travel experience, we guarantee you an amazing experience. If you stay in one of our exceptional properties, there is no doubt you will have a wonderful time. Our goal is to provide our guests with innovative exceptional travel experiences so that you can enjoy your home away from home, for as long as you would like. We provide complimentary guest support throughout your stay and ensure easy booking that is straightforward and transparent.

                                          All Luxury Apartments is founded by a group of property owners who connect you with independent, high quality apartment rentals in some of the most prestigious and elegant areas of our listed destinations. All Luxury Apartments is privately owned and personally managed, ensuring a high level of service at every step of your stay with us. We enjoy providing our guests with unparalleled customer service, dedicated concierge services, exceptional travel experiences and building strong relationships. We would never recommend properties we would not be happy staying at ourselves. We have earned our trust from everyone we do business with, including our owner members, guest members, and corporations.

                                    </Typography>
                              </Container>

                        </Grid>
                  </Grid>
            </>
      );
};

export default AboutUs;