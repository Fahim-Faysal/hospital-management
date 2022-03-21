import { Container, Grid, Paper, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';



const Testimonials = () => {
      const [reviews, setReviews] = useState([])

      useEffect(() => {
            fetch('https://peaceful-citadel-92019.herokuapp.com/review')
                  .then(res => res.json())
                  .then(data => setReviews(data))
      }, [])
      return (
            <Container sx={{ marginTop: '15px' }}>
                  <Typography variant='h3'>Reviews</Typography>
                  <Grid container spacing={2} style={{ marginTop: '30px' }}>
                        {
                              reviews.map(review =>
                                    <Grid xs={12} sm={6} md={4} lg={3}>
                                          <Box
                                                sx={{
                                                      display: 'flex',
                                                      flexWrap: 'wrap',
                                                      justifyContent: 'center',
                                                      alignItems: 'center',
                                                      '& > :not(style)': {
                                                            m: 1,
                                                            width: 250,
                                                            height: 150,
                                                      },
                                                }}
                                          >
                                                <Paper elevation={3}>
                                                      <Typography sx={{ marginTop: '18px' }} variant="h6" gutterBottom>
                                                            {review?.name}
                                                      </Typography>
                                                      <Typography variant="body1" gutterBotto>
                                                            {review?.companyName}
                                                      </Typography>
                                                      <Typography variant="body2" gutterBotto>
                                                            {review?.description}
                                                      </Typography>

                                                      <Rating name="read-only" value={review?.rating} readOnly />

                                                </Paper>
                                          </Box>
                                    </Grid>
                              )
                        }


                  </Grid>
            </Container>

      );
};

export default Testimonials;