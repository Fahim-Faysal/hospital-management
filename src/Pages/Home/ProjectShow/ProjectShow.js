import { LocationOn } from '@mui/icons-material';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import ProjectModal from '../ProjectModal/ProjectModal';

const ProjectShow = ({ design }) => {
      const { image, name, price, description } = design
      const [open, setOpen] = React.useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);
      return (
            <>
                  <Grid style={{ display: 'flex', justifyContent: 'center' }} xs={12} sm={6} md={4} lg={4}>

                        <Card onClick={handleOpen} sx={{ maxWidth: 365, maxHeight: '483' }}>
                              <CardActionArea>
                                    <CardMedia
                                          component="img"
                                          width="450"
                                          height="330"
                                          image={image}
                                    />
                                    <CardContent>
                                          <Typography gutterBottom variant="h5" component="div">
                                                {name}
                                          </Typography>
                                          <Typography variant="body2" color="text.secondary">
                                                <LocationOn ></LocationOn>
                                                {description}
                                          </Typography>
                                    </CardContent>
                              </CardActionArea>
                        </Card>
                        <ProjectModal
                              design={design}
                              open={open}
                              handleClose={handleClose}>
                        </ProjectModal>
                  </Grid>
            </>
      );
};

export default ProjectShow;