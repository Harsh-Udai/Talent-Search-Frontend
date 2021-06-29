import React,{useState} from 'react';
import Navbar from '../Components/Navbar_Home';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MuiAlert from '@material-ui/lab/Alert';
import Back from '../Components/Backdrop';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import imgeL from '../Assets/mode1.svg';
import CircularProgress from '@material-ui/core/CircularProgress';
 

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(2),
        width: '35ch',
        
      },
    },
}));


export default function Login(props){
    
    const classes = useStyles();

    /* States for data */
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [ch,setCH] = useState(false);
    /* States for data */

    /* States for Error */
    const [emailE,setEE] = useState(false);
    const [passwordE,setPE] = useState(false);
    const [Line,setL] =useState(false);
    const [red,setR] = useState(false);
    const [wrong,setWrong] = useState(false);
    const [prog,setProg] = useState(false);
    /* States for Error */

    const emailMark = (val)=>{
        var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
        if (regexEmail.test(val)) {
            return true;
        } else {
            return false;
        }
    }
    const Handle_Email = (e)=>{
        setR(false);
        const value = e.target.value;
        if(emailMark(value)){
            setEmail(value);
            setEE(false)
        }
        else{
            setEE(true)
        }
    }

    const Handle_Pass = (e)=>{
        setR(false);
        const value = e.target.value;
        if(value.length>=6){
            setPassword(value);
            setPE(false);
        }
        else{
            setPE(true);
        }
    }

    //////////////////////////////////////////////////////////////////
    const encode=(value)=>{
        let arr=[]
        for (let i=0;i<value.length;i++){
            arr.push(value.charCodeAt(i))
        }
        return arr;
    }
    //////////////////////////////////////////////////////////////////


    const HandleLogin = (e)=>{
        e.preventDefault();
        if(!emailE && !passwordE && email!=='' && password!==''){
            setProg(true);
            setR(false)
            axios.post('http://localhost:5000/Login',{
                Email:email,
                Password:password
            })
            .then((data)=>{
                if(data.data.msg!=='NO'){
                    setWrong(false)
                    setL(true)       
                    props.setuser(data.data)
                    setCH(true);
                    sessionStorage.setItem('!@#$%^&*()_+',JSON.stringify({milestone: encode(data.data.Name),milestone1: data.data.init_token,milestone2: encode(data.data.Email) }));
                    setProg(false);
                }
                else{
                    setWrong(true)
                }
            })
            .catch((e)=>{
                console.log(e);
            })

            
        }
        else{
            setL(false)
            setR(true)
            
        }
    }

    if(ch){
        return <Redirect to="/Dashboard" />
    }

    return(
        <div>
            
            <Navbar />
            {/* {Line ? <Back start={Line} /> :null} */}
            <div className="resetD">
                <img style={{marginTop:'-100px'}} src={imgeL} width="50%" />
            
                    <div style={{marginTop:'100px'}}>
                        <div style={{marginBottom:'30px',backgroundColor:'white',padding:'20px',height:'390px',borderRadius:'10px',textAlign:'center'}}>
                        <p className="SignupText font1"><span>Login</span></p>
                            <form className={classes.root} autoComplete="off">
                                
                                
                                <TextField error={emailE} onChange={Handle_Email} id="outlined-basic" type='email' label={<span style={{color:'black'}} className="font1">Email</span>} variant="outlined" />
                                <br></br>
                                <TextField error={passwordE} onChange={Handle_Pass} id="outlined-basic" type='password' label={<span style={{color:'black'}} className="font1">Password</span>} variant="outlined" />
                                <br></br>
                                
                                <div>
                                    
                                    <span style={{width:'50%',height:'50%'}}>
                                        
                                    </span>
                                    <Button onClick={HandleLogin} variant="outlined" color="primary">
                                     {prog ? <CircularProgress style={{marginRight:'10px'}} size={20} />:null}<span className="font1">Login</span>
                                    </Button>
                                </div>
                            </form>

                            <Link style={{textDecoration:'none',color:'black'}} to='/Reset'><Button variant="outlined" color="primary">
                            <span className="font1">Forgot Password</span>
                            </Button>
                            </Link>

                        </div>
                    {red ?<div style={{display:'flex',justifyContent: 'center'}}>
                            <Alert style={{width:'230px',height:'32px',fontSize:'90%'}} severity="error"><span className="font1">Check Details!</span></Alert>
                        </div>:null}

                        {wrong ?<div style={{display:'flex',justifyContent: 'center'}}>
                            <Alert style={{width:'230px',height:'32px',fontSize:'90%'}} severity="error"><span className="font1">No Account!</span></Alert>
                        </div>:null}

                </div>
            </div>
        </div>
    )
}