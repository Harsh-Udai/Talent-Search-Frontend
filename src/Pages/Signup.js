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

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        width: '40ch',
        
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
        if(name.length!==0 && email.length!==0 && pass.length!==0 && bio.length!==0){
            setFC(true);
            setDetail(false);

            axios.post('http://localhost:5000/Signup/email',{
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
            axios.post('http://localhost:5000/Signup/create',{
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
            <div style={{display: 'flex',justifyContent: 'center',marginTop:'60px'}}>
                <div style={{border:'1px solid #A6ACAF',padding:'20px',borderRadius:'7px',textAlign:'center'}}>
                    <p className="SignupText">Signup</p>
                    <form className={classes.root} autoComplete="off">
                        
                        <TextField error={nameE} onChange={HandleData_Name} type="text" name="name" id="outlined-basic" label="Username" variant="outlined" />
                        <br></br>
                        <TextField error={emailE} onChange={HandleData_Email} type="email" name="email"  id="outlined-basic" label="Email" variant="outlined" />
                        <br></br>
                        <TextField error={passE} onChange={HandleData_Pass} type="password" name="pass" id="outlined-basic" label="Password" variant="outlined" />
                        <br></br>
                        <TextField error={bioE} onChange={HandleData_Bio} type="text" name="bio" id="outlined-basic" label="Bio" variant="outlined" multiline
          rows={4} />
                        <br></br>
                        <div style={{marginBottom:'0px',marginTop:'20px'}}>
                            <Button onClick={SubmitData} variant="contained"  color="primary">
                            <span style={{width:'70px',textTransform:'capitalize'}} className="font">Signup</span>
                            </Button>
                        </div>
                    </form>
                                        
                    {detail ? <div style={{display:'flex',justifyContent: 'center',marginTop:'30px'}}>
                    <br></br>
                        <Alert style={{width:'200px'}} severity="error">Check All the Fields!</Alert> 
                    </div> : null}

                    {emailU ? <div style={{display:'flex',justifyContent: 'center',marginTop:'30px'}}>
                    <br></br>
                        <Alert style={{width:'200px'}} severity="error">Email in USE!</Alert> 
                    </div> : null}
                    
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

                </div>
            </div>
        </div>
    )
}