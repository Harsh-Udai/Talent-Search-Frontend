import React,{useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader'
import imageImg from '../Assets/cherry-586.png';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Backdrop1 from '../Components/Backdrop';
import {Redirect} from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 345,
    width:354,
    margin: theme.spacing(3),
    backgroundColor:'#F6F5F5'
  },
  card1:{
    maxWidth: 700,
    width:700,
    // #F3F4ED
    
  },
  media: {
    height: 190,
  },
  media1: {
    height: 500,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

function Media(props) {
  
  const classes = useStyles();
  const [likes,setLikes] = useState(props.likes);

  const [count,setcount] = useState(0);

  const [sum,setSum] = useState(likes);
  
  
  

  const valueCounter = ()=>{
    
    if(count===0){
      
      setcount(count+1);
      props.ch(true)
      axios.post('https://talentsearchio.herokuapp.com/ImagesLikes',{
        id: props.id,
        status: 'increment',
        email:props.logUser
      },{
        headers:{
          'Authorization': `Bearer ${props.Token}`
        }
      })
      .then((data)=>{
        
        setSum(data.data.likes)
        props.ch(false)
      })
      .catch((e)=>{
        console.log(e);
      })


    }
    else{
      setcount(count-1);
      props.ch(true);
      axios.post('https://talentsearchio.herokuapp.com/ImagesLikes',{
        id: props.id,
        status: 'decrement',
        email:props.logUser
      },{
        headers:{
          'Authorization': `Bearer ${props.Token}`
        }
      })
      .then((data)=>{
        
        setSum(data.data.likes)
        props.ch(false);

      })
      .catch((e)=>{
        console.log(e);
      })
    }
  }



  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar style={{backgroundColor:'#FF7F50'}}>{<span className="font1">{props.data.owner.charAt(0)}</span>}</Avatar>
        }
        
        title={
          <span className="font1">{props.data.ContentLabel}</span>
        }
        subheader={<span className="font1">{`@${props.data.owner}`}</span> }
      />
      <CardMedia
          className={classes.media}
          image={props.Key}
          title={props.data.ContentLabel}
          onClick={()=>{props.changeMade(true,props.Key)}}
          style={{cursor:'pointer'}}
      />
      <CardContent>
        
        <Typography variant="body2" color="textSecondary" component="p">
          
            {<span style={{color:'black'}} className="font1">{props.data.ContentDescription}</span>}
          
        </Typography>
        
      </CardContent>
      
      <div style={{margin:'10px'}}>
        <Button onClick={valueCounter} style={{color:'#FF7F50',marginRight:'10px'}}><FavoriteIcon /></Button>
        <Chip style={{color:'#FF7F50'}} variant="outlined"  label={<span className="font1">{"Likes:" +sum}</span>} />
      </div>
     </Card>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

export default function Facebook(props) {
  const classes = useStyles();
  const [images,setImages] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [prog,setProg] = useState(false);
  const [imageShow,setISG] = useState(false);
  const [data,setData] = useState('');
  const changeMade = (val,dt)=>{
    
    setISG(true);
    setOpen(true);
    setData(dt)
  }
  const [start,setStart] = useState(false);

  const starBack = (val)=>{
   
    setStart(val)
  }


  const handleClose = () => {
    setOpen(false);
  };

  useEffect(()=>{
    setProg(true);
    axios.get('https://talentsearchio.herokuapp.com/Images',{
      headers:{
        'Authorization': `Bearer ${props.main.talent_setter.Token}`
      }
    })
    .then((data)=>{
      
      setImages(data.data);
      setProg(false);
    })
    .catch((e)=>{
      console.log(e);
    })

  },[])

  if(props.main.talent_setter.Email===''){
    return <Redirect to="/Dashboard" />
  }

  return (
    <div style={{backgroundColor:'#222831'}}>
        <div>
          <div  style={{textAlign:'center',paddingTop:'20px'}}>
            <img alt="." src={imageImg} width="37%" />
          </div>
          <h1 className={'text'} style={{textAlign: 'center',marginTop:'-10px',fontSize:'550%', color:'white'}} >Images</h1>
        </div>
        <div style={{display: 'flex',justifyContent: 'center',flexWrap:'wrap',paddingBottom:'100px'}}>
          
          <div style={{marginBottom:'100px',marginTop:'100px'}}>{prog ? <CircularProgress /> : null}</div>
       
          {images.length > 0 ? 

            images.map((data,index)=>{
              
              return <div key={index}><Media Token={props.main.talent_setter.Token} id={data.id} logUser={props.main.talent_setter.Email} ch={starBack} likes={data.likes} changeMade={changeMade} data={data} Key={data.URL} /></div>
            })
            : null
          }
        
        {
          imageShow ? <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
            
          <div style={{display:'flex',justifyContent:'center'}}>
            <img alt="." style={{maxWidth:'80%',height:'auto',width:'auto'}} src={data}></img>
          </div>

        </Backdrop> : null
        }
          
        <Backdrop1 start={start} />
       
      </div>
    </div>
  );
}
