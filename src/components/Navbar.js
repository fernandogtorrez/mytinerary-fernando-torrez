import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {Link as LinkRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import userActions from '../redux/actions/userActions';

const Navbar = (props) => {
  console.log(props);

  function SignOut() {
    props.SignOutUser(props.user.email)
  }


  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (

    <>
    <AppBar position="fixed" className='navbar'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            MyTinerary
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none'},
              }}
              > 
                <MenuItem>
                    <LinkRouter to='Home' className='linkresp'>Home</LinkRouter>
                </MenuItem>
                <MenuItem>
                    <LinkRouter to='Cities' className='linkresp'>Cities</LinkRouter>
                </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            MyTinerary
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'center'}}}>
            <MenuItem>
              <LinkRouter to='home' className='link'>
                <Button color='inherit'>Home</Button>
              </LinkRouter>
            </MenuItem>
            <MenuItem>
              <LinkRouter to='cities' className='link'>
                <Button color='inherit'>Cities</Button>
              </LinkRouter>
            </MenuItem>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              {!props.user ?
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                    :
                    <img className='userPhoto' src={props.user.userPhoto}/>
                    }
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px'}}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                {props.user ?
                    <LinkRouter onClick={SignOut} to='Signout' className='linkresp'>SignOut</LinkRouter>
                    :
                    <div>
                      <MenuItem>
                        <LinkRouter to='Signin' className='linkresp'>Sign In</LinkRouter>
                      </MenuItem>
                      <MenuItem>
                        <LinkRouter to='Signup' className='linkresp'>Sign Up</LinkRouter>
                      </MenuItem>
                    </div>
                    }
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducers.user,
  }
}

const mapDispatchToProps = {
  SignOutUser: userActions.SignOutUser,
}

export default connect(mapStateToProps, mapDispatchToProps) (Navbar);