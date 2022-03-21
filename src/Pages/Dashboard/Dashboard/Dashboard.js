import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, Outlet } from 'react-router-dom';
import { Button } from '@mui/material';
import { Add, AdminPanelSettings, DriveFolderUpload, List } from '@mui/icons-material';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import useAuth from '../../Hooks/useAuth';



const drawerWidth = 240;


const Dashboard = (props) => {
      const { admin, logOut } = useAuth()
      const { window } = props;
      const [mobileOpen, setMobileOpen] = React.useState(false);

      const handleDrawerToggle = () => {
            setMobileOpen(!mobileOpen);
      };

      const drawer = (
            <div>
                  <Toolbar />
                  <Divider />
                  <div style={{ backgroundColor: '#F5FFFA', height: '100vh' }}>

                        {
                              admin &&
                              <Box>
                                    <Link style={{ textDecoration: 'none' }} to='/dashboard/makeadmin'><Button color="inherit"><AdminPanelSettings /> Make Admin</Button>
                                    </Link>
                                    <Link style={{ textDecoration: 'none' }} to='/dashboard/addservice'><Button color="inherit"><Add /> Add Service</Button>
                                    </Link>
                                    <Link style={{ textDecoration: 'none' }} to='/dashboard/interiordesign'><Button color="inherit"><DriveFolderUpload />Add Todays Desgin</Button>
                                    </Link>
                              </Box>
                        }
                        {
                              !admin &&
                              <Box>
                                    <Link style={{ textDecoration: 'none' }} to='/dashboard/bookinglist'><Button color="inherit"><ShoppingBagOutlinedIcon /> Booking List</Button>
                                    </Link>
                                    <Link style={{ textDecoration: 'none' }} to='/dashboard/orderlist'><Button color="inherit"><List />Ordered design List</Button>
                                    </Link>
                                    <br />
                                    <Link style={{ textDecoration: 'none' }} to='/dashboard/review'><Button color="inherit"><RateReviewOutlinedIcon />Review</Button></Link>
                                    <br />

                              </Box>
                        }
                        <Link style={{ textDecoration: 'none' }} to='/home'><Button color="inherit"><RateReviewOutlinedIcon />Home</Button></Link>
                        <br />

                        <Link style={{ textDecoration: 'none' }} to='/home'><Button sx={{ backgroundColor: 'red', color: 'white', marginTop: '50px' }} onClick={logOut} variant='contained' >Logout</Button></Link>
                  </div>


            </div>
      );

      const container = window !== undefined ? () => window().document.body : undefined;

      <div>
            <Toolbar />

      </div>

      return (
            <Box sx={{ display: 'flex' }}>
                  <CssBaseline />
                  <AppBar
                        position="fixed"
                        sx={{
                              width: { sm: `calc(100% - ${drawerWidth}px)` },
                              ml: { sm: `${drawerWidth}px` },
                        }}
                  >
                        <Toolbar>
                              <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    edge="start"
                                    onClick={handleDrawerToggle}
                                    sx={{ mr: 2, display: { sm: 'none' } }}
                              >
                                    <MenuIcon />
                              </IconButton>
                              <Typography variant="h4" noWrap component="div">
                                    Dashboard
                              </Typography>
                        </Toolbar>
                  </AppBar>
                  <Box
                        component="nav"
                        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                        aria-label="mailbox folders"
                  >
                        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                        <Drawer
                              container={container}
                              variant="temporary"
                              open={mobileOpen}
                              onClose={handleDrawerToggle}
                              ModalProps={{
                                    keepMounted: true, // Better open performance on mobile.
                              }}
                              sx={{
                                    display: { xs: 'block', sm: 'none' },
                                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                              }}
                        >
                              {drawer}
                        </Drawer>
                        <Drawer
                              variant="permanent"
                              sx={{
                                    display: { xs: 'none', sm: 'block' },
                                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                              }}
                              open
                        >
                              {drawer}
                        </Drawer>
                  </Box>
                  <Box
                        component="main"
                        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                  >
                        <Toolbar />
                        <Outlet />
                        {/* Body will be here */}

                  </Box>
            </Box>
      );
};

export default Dashboard;