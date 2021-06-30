import React,{useState,useEffect} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import MenuItem from '@material-ui/core/MenuItem';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import DescriptionIcon from '@material-ui/icons/Description';
import AppsIcon from '@material-ui/icons/Apps';
import {Link} from "react-router-dom";
import AddContent from '../Containers/Add_Content';
import DashHome from './Dash_home';
import {Redirect} from 'react-router-dom';
const drawerWidth = 240;



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    height:'55px',
    
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 26,
    marginTop:'-10px'
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  grow: {
    flexGrow: 1,
  },
}));

export default function MiniDrawer(props) {

  // console.log(props);

  useEffect(()=>{
    
    setTimeout(()=>{
      props.setAnimat(false);
    },2000)

  },[])


  /* Imp Work States for DashBoard */
  
  const [showHome,setShowHome] = useState(true);
  
  /* Imp Work States for DashBoard */

  const changePage = (val)=>{
    setShowHome(val);
  }


  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    
    setAnchorEl(event.currentTarget);
    
  };
  const handleProfileMenuOpen1 = (event) => {
    setAnchorEl(event.currentTarget);
    sessionStorage.removeItem('!@#$%^&*()_+');
    props.unsetuser();
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  

  const handleMenuClose = () => {
   
    setAnchorEl(null);
    handleMobileMenuClose();
   
  };

  const handleMenuClose1 = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    sessionStorage.removeItem('!@#$%^&*()_+');
    props.unsetuser();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link to="/dashboard/Profile" style={{textDecoration:'none',color:'black'}}><MenuItem onClick={handleMenuClose}>Profile</MenuItem></Link>
      <MenuItem onClick={handleMenuClose1}>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      
      <MenuItem onClick={handleProfileMenuOpen}>
        
        <p>Profile</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen1}>
        
        <p>Logout</p>
      </MenuItem>
    </Menu>
  );

  if(props.main.talent_setter.Email===''){
    return <Redirect to="/Dashboard" />
  }

  return (
    <>
    
    <div className={classes.root}>
      
      <CssBaseline />
      <AppBar
        style={{backgroundColor:'#222831'}}
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        >
        <Toolbar >
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, {
                [classes.hide]: open,
                })}
            >
                <MenuIcon />
            </IconButton>
            <Typography  variant="h6" style={{marginTop:'-10px'}} noWrap>
                <span className='text'>Talent Search</span>
            </Typography>
        
        <div className={classes.grow} />
          <div className={classes.sectionDesktop} style={{marginTop:'-10px'}}>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      

      <Drawer
        
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        {/* <Divider /> */}
        <Link to='/Dashboard' style={{textDecoration:'none',color:'black'}}><List>
         
            <ListItem button >
              <ListItemIcon style={{marginLeft:'7px'}}><AppsIcon /></ListItemIcon>
              <ListItemText primary={<span className="font1">Home</span>} />
            </ListItem>
          
        </List></Link>
        <Link to='/Dashboard/Videos' style={{textDecoration:'none',color:'black'}}><List>
         
            <ListItem button >
              <ListItemIcon style={{marginLeft:'7px'}}><VideoLibraryIcon /></ListItemIcon>
              <ListItemText primary={<span className="font1">Videos</span>} />
            </ListItem>
          
        </List></Link>
        <Link to='/Dashboard/Images' style={{textDecoration:'none',color:'black'}}><List>
         
            <ListItem button >
            <ListItemIcon style={{marginLeft:'7px'}}><PhotoLibraryIcon /></ListItemIcon>
            <ListItemText primary={<span className="font1">Images</span>} />
            </ListItem>
        
        </List></Link>
        <Link to='/Dashboard/Scripts' style={{textDecoration:'none',color:'black'}}><List>
         
            <ListItem button >
            <ListItemIcon style={{marginLeft:'7px'}}><DescriptionIcon /></ListItemIcon>
            <ListItemText primary={<span className="font1">Scripts</span>} />
            </ListItem>
        
        </List></Link>
        <Divider />
        <List>

            
            
          
        </List>
        
      </Drawer>
      <main className={classes.content}>
      <div className={classes.toolbar}></div>

      
      {showHome ? 
      <div>
          <DashHome toggleCh={changePage} />
      </div>
      : <AddContent start={!showHome} toggleCh={changePage} />}

        
      </main>
      {renderMobileMenu}
    {renderMenu}
    </div>
    
    </>
  );
}
