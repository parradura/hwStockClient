import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Button } from '@material-ui/core';
import SearchBar from './SearchBar';
import { useHistory } from 'react-router';
import useUser from '../../hooks/useUser';
import jwtDecode from 'jwt-decode';
import { titleCase } from '../../lib/string';

const Header = props => {
 
  const { onSubmit, simpleHeader } = props

  const [ user, setUser ] = useState(null)
  const [anchorEl, setAnchorEl] = React.useState(null);

  const { isLogged, logout, jwt } = useUser()
  const classes = useStyles()
  const history = useHistory()

  useEffect(() => {
    if(jwt)
      setUser(jwtDecode(jwt))
  },[jwt])

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose()
    logout()
  }

  const handleMenuNavigation = ( path ) => {
    handleClose()
    history.push(path)
  }

  return (
    <header>
      <div className={classes.root}>
        <AppBar position="static" elevation={simpleHeader ? 0 : 3}>
          <Toolbar className={classes.toolbar}>
              <Typography className={classes.title} variant="h5" noWrap>
                <a onClick={() => history.push('/')}>
                    HW Stock
                </a>
              </Typography>
              {
                !simpleHeader 
                  && <div className={classes.navSearchContainer}>
                      <SearchBar onSubmit={onSubmit}/>
                    </div>
              }
            <div className={classes.grow}/>
            {
              isLogged && !simpleHeader
                ? <IconButton aria-label="display more actions" edge="end" color="inherit" onClick={handleClick}>
                    <p className={classes.userFirstName}>{user && titleCase(user.firstName)}</p>
                    <img src={user?.avatarUri} height={40} className={classes.userAvatar}/>
                  </IconButton> 
                : !simpleHeader 
                    ? <IconButton aria-label="display more actions" edge="end" color="inherit" onClick={() => history.push('/login')} className={classes.loginButton}>
                        LOG IN
                      </IconButton>
                : null
            }
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              className={classes.userMenu}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => handleMenuNavigation('/profile')}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
            
          </Toolbar>
        </AppBar>
      </div>
    </header>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  "* :after, :before": {
    "box-sizing": "border-box"
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 60,
    alignItems: 'center',
    backgroundColor: '#333',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignSelf: 'center',
    cursor: 'pointer'
  },
  navSearchContainer: {
    alignSelf: 'center',
    width: '30%',
    
  },
  navSearch: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    maxHeight:45
  },
  navSearchInput: {
    border: "0 rgba(0,0,0,.2)",
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 20%)",
    height: 45,
    width:'80%',
    borderRadius: '6px 0 0 6px',
    textIndent: 15,
    backgroundColor: '#666',
    color: '#fff',
    fontSize: 16,
    "&:focus":{
      boxSizing: 'border-box',
      backgroundColor: '#222',
      outline:'none',
      border: '2px solid #4eb0d4',
    }
  },
  navSearchIcon: {
    alignSelf:'center',
    border: "0 rgba(0,0,0,.2)",
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 20%)",
    display: 'flex',
    width: '15%',
    justifyContent:'center',
    backgroundColor:'#444',
    maxHeight: 45,
    minHeight: 45,
    borderRadius: '0 6px 6px 0'
  },
  userAvatar: {
    borderRadius: 40,
    marginLeft: 10
  },
  userFirstName: {
    fontSize: 20
  },
  userMenu: {
    marginTop: 60,
    marginLeft: 20
  },
  loginButton: {
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 3
  }
}));

export default Header