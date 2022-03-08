import * as React from 'react';
import { useEffect } from 'react'
import Cookies from 'js-cookie';

import {
  AppBar,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  Box,
  Button,
  Avatar,
  Link,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router';
import { connect, useDispatch } from 'react-redux';
import { clearState } from '../../../redux/actions/users';
import { clearStateGame } from '../../../redux/actions/game';

const Navbar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [fotoProfile, setFotoProfile] = React.useState("");

  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (props.user) {
      setFotoProfile(props.user.avatar);
    }
  }, [props.user]);

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

  const handleProfile = () => {
    router.push('/profile');
  };

  const handleLogout = () => {
    setFotoProfile("")
    Cookies.remove('data')
    Cookies.remove('score')
    Cookies.remove('token')
    dispatch(clearState());
    dispatch(clearStateGame());
    router.push('/');
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            className="text-body"
          >
            Impostor
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
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography className="text-body" textAlign="center">
                  <Link href="/" color="inherit">
                    Home
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography className="text-body" textAlign="center">
                  About
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography className="text-body" textAlign="center">
                  Leaderboard
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            className="text-body"
          >
            Impostor
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
              className="text-body"
              href="/"
            >
              Home
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
              className="text-body"
            >
              About
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
              className="text-body"
            >
              Leaderboard
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar src={fotoProfile} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
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
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography
                  textAlign="center"
                  className="text-body"
                  onClick={handleProfile}
                >
                  Profile
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography
                  textAlign="center"
                  className="text-body"
                  onClick={handleLogout}
                >
                  Logout
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
// export default Navbar;

const mapStateToProps = (state) => ({
  user: state.users.user
});

// const mapDispatchToProps = (dispatch) => ({
//   updateProfile: (data) => dispatch(updateProfile(data)),
// });

export default connect(mapStateToProps)(Navbar);
