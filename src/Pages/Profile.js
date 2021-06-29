import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './profile.css';
import axios from 'axios';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader'
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CardS from '../Containers/CardContainer';
import Backdrop from '@material-ui/core/Backdrop';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import {Link} from 'react-router-dom';
import BackD from '../Components/Backdrop';
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
        axios.post('http://localhost:5000/ImagesLikes',{
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
        axios.post('http://localhost:5000/ImagesLikes',{
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

function MediaV(props) {
   
    const classes = useStyles();
  
    const [likes,setLikes] = useState(props.data.likes);
  
    const [count,setcount] = useState(0);
  
    const [sum,setSum] = useState(likes);
    
    
  
    const valueCounter = ()=>{
      
      if(count===0){
        
        setcount(count+1);
        props.ch(true)
        axios.post('http://localhost:5000/VideosLikes',{
          id: props.data.id,
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
        axios.post('http://localhost:5000/VideosLikes',{
          id: props.data.id,
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
      <Grid container wrap="wrap">
        
          <Box  width={310} marginRight={3.5} my={5}>
            
          <Link style={{textDecoration:'none',color:'black'}} to={{ pathname: '/Dashboard/Videos/Play', query: { id:props.data.id,URL: props.data.URL}} }><CardMedia
                className={classes.media}
                image={props.data.URL_Image}
                title={props.data.ContentLabel}
              /></Link>
                      
              <Box pr={2}>
                <Typography style={{marginTop:'10px'}} gutterBottom variant="body2">
                  <span style={{fontSize:'120%'}} className="font1"><Link style={{textDecoration:'none',color:'black'}} to={{ pathname: '/video', query: { URL: props.data.URL}} }>{props.data.ContentLabel}</Link></span>
                </Typography>
                <Typography display="block" variant="caption" color="textSecondary">
                <span style={{fontSize:'120%'}} className="font1">@{props.data.owner}</span>
                </Typography>
                
              </Box>
  
              <div style={{marginTop:'10px'}}>
                <Chip style={{marginRight:'10px'}} label={<span className="font1">{'Views '+props.data.views}</span>} />
                
                <Chip label={<span className="font1">{'Likes '+sum}</span>} />
                <Button onClick={valueCounter} color="primary"><ThumbUpAltIcon style={{ color: '#616A6B' }}  /></Button>
              </div>
            
          </Box>
      
      </Grid>
    );
  }
  
Media.propTypes = {
loading: PropTypes.bool,
};
MediaV.propTypes = {
    loading: PropTypes.bool,
};
    



export default function Profile(props) {

    const classes = useStyles();
    const [prog,setProg] = useState(false);
    // console.log(props);

    const [images,setImages] = useState([]);
    const [videos,setVideos] = useState([]);
    const [scripts,setScripts] = useState([]);
    const [bio,setBio] = useState("");

    useEffect(()=>{
        setProg(true);
        const imgD = async()=>{
            const res = await axios.get('http://localhost:5000/getImages',{
                params:{
                    email:props.main.talent_setter.Email
                },
                headers:{
                  'Authorization': `Bearer ${props.main.talent_setter.Token}`
                }
            })
            setImages(res.data);
        }
        const scrD = async()=>{
            const res = await await axios.get('http://localhost:5000/getScripts',{
                params:{
                    email:props.main.talent_setter.Email
                },
                headers:{
                  'Authorization': `Bearer ${props.main.talent_setter.Token}`
                }
            })
            setScripts(res.data);
        }
        const vidD = async()=>{
            const res = await await axios.get('http://localhost:5000/getVideos',{
                params:{
                    email:props.main.talent_setter.Email
                },
                headers:{
                  'Authorization': `Bearer ${props.main.talent_setter.Token}`
                }
            })
            setVideos(res.data);
        }
        const bioD = async()=>{
          const res = await await axios.get('http://localhost:5000/getBio',{
              params:{
                  email:props.main.talent_setter.Email
              },
              headers:{
                'Authorization': `Bearer ${props.main.talent_setter.Token}`
              }
          })
          setProg(false);
          setBio(res.data[0].Bio);
      }

        imgD();
        scrD();
        vidD();
        bioD();
    },[])

    const [start,setStart] = useState(false);
    const [open, setOpen] = React.useState(false);
  
    const [imageShow,setISG] = useState(false);
    const [data,setData] = useState('');
    const starBack = (val)=>{
    
        setStart(val)
    }
    const handleClose = () => {
        setOpen(false);
    };
    const changeMade = (val,dt)=>{
    
        setISG(true);
        setOpen(true);
        setData(dt)
      }

    return(
        <div className="decor">
            <div style={{display:'flex',justifyContent:'center',marginTop:'0px'}}>
                <div className="headPart">
                
                </div>
            </div>
            <div style={{marginTop:'-290px'}}>
                <p style={{fontSize:'480%',textAlign:'center'}} className="font1"><span className="decor" style={{borderRadius:'10px',color:'white',paddingLeft:'15px',paddingRight:'15px'}}>Profile</span></p>
            </div>
            <div style={{marginTop:'150px'}}>
                <p style={{fontSize:'380%',textAlign:'center'}} className="font1"><span style={{backgroundColor:'#85C1E9',color:'white',borderRadius:'10px',paddingLeft:'10px',paddingRight:'10px'}}>Content Uploaded</span></p>
            </div>
            <div style={{marginTop:'100px'}}>
                <p style={{fontSize:'300%',paddingLeft:'100px'}} className="font1"><span style={{backgroundColor:'#FF7F50',color:'white',borderRadius:'10px',paddingLeft:'10px',paddingRight:'10px'}}>BIO</span></p>

                  
                <p className="font1" style={{fontSize:'250%',textAlign:'center'}}>{bio}</p>
                 
            </div>
            <div style={{marginTop:'100px'}}>
                <p style={{fontSize:'300%',paddingLeft:'100px'}} className="font1"><span style={{backgroundColor:'#9FE2BF',color:'white',borderRadius:'10px',paddingLeft:'10px',paddingRight:'10px'}}>Images</span></p>

                <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap'}}>

                  <div >{prog ? <CircularProgress /> : null}</div>
                    {
                        images.length > 0 ? 
                        images.map((data,index)=>{
            
                            return <Media Token={props.main.talent_setter.Token} id={data.id} logUser={props.main.talent_setter.Email} ch={starBack} likes={data.likes} changeMade={changeMade} data={data} Key={data.URL} />
                          }) 
                         
                        : <div style={{textAlign:'center',marginLeft:'50px'}}><h1 className="font1">No Content</h1></div>
                    }
                </div>
                <div>
                {
                    imageShow ? <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                        
                    <div style={{display:'flex',justifyContent:'center'}}>
                        <img alt="." style={{maxWidth:'80%',height:'auto',width:'auto'}} src={data}></img>
                    </div>

                    </Backdrop> : null
                    }
                </div>
                
            </div>
            <div style={{marginTop:'100px'}}>
                <p style={{fontSize:'300%',paddingLeft:'100px'}} className="font1"><span style={{backgroundColor:'#FFBF00',color:'white',borderRadius:'10px',paddingLeft:'10px',paddingRight:'10px'}}>Scripts</span></p>

                <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap'}}>
                  <div >{prog ? <CircularProgress /> : null}</div>
                    
                    {
                        scripts.length > 0 ? 
                         
                        scripts.map((data,index)=>{
                            return <div style={{margin:'10px'}} key={index}> <CardS Token={props.main.talent_setter.Token} ch={starBack} likes={data.likes} id={data.id} URL={data.URL} email1={data.email} email={data.owner} label={data.ContentLabel} desc={data.ContentDescription} /> </div>
                        })
                         
                        : <div style={{textAlign:'center',marginLeft:'50px'}}><h1 className="font1">No Content</h1></div>
                    }
                </div>
                
            </div>
            <div style={{marginTop:'100px'}}>
                <p style={{fontSize:'300%',paddingLeft:'100px'}} className="font1"><span style={{backgroundColor:'#85C1E9',color:'white',borderRadius:'10px',paddingLeft:'10px',paddingRight:'10px'}}>Videos</span></p>

                  <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap'}}>
                    
                  <div >{prog ? <CircularProgress /> : null}</div>
                    {
                        videos.length > 0 ? 
                        videos.map((data,index)=>{
                            return <div key={index}><MediaV Token={props.main.talent_setter.Token} logUser={props.main.talent_setter.Email} ch={starBack} data={data} loading /></div>
                        })
                         
                        : <div style={{textAlign:'center',marginLeft:'50px'}}><h1 className="font1">No Content</h1></div>
                    }
                </div>
                
            </div>
            <BackD start={start} />
        </div>
    )
}