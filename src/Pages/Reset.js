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
            axios.post('http://localhost:5000/Reset/update',{
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
            <div style={{display: 'flex',justifyContent: 'center',marginTop:'60px'}}>
                <div style={{border:'1px solid #A6ACAF',padding:'30px',borderRadius:'7px',textAlign:'center'}}>
                <p className="SignupText">Reset Password</p>
                    <form onSubmit={HandleLogin} className={classes.root} autoComplete="off">
                        
                        
                        <TextField error={emailE} onChange={Handle_Email} id="outlined-basic" type='email' label="Email" variant="outlined" />
                        <br></br>
                        
                        <TextField error={passwordE} onChange={Handle_Pass} id="outlined-basic" type='password' label="New Password" variant="outlined" />
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

                    {cancel ?<div style={{display:'flex',justifyContent: 'center'}}>
                        <Alert style={{width:'130px',height:'32px',fontSize:'90%'}} severity="error"><span >NO Account!</span></Alert>
                    </div>:null}

                </div>
            </div>
            {nextS ? <Otp red={RedE} blue={bar} start={nextS} change={changeOTP} valCh={setterOtp} checkOTP={checkOtp} /> : null}
            <Greet photo={ImageReset} text='Updated' start={finalSC} />
        </div>
    )
}