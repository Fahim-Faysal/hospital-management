import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import logo from '../../../Image_Icon/Group 33069.png'
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import useAuth from '../../Hooks/useAuth';





const Navigation = () => {
      const { user, emailSignIn, logOut } = useAuth()
      const theme = useTheme()
      const useStyles = makeStyles({
            navStyle: {
                  color: 'white',
                  textDecoration: 'none'
            },
            navIcon: {
                  [theme.breakpoints.up('sm')]: {
                        display: 'none !important'
                  },
            },
            navItemContainer: {
                  [theme.breakpoints.down('sm')]: {
                        display: 'none !important'
                  },
            },
            navLogo: {
                  [theme.breakpoints.down('sm')]: {
                        textAlign: 'right'
                  },
            }
      });
      const { navStyle, navIcon, navItemContainer } = useStyles()
      const [state, setState] = React.useState(false);

      const list = (
            <Box
                  sx={{ width: 250 }}
                  role="presentation"
            >
                  <List>

                        <ListItem button>
                              <ListItemText>
                                    <Link style={{ textDecoration: 'none' }} to='/home'><Button>Home</Button></Link>
                              </ListItemText>
                        </ListItem>
                        <ListItem button>
                              <ListItemText>
                                    <Link style={{ textDecoration: 'none' }} to='/about'><Button>About Us</Button></Link>
                              </ListItemText>
                        </ListItem>
                        <ListItem button>
                              <ListItemText>
                                    <Link style={{ textDecoration: 'none' }} to='/dashboard'><Button>Dashboard</Button></Link>
                              </ListItemText>
                        </ListItem>
                        {user?.email ?
                              <ListItem button>
                                    <ListItemText>
                                          <Button style={{ backgroundColor: 'red', color: 'white' }} onClick={logOut}>Logout</Button>
                                    </ListItemText>
                              </ListItem> :
                              <ListItem button>
                                    <ListItemText>
                                          <Link style={{ textDecoration: 'none' }} to='/login'>
                                                <Button style={{ backgroundColor: 'red', color: 'white' }} onClick={emailSignIn}>Login</Button>
                                          </Link>
                                    </ListItemText>
                              </ListItem>}
                  </List>
                  <Divider />

            </Box>
      );
      return (
            <>
                  <Box sx={{ flexGrow: 1 }}>
                        <AppBar position="static">
                              <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <IconButton
                                          size="large"
                                          edge="start"
                                          color="inherit"
                                          aria-label="menu"
                                          sx={{ mr: 2 }}
                                          className={navIcon}
                                          onClick={() => setState(true)}
                                    >
                                          <MenuIcon />
                                    </IconButton>

                                    <Box
                                          component="img"
                                          sx={{
                                                height: 64,
                                          }}
                                          alt="Your logo."
                                          src={logo}
                                    />
                                    {
                                          user.email &&
                                          <Typography sx={{ color: 'yellow' }}>Wellcome: {user?.displayName}</Typography>
                                    }

                                    <Box className={navItemContainer} >
                                          <Link className={navStyle} to='/home'> <Button color="inherit">Home</Button></Link>
                                          <Link className={navStyle} to='/about'> <Button color="inherit">About Us</Button></Link>
                                          <Link className={navStyle} to='/dashboard'> <Button color="inherit">Dashboard</Button></Link>

                                          {
                                                user.email ? <Button color="inherit" onClick={logOut}> LogOut</Button>
                                                      :
                                                      <Link className={navStyle} to='/login'> <Button color="inherit"> Login</Button></Link>
                                          }

                                    </Box>

                              </Toolbar>
                        </AppBar >
                  </Box >
                  <div>

                        <React.Fragment>
                              <Drawer
                                    open={state}
                                    onClick={() => setState(false)}
                              >
                                    {list}
                              </Drawer>
                        </React.Fragment>

                  </div>
            </>
      );
};

export default Navigation;