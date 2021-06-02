import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import './Navbar.css';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontFamily: 'Open Sans'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    fontFamily: 'Open Sans',
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static"  style={{backgroundColor:'#232931',color:'white',boxShadow:'none'}}>
        <Toolbar>
          
          <Typography variant="h6"  className={classes.title}>
          <Link  to='/' style={{textDecoration:'none',color:'white'}}><span className={'text'} >Talent Search</span></Link>
          </Typography>
          <Link  to='/Login' style={{textDecoration:'none',color:'white'}}><Button  color="inherit"><span style={{fontFamily: 'Open Sans',textTransform:'capitalize',fontSize:'127%'}}>Login</span></Button></Link>
          <Link  to='/Signup' style={{textDecoration:'none',color:'white'}}><Button color="inherit"><span style={{fontFamily: 'Open Sans',textTransform:'capitalize',fontSize:'127%'}}>Signup</span></Button></Link>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
