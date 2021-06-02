import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import {Link} from 'react-router-dom';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs(props) {
   

  return (
    <div>
     
      <Dialog  aria-labelledby="customized-dialog-title" open={props.start}>
        <DialogTitle id="customized-dialog-title" >
          Hey!
        </DialogTitle>
        <DialogContent dividers style={{display:'flex',justifyContent: 'center',flexWrap: 'wrap'}}>
            <img width="40%" alt='TSP' src={props.photo}></img>
            
            <Typography gutterBottom style={{marginTop:'70px'}}>
                <span className="text" style={{fontSize:'130%'}} >Your account has been {props.text}, Happy to see you here.</span>
            </Typography>
        </DialogContent>
        <DialogActions>
        <Link  to='/Login' style={{textDecoration:'none',color:'white'}}> <Button autoFocus color="primary">
            Go to Login
          </Button></Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}
