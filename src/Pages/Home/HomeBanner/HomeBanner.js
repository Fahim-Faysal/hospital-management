import { Grid, Typography, Button, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import doctor from '../../../Image_Icon/Image/doctor.jpeg'

const HomeBanner = () => {
      const theme = useTheme();
      const useStyles = makeStyles({
            style: {
                  [theme.breakpoints.up('md')]: {
                        height: '430px',
                        width: '500px'
                  },
                  [theme.breakpoints.down('md')]: {
                        height: '430px',
                        width: '370px'
                  },
            },
      });
      const { style } = useStyles()
      return (
            <Grid style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }} container spacing={2}>
                  <Grid item xs={12} md={4} lg={6}>
                        <Typography sx={{ fontWeight: 'bold' }} variant="h3" gutterBottom component="div">
                              We are always <br /> There For you
                        </Typography>
                        <Typography sx={{ fontWeight: 'light' }} variant="p" gutterBottom component="div">
                              hospital, an institution that is built, staffed, and equipped for the diagnosis of disease; for the treatment, both medical and surgical, of the sick and the injured;
                              <br /> and for their housing during this process. The modern hospital also often serves as a centre for investigation and for teaching.


                        </Typography>
                        <br />

                  </Grid>
                  <Grid item xs={12} md={8} lg={6}>
                        <img className={style} src={doctor} alt="" />
                  </Grid>
            </Grid>
      );
};

export default HomeBanner;