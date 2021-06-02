import React,{useState} from 'react';
import Navbar from '../Components/Navbar_Home';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MuiAlert from '@material-ui/lab/Alert';
import Back from '../Components/Backdrop';
import {Link} from 'react-router-dom';
import axios from 'axios';

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
    console.log(props);
    const classes = useStyles();

    /* States for data */
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    /* States for data */

    /* States for Error */
    const [emailE,setEE] = useState(false);
    const [passwordE,setPE] = useState(false);
    const [Line,setL] =useState(false);
    const [red,setR] = useState(false);
    const [wrong,setWrong] = useState(false);
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
        const value = e.target.value;
        if(value.length>=6){
            setPassword(value);
            setPE(false);
        }
        else{
            setPE(true);
        }
    }

    const HandleLogin = (e)=>{
        e.preventDefault();
        if(!emailE && !passwordE && email!=='' && password!==''){
            
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


    return(
        <div>
            
            <Navbar />
            {Line ? <Back start={Line} /> :null}
            <div style={{display: 'flex',justifyContent: 'center',marginTop:'60px'}}>
                <div style={{border:'1px solid #A6ACAF',padding:'30px',borderRadius:'7px',textAlign:'center'}}>
                <p className="SignupText">Login</p>
                    <form className={classes.root} autoComplete="off">
                        
                        
                        <TextField error={emailE} onChange={Handle_Email} id="outlined-basic" type='email' label="Email" variant="outlined" />
                        <br></br>
                        <TextField error={passwordE} onChange={Handle_Pass} id="outlined-basic" type='password' label="Password" variant="outlined" />
                        <br></br>
                        
                        <div>
                            <Button onClick={HandleLogin} variant="contained" color="primary">
                                Login
                            </Button>
                        </div>
                    </form>

                    {red ?<div style={{display:'flex',justifyContent: 'center'}}>
                        <Alert style={{width:'130px',height:'32px',fontSize:'90%'}} severity="error"><span >Check Details!</span></Alert>
                    </div>:null}

                    {wrong ?<div style={{display:'flex',justifyContent: 'center'}}>
                        <Alert style={{width:'130px',height:'32px',fontSize:'90%'}} severity="error"><span >No Account!</span></Alert>
                    </div>:null}

                    <Link to='/Reset'>Forgot Password</Link>

                </div>
               
            </div>
        </div>
    )
}