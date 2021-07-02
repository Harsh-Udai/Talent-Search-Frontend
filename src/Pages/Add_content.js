import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import SaveIcon from '@material-ui/icons/Save';
import clsx from 'clsx';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import imager from '../Assets/cherry-science.png';
import './master.css';
import LinearProgress from '@material-ui/core/LinearProgress';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import axios from 'axios';
import Menu from '../Components/menu';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
      display: 'flex',
      justifyContent: 'center',
      marginLeft: theme.spacing(2),
      flex: 1,
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '45ch',
      [theme.breakpoints.between(0, 550)]: {
        width: '30ch',
    
      },
    },
  },
  root1: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },

  middleD:{
    display:'flex',
    justifyContent:'center',
    
  },
  input: {
    display: 'none',
  },
  button: {
    margin: theme.spacing(1),
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  fabProgress: {
    color: green[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -20,
    marginLeft: -12,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {

  
 
  const [open, setOpen] = React.useState(false);

  

  const handleClose1 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const [open1, setOpen1] = React.useState(false);

  

  const handleClose2 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen1(false);
  };


  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [progress,setProgress] = useState(0);
  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });
  const handleButtonClick = () => {
    

      if(Type==='Image'){
        if(!LabelErr && Label.length>5 &&  !descErr && Desc.length>4 && !typeErr && Type!=='' && image!==''){
        
          setSuccess(false);
          setLoading(true);
          setOpen1(false);
          setProg(true);
          const formData = new FormData();
          formData.append('ContentLabel',Label);
          formData.append('ContentDescription',Desc);
          formData.append('owner',props.main.talent_setter.User_name);
          formData.append('classification','Image');
          formData.append('token_Check',props.main.talent_setter.Token);
          formData.append('image',image);
          formData.append('email',props.main.talent_setter.Email);
          
          const config = {
            headers: {
                'content-type': 'multipart/form-data',
                'Authorization': `Bearer ${props.main.talent_setter.Token}`
            },

            onUploadProgress: (progressEvent) => {
              const percentage = parseInt(Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
              ));
              
            setProgress(percentage)
            }
          };
 
          
          axios.post("https://talentsearchio.herokuapp.com/ImageUpload",formData,config)
              .then((response) => {
                
                  setSuccess(true);
                  setLoading(false);
                  setOpen(true);
                  setSC(true);
                  setProg(false);
              }).catch((error) => {
                  console.log(error);                  
              });  


        }
        else{
          console.log("Error");
          setSuccess(false);
          setLoading(false);
          setOpen1(true);
        }
      }
      else if(Type==="Video"){
        if(!LabelErr && Label.length>5 &&  !descErr && Desc.length>5 && !typeErr && Type!=='' && video!=='' && thumb!==''){
          
          setSuccess(false);
          setLoading(true);
          setOpen1(false);
          setProg(true);
          const formData = new FormData();
          formData.append('ContentLabel',Label);
          formData.append('ContentDescription',Desc);
          formData.append('owner',props.main.talent_setter.User_name);
          formData.append('classification','Video');
          formData.append('token_Check',props.main.talent_setter.Token);
          formData.append('video',video);
          formData.append('email',props.main.talent_setter.Email);
          formData.append('thumb',thumb);

          const config = {
            headers: {
                'content-type': 'multipart/form-data',
                'Authorization': `Bearer ${props.main.talent_setter.Token}`
            },
            onUploadProgress: (progressEvent) => {
              const percentage = parseInt(Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
              ));
              
            setProgress(percentage)
            }
          };

          
          axios.post("https://talentsearchio.herokuapp.com/VideoUpload",formData,config)
              .then((response) => {
                  
                  setSuccess(true);
                  setLoading(false);
                  setOpen(true);
                  setSC(true);
                  setProg(false);
              })
              .catch((error) => {
                  console.log(error);                  
              });  
          
        }
        else{
          console.log("Error");
          setSuccess(false);
          setLoading(false);
          setOpen1(true);
        }
      }
      else if(Type==="Script"){
        if(!LabelErr && Label.length>5 &&  !descErr && Desc.length>5 && !typeErr && Type!=='' && script!==''){
          
          setSuccess(false);
          setLoading(true);
          setOpen1(false);
          setProg(true);
          const formData = new FormData();
          formData.append('ContentLabel',Label);
          formData.append('ContentDescription',Desc);
          formData.append('owner',props.main.talent_setter.User_name);
          formData.append('classification','Script');
          formData.append('token_Check',props.main.talent_setter.Token);
          formData.append('file',script);
          formData.append('email',props.main.talent_setter.Email);
          
          const config = {
            headers: {
                'content-type': 'multipart/form-data',
                'Authorization': `Bearer ${props.main.talent_setter.Token}`
            },
            onUploadProgress: (progressEvent) => {
              const percentage = parseInt(Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
              ));
              
            setProgress(percentage)
            }
          };

          
          axios.post("https://talentsearchio.herokuapp.com/ScriptUpload",formData,config)
              .then((response) => {
                  
                  setSuccess(true);
                  setLoading(false);
                  setOpen(true);
                  setSC(true);
                  setProg(false);
              }).catch((error) => {
                  console.log(error);                  
              });  

        }
        else{
          console.log("Error");
          setSuccess(false);
          setLoading(false);
          setOpen1(true);
        }
      }
      else{
        console.log("Error");
          setSuccess(false);
          setLoading(false);
          setOpen1(true);
      }
      
      


    
  };
  const handleClose = () => {
    props.toggleCh(true);
  };

  /* States for getting the data */

  const [Label,setlabel] = useState('');
  const [Desc,setDesc] = useState('');
  const [Type,setType] = useState('');

  const [LabelErr,setLabelErr] = useState(false);
  const [descErr, setDescErr] = useState(false);
  const [typeErr,setTypeErr] = useState(false);

  const [ImageInput,setII] =useState(false);
  const [VideoInput,setVI] =useState(false);
  const [ScriptInput,setSI] =useState(false);

  const [image,setImage]  = useState('');
  const [imageText,setIT] = useState('Image Added');
  const [imageEr,setIME] = useState(false);

  const [video,setVideo]  = useState('');
  const [videoText,setVT] = useState('Video Added');
  const [videoEr,setVE] = useState(false);
  const [thumb,setThumb] = useState('');

  const [script,setScript]  = useState('');
  const [scriptText,setST] = useState('Script Added');
  const [scriptEr,setSE] = useState(false);
  const [showCard,setSC] = useState(false);
  const [prog,setProg] = useState(false);

  /* States for getting the data */

  /* Functions for live validation */

  const LabelPart = (e)=>{
    const value = e.target.value;
    if(value.trim().length>=5){
      setlabel(value);
      setLabelErr(false);
    }
    else{
      setLabelErr(true);
    }
  }

  const DescPart = (e)=>{
    const value = e.target.value;
    if(value.trim().length>=5){
      setDesc(value);
      setDescErr(false);
    }
    else{
      setDescErr(true);
    }
  }

  const imageA = (e)=>{
    setIME(false);
    // console.log(e.target.files[0])
    if(e.target.files[0]!==undefined){
      const name = e.target.files[0].name.match(/\.(jpg||jpeg||png)$/)
    

      if(name===null){
        
        setIT("Wrong Format try with JPEG or PNG or JPG")
        setIME(true);
      }
      else{
        
        setIT("Image Added")
        setIME(true);
        setImage(e.target.files[0]);
      }

    }
  }

  const videoA = (e)=>{
   
    setVE(false);
    // console.log(e.target.files[0])
    if(e.target.files[0]!==undefined){
      
      
        
        setVT("Video Added")
        setVE(true);
        setVideo(e.target.files[0]);
      

    }
    else{
      setVT("Add the Video first")
        setVE(true);
    }
  }

  const thumbnail = (e)=>{
    
    
    if(e.target.files[0]!==undefined){
      
      
        
      setVT("Thumbnail Added")
      setVE(true);
      setThumb(e.target.files[0])
    

    }
    else{
      setVT("Add the Thumbnail first")
        setVE(true);
    }
  }

  const scriptA = (e)=>{
    setSE(false);
    // console.log(e.target.files[0])
    if(e.target.files[0]!==undefined){
      
      
        
        setST("Script Added")
        setSE(true);
        setScript(e.target.files[0]);
      

    }
    else{
        setST("Add the Script first")
        setSE(true);
    }
  }
  




  const handleChange = (event) => {
    const value = (event.target.value);
   
    if(value.trim().length===0){
      setTypeErr(true);
      setType('');
      setSI(false);
      setVI(false);
      setII(false);
    }
    else{
      setTypeErr(false);
      setType(value);
      if(value==='Image'){
        setSI(false);
        setVI(false);
        setII(true);
      }
      else if(value==='Video'){
        setSI(false);
        setVI(true);
        setII(false);
      }
      else if(value==='Script'){
        setSI(true);
        setVI(false);
        setII(false);
      }
    }
  };





   /* Functions for live validation */


  return (
    <div >
     
      <Dialog fullScreen open={props.start} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar} style={{backgroundColor:'#0A1931'}}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h5" className={classes.title}>
              <span className="font1">Content Creators</span>
            </Typography>
            
          </Toolbar>
        </AppBar>
        <div>

          <div  className="imager" >

            <div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap'}}>
            
              <img className="addFormI" alt="." src={imager} width="500px" height="550px" />

              
              <div style={{display:'flex',justifyContent:'center', marginTop:'50px'}} className="conti-form">

              
                
                
                <form autoComplete="off">

               { prog ?  <div className={classes.root1}>
                  <LinearProgress variant="determinate" value={progress} color="secondary" />
                </div> : null}

             
                <TextField className={classes.root} disabled={true}  id="filled-basic" label={<span className="font1" style={{color:'black'}}> {props.main.talent_setter.User_name} </span>} variant="filled" />
                <br></br>
                <TextField style={{marginBottom:'-8px'}} onChange={LabelPart} error={LabelErr} className={classes.root} id="outlined-basic" label={<span  className="font1">Content Label</span>} variant="outlined" />
                <br></br>
                <label className="font1" style={{marginLeft:'10px',fontSize:'80%'}}><span style={{color:'black'}} className="font1">{`Label length must > 5 `}</span></label>
                <br></br>
                <TextField
                  onChange={DescPart}
                  error={descErr}
                  id="outlined-multiline-static"
                  label={<span  className="font1">Content Description</span>}
                  multiline
                  rows={8}
                  variant="outlined"
                  className={classes.root}
                  style={{marginBottom:'-8px'}}
                />
                <br></br>
                <label className="font1" style={{marginLeft:'10px',fontSize:'80%'}}><span style={{color:'black'}} className="font1">{`Description length must > 5 `}</span></label>
                <br></br>

                <FormControl  variant="filled" className={classes.root}>
                  <InputLabel  id="demo-simple-select-filled-label"><span style={{color:'black'}} className="font1">Content Type</span></InputLabel>
                  <Select
                    
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={Type}
                    onChange={handleChange}
                    
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={'Image'}><span className="font1">Image</span></MenuItem>
                    <MenuItem value={'Video'}><span className="font1">Video</span></MenuItem>
                    <MenuItem value={'Script'}><span className="font1">Script</span></MenuItem>
                  </Select>
                </FormControl>

                <br></br>

                <div style={{display:'flex',justifyContent:'center',marginTop:'10px'}}>
                  <span style={{display:`${ImageInput ? 'block' : 'none'}`}}>
                    <input
                      accept="image/*"
                      className={classes.input}
                      id="contained-button-file"
                      type="file"
                      onChange={(e)=>imageA(e)}
                    />
                    <label htmlFor="contained-button-file">
                      <Button variant="outlined" style={{color:'#1768AC'}} color="primary" component="span">
                        
                        <span className="font1">Image Upload</span>
                      </Button>
                    </label>
                  </span>

                  <span style={{display:`${VideoInput ? 'block' : 'none'}`}}>
                    <input
                      accept="video/*"
                      className={classes.input}
                      id="contained-button-file-video"
                      type="file"
                      onChange={(e)=>{videoA(e)}}
                    />
                    <input
                      accept="image/*"
                      className={classes.input}
                      id="contained-button-file-image"
                      type="file"
                      onChange={(e)=>thumbnail(e)}
                    />
                    <label htmlFor="contained-button-file-video" style={{marginRight:'10px'}}>
                      <Button variant="outlined" style={{color:'#1768AC'}} color="primary" component="span">
                      
                      <span className="font1">Video Upload</span>
                      </Button>
                    </label>
                    <label htmlFor="contained-button-file-image">
                      <Button variant="outlined" color="secondary" component="span">
                        
                        <span className="font1">Thumbnail Upload</span>
                      </Button>
                    </label>
                  </span>

                  <span style={{display:`${ScriptInput ? 'block' : 'none'}`}}>
                    <input
                      accept=".pdf"
                      className={classes.input}
                      id="contained-button-file-PDF"
                      type="file"
                      onChange={(e)=>{scriptA(e)}}
                    />
                    <label htmlFor="contained-button-file-PDF">
                      <Button variant="outlined" style={{color:'#1768AC'}} color="primary" component="span">
                        
                        <span className="font1">Script Upload</span>
                      </Button>
                    </label>
                  </span>
                </div>

                <br></br>
                <br></br>

                <span style={{display:'flex',justifyContent:'center',marginTop:'-20px',marginBottom:'20px'}}>
                <div className={classes.wrapper}>
                  <Fab
                    aria-label="save"
                    color="primary"
                    className={buttonClassname}
                    onClick={handleButtonClick}
                    
                  >
                    {success ? <CheckIcon /> : <SaveIcon />}
                  </Fab>
                    {loading && <CircularProgress size={68} className={classes.fabProgress} />}
                  </div>
                  <div className={classes.wrapper} style={{marginTop:'15px'}}>
                    <Button
                      variant="contained"
                      color="primary"
                      className={buttonClassname}
                      disabled={loading}
                      onClick={handleButtonClick}
                      
                    >
                      <span className="font1">Upload</span>
                    </Button>
                    {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                  </div>
                </span>

                </form>
                
            </div>

            </div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose1}>
              <Alert onClose={handleClose1} severity="success">
                This is a success message!
              </Alert>
            </Snackbar>
            <Snackbar open={open1} autoHideDuration={6000} onClose={handleClose2}>
              <Alert onClose={handleClose2} severity="error">
                Fill the details correctly!.
              </Alert>
            </Snackbar>

            {imageEr ? <Snackbar
              anchorOrigin={{ vertical:'bottom', horizontal:'left' }}
              open={imageEr}
              
              message={imageText}
              key={'bottom' + 'left'}
            /> : null}

            {videoEr ? <Snackbar
              anchorOrigin={{ vertical:'bottom', horizontal:'left' }}
              open={videoEr}
              
              message={videoText}
              key={'bottom' + 'left'}
            /> : null}
            
            {scriptEr ? <Snackbar
              anchorOrigin={{ vertical:'bottom', horizontal:'left' }}
              open={scriptEr}
              
              message={scriptText}
              key={'bottom' + 'left'}
            /> : null}
            
            <Menu start={showCard} handleClose={handleClose} />
              
            
          </div>

        </div>
      </Dialog>
    </div>
  );
}
