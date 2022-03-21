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

                                          A hospital is a health care institution providing patient treatment with specialized health science and auxiliary healthcare staff and medical equipment.[2] The best-known type of hospital is the general hospital, which typically has an emergency department to treat urgent health problems ranging from fire and accident victims to a sudden illness. A district hospital typically is the major health care facility in its region, with many beds for intensive care and additional beds for patients who need long-term care. Specialized hospitals include trauma centers, rehabilitation hospitals, children's hospitals, seniors' (geriatric) hospitals, and hospitals for dealing with specific medical needs such as psychiatric treatment (see psychiatric hospital) and certain disease categories. Specialized hospitals can help reduce health care costs compared to general hospitals.[3] Hospitals are classified as general, specialty, or government depending on the sources of income received.

                                          A teaching hospital combines assistance to people with teaching to health science students and auxiliary healthcare students. A health science facility smaller than a hospital is generally called a clinic. Hospitals have a range of departments (e.g. surgery and urgent care) and specialist units such as cardiology. Some hospitals have outpatient departments and some have chronic treatment units. Common support units include a pharmacy, pathology, and radiology.
                                    </Typography>
                              </Container>

                        </Grid>
                  </Grid>
            </>
      );
};

export default AboutUs;