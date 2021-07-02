import React,{useState} from 'react';
import Navbar from '../Components/Navbar_Home';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './signup.css';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import Otp from './Otp';
import Greet from './Greet';
import Image_Greet from '../Assets/undraw_Agreement_re_d4dv.svg'
import axios from 'axios';
import BackDrop from '../Components/Backdrop';
import imgageg from '../Assets/pale-686.png'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        width: '37ch',
        [theme.breakpoints.between(0, 1000)]: {
            width: '33ch',
        
        },
        [theme.breakpoints.between(0, 400)]: {
            width: '30ch',
        
        },
      },
    },
}));

export default function Signup(){
        
    const [state, setState] = React.useState({
        open: false,
        vertical: 'bottom',
        horizontal: 'left',
      });
    
    const { vertical, horizontal, open } = state;

    


    const classes = useStyles();
    /*States for Data */
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const [bio,setBio] = useState('');
    const [nextS,setNS] = useState(false);
    const [otp,setOtp] = useState('');
    const [BackOTP,setBOTP] =useState('');
    /*States for Data */

    /*States for Error */
    const [nameE,setNE] = useState(false);
    const [emailE,setEE] = useState(false);
    const [passE,setPE] = useState(false);
    const [bioE,setBE] = useState(false);
    const [detail,setDetail] = useState(false);
    const [firstC,setFC] = useState(false);
    const [emailU,setEU] = useState(false);
    /*States for Error */

    /*Props Error */
    const [RedE,setRE] = useState(false);
    const [bar,setBar] = useState(false);
    const [finalSC,setSC] = useState(false);
    /*Props Error */

    /* Submit Data */
    const hasNumber= (myString)=> {
        return /\d/.test(myString);
    }
    const emailMark = (val)=>{
        var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
        if (regexEmail.test(val)) {
            return true;
        } else {
            return false;
        }
    }
    const HandleData_Name = (e)=>{
        setDetail(false)
        const value = e.target.value;
        if(!hasNumber(value) && value.length >= 3){
            setName(value);
            setNE(false);
        }
        
        else{
            setNE(true);
        }
    }

    const HandleData_Email = (e)=>{
        setDetail(false)
        const value = e.target.value;
        if(emailMark(value)){
            setEmail(value);
            setEE(false);
        }
        
        else{
            setEE(true);
        }
    }

    const HandleData_Pass = (e) => {
        setDetail(false)
        const value = e.target.value;
        if(value.length >= 6){
            setPass(value);
            setPE(false);
        }
        
        else{
            setPE(true);
        }
    }   

    const HandleData_Bio = (e)=>{
        setDetail(false)
        const value = e.target.value;
        if(value.length >= 5){
            setBio(value);
            setBE(false);
        }
        
        else{
            setBE(true);
        }
    }
    /* Submit Data */

    const SubmitData = (e)=>{
        e.preventDefault();
        setDetail(false);
        if(name.length!==0 && email.length!==0 && pass.length!==0 && bio.length!==0){
            setFC(true);
            setDetail(false);

            axios.post('https://talentsearchio.herokuapp.com/Signup/email',{
                Email:email
            })
            .then((data)=>{
                
                setFC(false);
                
                if(data.data.msg!=='NO'){
                    setEU(true);
                }
                else{
                    setState({ ...state, open: true });
                    setNS(true);
                    setBOTP(data.data.otp);
                }
                
            })
            .catch((er)=>{
                console.log(er);
            })


           
        }
        else{
            setNS(false);
            setState({ ...state, open: false });
            setDetail(true);
            
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
            axios.post('https://talentsearchio.herokuapp.com/Signup/create',{
                Name:name,
                Email:email,
                Password:pass,
                Bio:bio,
            })
            .then((data)=>{
                
                if(data.data.msg==='Done'){
                    setSC(true);
                }
            })
            .catch((e)=>{
                console.log(e);
            })


            // 
        }
    }

    return(
        <div>
            <Navbar />
            <div className="signup">
                
                <div className="imgconta" style={{margin:'30px'}}>
                    <img className="imgSignup" style={{marginTop:'70px'}} src={imgageg} width="70%"></img>
                    <p style={{fontSize:'300%',color:'white'}}>Subscribe, Explore & Enjoy</p>
                </div>

            <div className="signupForm" >
                <div style={{marginBottom:'30px',padding:'10px',height:'530px',borderRadius:'7px',textAlign:'center'}}>
                    <p className="SignupText font1">Signup</p>
                    <form className={classes.root}>
                        
                        <TextField error={nameE} onChange={HandleData_Name} type="text" name="name" id="outlined-basic" label={<span className="font1" style={{color:'black'}}>Username</span>} variant="outlined" />
                        <br></br>
                        <TextField error={emailE} onChange={HandleData_Email} type="email" name="email"  id="outlined-basic" label={<span className="font1" style={{color:'black'}}>Email</span>} variant="outlined" />
                        <br></br>
                        <TextField error={passE} onChange={HandleData_Pass} type="password" name="pass" id="outlined-basic" label={<span className="font1" style={{color:'black'}}>Password</span>} variant="outlined" />
                        <br></br>
                        <TextField error={bioE} onChange={HandleData_Bio} type="text" name="bio" id="outlined-basic" label={<span className="font1" style={{color:'black'}}>Bio</span>} variant="outlined" multiline
          rows={4} />
                        <br></br>
                        <div style={{marginBottom:'0px',marginTop:'20px'}}>
                            <Button onClick={SubmitData} variant="outlined"  color="primary">
                            <span style={{width:'70px',fontSize:'120%',textTransform:'capitalize'}} className="font1">Signup</span>
                            </Button>
                        </div>
                        
                    </form>
                                        
                    
                    
                    {<BackDrop start={firstC} />}


                    <Snackbar
                        ref={React.createRef()}
                        anchorOrigin={{ vertical, horizontal }}
                        open={open}
                        
                        message="Good Job! & OTP is sent to your Email"
                        key={vertical + horizontal}
                    />
                    
                    {nextS ? <Otp red={RedE} blue={bar} start={nextS} change={changeOTP} valCh={setterOtp} checkOTP={checkOtp} /> : null}
                    
                    <Greet photo={Image_Greet} text="Created" start={finalSC} />

                    {detail ? <div className="alert1" style={{display:'flex',justifyContent: 'center',marginTop:'40px',paddingBottom:'10px'}}>
                        <br></br>
                            <Alert style={{width:'230px'}} severity="error"><span className="font1">Check All the Fields!</span></Alert> 
                        </div> : null}

                        {emailU ? <div className="alert1" style={{display:'flex',justifyContent: 'center',marginTop:'40px',paddingBottom:'10px'}}>
                        <br></br>
                            <Alert style={{width:'230px'}} severity="error"><span className="font1">Email in USE!</span></Alert> 
                        </div> : null}
                </div>
                
            </div>
            
            
            </div>

            
            
        </div>
    )
}