import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import ProjectShow from '../ProjectShow/ProjectShow';

const ProjectDiscover = () => {

      const [tests, setTest] = useState([])

      useEffect(() => {
            fetch('http://localhost:4000/medical')
                  .then(res => res.json())
                  .then(data => setTest(data))
      }, [])

      return (
            <Container style={{ marginTop: '50px' }}>
                  <Box>

                        <Typography sx={{ width: '50%', fontWeight: 'bold', margin: 'auto', marginBottom: '70px' }} variant="h4" gutterBottom component="div">
                              Some of our Test  <br />
                              avalilable today
                        </Typography>

                  </Box>
                  <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} spacing={4}>

                        {
                              tests.map(design => <ProjectShow
                                    key={design.name}
                                    design={design}
                              ></ProjectShow>

                              )
                        }

                  </Grid>
            </Container>


      );
};

export default ProjectDiscover;