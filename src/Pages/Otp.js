import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import LinearProgress from '@material-ui/core/LinearProgress';
import MuiAlert from '@material-ui/lab/Alert';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function FormDialog(props) {
  const handleClose = ()=>{
      props.change(false);
  }
  return (
    <div>
      <Dialog open={props.start} onClose={handleClose} aria-labelledby="form-dialog-title">
      {props.blue ? <LinearProgress /> :null}
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <form onSubmit={props.checkOTP}>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter OTP which is in your Inbox.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="OTP"
            type="text"
            fullWidth
            onChange={(e)=>props.valCh(e)}
          />
        </DialogContent>
        <DialogActions>
          
          <Button onClick={props.checkOTP} color="primary">
            Check OTP
          </Button>
        </DialogActions>
        {props.red ? <div style={{display: 'flex',justifyContent: 'center',marginBottom:'10px'}}>
            <Alert style={{width:'130px',height:'32px',fontSize:'90%'}} severity="error"><span >Wrong OTP!</span></Alert>
        </div>:null}
        </form>
      </Dialog>
      
    </div>
  );
}
