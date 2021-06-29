import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Button} from '@material-ui/core';
import iamge from '../Assets/flame-426.png';

export default function AlertDialog(props) {
  

  return (
    <div>
     
      <Dialog
        open={props.start}
        
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title"><span className="font1" style={{fontSize:'180%'}}>{"Congratulations"}</span></DialogTitle>
        <DialogContent>
        <div style={{display:'flex',justifyContent:'center'}}>
            <img alt="." src={iamge} width="20%" ></img>
            
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
        <DialogContentText id="alert-dialog-description">
            <span className="font1" style={{textAlign:'center',color:'black',fontSize:'150%'}}>Your content is now published. </span>
            
        </DialogContentText></div>
        </DialogContent>
        <DialogActions>
        <Button onClick={props.handleClose} color="primary" autoFocus>
            <span className="font1">Okay</span>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
