import React,{useState} from 'react';
import Navbar from '../Components/Navbar_Home';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MuiAlert from '@material-ui/lab/Alert';
import Back from '../Components/Backdrop';
import Otp from './Otp';
import Greet from './Greet';
import ImageReset from '../Assets/undraw_Envelope_re_f5j4.svg';
import axios from 'axios';
import imageD from '../Assets/mode2.svg';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(2),
        width: '35ch',
        [theme.breakpoints.between(0, 600)]: {
            width: '30ch',
        
        },
      },
    },
}));


export default function Reset(){
    const classes = useStyles();

    /* States for data */
    const [email,setEmail] = useState('');
    const [otp,setOtp] = useState('');
    const [BackOTP,setBOTP] = useState('');
    const [password,setPassword] = useState('');
    const [passwordE,setPE] = useState(false);
    /* States for data */

    /* States for Error */
    const [emailE,setEE] = useState(false);
    const [Line,setL] =useState(false);
    const [red,setR] = useState(false);

    const [nextS,setNS] = useState(false);
    const [RedE,setRE] = useState(false);
    const [bar,setBar] = useState(false);
    const [finalSC,setSC] = useState(false);
    const [cancel,setCancel] = useState(false);
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
        setR(false)
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
        if(!emailE && email!=='' && password!=='' && !passwordE){
            setL(true)
            setR(false)

            axios.post('http://localhost:5000/Reset/email',{
                Email:email
            })
            .then((data)=>{
                
                setL(false)
                if(data.data.msg!=='NO'){
                    
                    setBOTP(data.data.msg)
                    setNS(true)
                    setCancel(false);
                }
                else{
                    setCancel(true)
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
    const changeOTP = (val)=>{
        setNS(val);
        
    }

    const setterOtp = (val)=>{
        setOtp(val.target.value);
        setRE(false);
    }

    const checkOtp = (e)=>{
        e.preventDefault();
        const OTP = BackOTP;
        
        if(OTP.toString()!==otp){
            setRE(true);
            setBar(false);
        }
        else{

            setBar(true)
            setRE(false);
            setNS(false);
            axios.post('https://talentsearchio.herokuapp.com/Reset/update',{
                Email:email,
                Password:password
            })
            .then((data)=>{
                
                if(data.data.msg==='Done'){
                    setSC(true);
                }
            })
            .catch((e)=>{
                console.log(e);
            })
            


            
        }
    }

    return(
        <div>
            
            <Navbar />
            {Line ? <Back start={Line} /> :null}
            <div className="resetD1">

                <img className="resetIm" alt="." style={{marginTop:'-150px'}} width="30%" src={imageD} />

                <div className="resetB">
                    <div style={{backgroundColor:'white',height:'330px',marginBottom:'30px',padding:'20px',borderRadius:'7px',textAlign:'center'}}>
                    <p className="SignupText font1">Reset Password</p>
                        <form onSubmit={HandleLogin} className={classes.root} autoComplete="off">
                            
                            
                            <TextField  error={emailE} onChange={Handle_Email} id="outlined-basic" type='email' label={<span style={{color:'black'}} className="font1">Email</span>} variant="outlined" />
                            <br></br>
                            
                            <TextField error={passwordE} onChange={Handle_Pass} id="outlined-basic" type='password' label={<span style={{color:'black'}} className="font1">New Password</span>} variant="outlined" />
                            <br></br>

                            <div>
                                <Button onClick={HandleLogin} variant="outlined" color="primary">
                                    <span  className="font1">Reset</span>
                                </Button>
                            </div>
                        </form>

                        
                    </div>
                   
                    {red ?<div style={{display:'flex',justifyContent: 'center'}}>
                        <Alert style={{width:'230px',height:'32px',fontSize:'90%'}} severity="error"><span className="font1">Check Details!</span></Alert>
                    </div>:null}

                    {cancel ?<div style={{display:'flex',justifyContent: 'center'}}>
                        <Alert style={{width:'230px',height:'32px',fontSize:'90%'}} severity="error"><span className="font1">NO Account!</span></Alert>
                    </div>:null}
                    </div>
                

            </div>
            
            {nextS ? <Otp red={RedE} blue={bar} start={nextS} change={changeOTP} valCh={setterOtp} checkOTP={checkOtp} /> : null}
            <Greet photo={ImageReset} text='Updated' start={finalSC} />
        </div>
    )
}