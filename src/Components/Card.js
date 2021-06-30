import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import Chip from '@material-ui/core/Chip';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import ExposurePlus1Icon from '@material-ui/icons/ExposurePlus1';
import axios from 'axios';
import Backdrop from '../Components/Backdrop';
import CancelIcon from '@material-ui/icons/Cancel';
import IconButton from '@material-ui/core/IconButton';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '400px',
    maxWidth: 360,
    backgroundColor: '#F2F3F4',
    borderRadius:'10px',
    padding:'5px',
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  section1: {
    margin: theme.spacing(3, 2),
  },
  section2: {
    margin: theme.spacing(2),
  },
  section3: {
    margin: theme.spacing(1, 1, 1),
  },
}));



export default function MiddleDividers(props) {


  const classes = useStyles();

  const [likes,setLikes] = useState(props.likes);

  const [count,setcount] = useState(0);

  const [sum,setSum] = useState(likes);
  
  const [start,setStart] = useState(false);
  

  const valueCounter = ()=>{
    props.ch(true);
    if(count===0){
      
      setcount(count+1);
      setStart(true)
      axios.post('http://localhost:5000/ScriptLikes',{
        id: props.id,
        status: 'increment',
        email:props.main.talent_setter.Email
      },{
        headers:{
        'Authorization': `Bearer ${props.Token}`
        }
      })
      .then((data)=>{
        
        setSum(data.data.likes)
        setStart(false)
        props.ch(false);
      })
      .catch((e)=>{
        console.log(e);
      })


    }
    else{
      setcount(count-1);
      setStart(true);
      axios.post('http://localhost:5000/ScriptLikes',{
        id: props.id,
        status: 'decrement',
        email:props.main.talent_setter.Email
      },{
        headers:{
        'Authorization': `Bearer ${props.Token}`
        }
      })
      .then((data)=>{
        
        setSum(data.data.likes)
        setStart(false);
        props.ch(false);
      })
      .catch((e)=>{
        console.log(e);
      })
    }
  }


  const deleteScript = ()=>{
    

    props.spin(true);
    axios.delete('http://localhost:5000/ScriptDelete',{
          headers:{
            'Authorization': `Bearer ${props.Token}`
          },
          data:{
            id: props.id,
            email:props.logUser
          }
        })
        .then((data)=>{
         
          props.array();
          props.spin(false);
         
        })
        .catch((e)=>{
          console.log(e);
        })

  }

  return (
    <div className={classes.root}>
      <div className={classes.section1}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4">
              <span className="font1"> <PictureAsPdfIcon /> {props.label}</span>
            </Typography>
          </Grid>
          
        </Grid>
        <Typography color="textSecondary"  variant="body2">
            <span className="font1">{props.desc}</span>
        </Typography>
      </div>
      <div className={classes.section2}>
        
        <div style={{display:'flex',justifyContent:'center'}}>
          
          <Chip className={classes.chip} color="primary" label={<span className="font1">Owner: {props.email}</span>} />
          
        </div>
      </div>
      <Divider variant="middle" />
      
      <div className={classes.section3}>
        <Button href={`https://docs.google.com/viewerng/viewer?url=${props.URL}`} target="_blank" color="primary"><span className="font1">View</span></Button>
        <Button href={props.URL} target="_blank" color="primary">{<CloudDownloadIcon />}</Button>
        
        <Button onClick={valueCounter} color="primary"><ExposurePlus1Icon /></Button>
        <Chip variant="outlined" color="primary" label={<span className="font1">{"Likes:" +sum}</span>} />

        {props.danger==='show' ? 
        <IconButton aria-label="settings"  style={{marginLeft:'25px'}}>
          <CancelIcon onClick={deleteScript} color="primary"  />
        </IconButton> : null}

      </div>

      <Backdrop start={start} />
    </div>
  );
}
