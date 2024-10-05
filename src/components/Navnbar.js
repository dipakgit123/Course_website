import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {Box, Button,FormControl,FormLabel,OutlinedInput,Select,MenuItem} from "@mui/material"
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import "../styles/register.css"
import { registerUser } from '../services/api';
import { Toaster,toast } from 'react-hot-toast';

const Tabs = styled(NavLink)`
margin-right:20px;
font-size :18px;
text-decoration:none;
color: white;
`
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));


const initialValue = {
  fullname:'',
  mobile:'',
  email:'',
  course:'',
  mode:'',
}

const Course = ["Select Course","Data Science","DataAnalytics","PowerBI", "AWS", "ReactJs","Java Development","Python Development","FullStack Development","DotNet Development"]

const Navnbar = () => {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [register,setRegister]= useState(initialValue)
  const [errors,setErrors]=useState({})



   const onRegister = (e) =>{
    // console.log(e.target.value)
    setRegister({...register,[e.target.name]:e.target.value})
   }

   const RegisterUser = async(e)=>{

    const newErrors = ValidRegister(register)
    setErrors(newErrors)

    if(Object.keys(newErrors).length === 0){
      e.preventDefault();
      await registerUser(register) 
   toast.success("submitted successfully")
         
   }else{
       toast.error("submission failed due to validation")
     }
   }

   const ValidRegister = (data)=>{

    let errors ={}

    if(!data.fullname){
      errors.fullname = "Please enter your Fullname"
    }
    if(!data.course){
      errors.course= "Please enter your Course"
    }
    if(!data.mode){
      errors.mode= "Please enter your mode"
    }
    if(!data.mobile){
      errors.mobile = "Please enter your Mobile"
    }else if(!/^(\+\d{1,3}[- ]?)?\d{10}$/.test(data.mobile)){
      errors.mobile = "Please enter valid mobile number"
    }
    if(!data.email){
      errors.email = "Please enter your Email"
    }else if(!/^[\w.-]+@[\w-]+\.[\w.-]{2,4}$/.test(data.email)){
      errors.email="Please enter valid email"
    }

    return errors;
  }
 
 


  return (
    <>
  
    <div>
      <AppBar position="static">
      <Toolbar>
   <Tabs to="/">Home</Tabs>
   <Tabs to="/about">AboutUs</Tabs>
   <Tabs to="/alluser">AllUser</Tabs>

   <Box sx={{ flexGrow: 1 }}  /> 
   <Tabs to="/signup" >
    <Button variant="outlined" color='black'>SignUp</Button>
   </Tabs>
   <Tabs to="/login" >
    <Button variant="outlined" color='black'>Login</Button>
   </Tabs>
      </Toolbar>
      </AppBar>
    </div >


    <Button variant="outlined" onClick={handleClickOpen}>
  Open dialog
</Button>

<BootstrapDialog
  onClose={handleClose}
  aria-labelledby="customized-dialog-title"
  open={open}
  maxWidth="lg"  // You can choose 'sm', 'md', 'lg' based on your need
  fullWidth  // This ensures the dialog takes up the full width
       >
  <IconButton
    aria-label="close"
    onClick={handleClose}
    sx={(theme) => ({
      position: 'absolute',
      right: 8,
      top: 8,
      color: theme.palette.grey[500],
    })}
  >
    <CloseIcon />
  </IconButton>
  <DialogContent style={{ height: "500px", display: "flex", backgroundColor:"black"}}>
    <Toaster/>
  <div style={{ flex: 1, marginRight: '10px' }} className='firstdiv'>
  <img src='https://www.fusion-institute.com/_next/image?url=%2Fimg%2Fhome%2FcontactInfographic.jpg&w=1080&q=75' className='img'  alt='register'/>

  </div>
  <div style={{ flex: 1, marginLeft: '10px' }}>
  <FormControl sx={{ width: { xs: '100%', sm: '55ch' } }} style={{ marginLeft: "15px" }}>
      <FormLabel style={{ color: "white", fontWeight: "medium" }}>Full Name</FormLabel>
      <OutlinedInput placeholder='Full Name'  className="responsive-input"   name='fullname'  onChange={(e)=>onRegister(e)} />
      {errors.fullname && <span style={{color:"red"}}>{errors.fullname}</span>}
    </FormControl>
    <FormControl sx={{ width: { xs: '100%', sm: '55ch' } }} style={{ marginLeft: "15px",marginTop:"12px" }}>
      <FormLabel style={{ color: "white", fontWeight: "medium" }}>Mobile No</FormLabel>
      <OutlinedInput placeholder='Mobile No'  className="responsive-input"   name='mobile' onChange={(e)=>onRegister(e)} />
      {errors.mobile && <span style={{color:"red"}}>{errors.mobile}</span>}
    </FormControl>
    <FormControl sx={{ width: { xs: '100%', sm: '55ch' } }} style={{ marginLeft: "15px",marginTop:"12px" }}>
      <FormLabel style={{ color: "white", fontWeight: "medium" }}>Email ID</FormLabel>
      <OutlinedInput placeholder='Email id'  className="responsive-input"   name='email'onChange={(e)=>onRegister(e)}  />
      {errors.email && <span style={{color:"red"}}>{errors.email}</span>}
    </FormControl>
    <FormControl sx={{ width: { xs: '100%', sm: '55ch' } }} style={{ marginLeft: "15px",marginTop:"12px" }}>
      <FormLabel style={{ color: "white", fontWeight: "medium" }}>Course</FormLabel>
      <Select
      name='course'
     className="responsive-input"
     onChange={(e)=>onRegister(e)}
      >
       { Course.map((item,i)=>(
        <MenuItem key={i} value={item}>{item}</MenuItem>
       ))
       }
      </Select>
      {errors.course && <span style={{color:"red"}}>{errors.course}</span>}
    </FormControl>

    <FormControl sx={{ width: { xs: '100%', sm: '55ch' } }} style={{ marginLeft: "15px",marginTop:"12px" }}>
      <FormLabel style={{ color: "white", fontWeight: "medium" }}>Mode</FormLabel>
      <Select
     className="responsive-input"
     labelId="demo-simple-select-label"
         id="demo-simple-select"
         name='mode'
         onChange={(e)=>onRegister(e)}
      >
         <MenuItem value="">
            <em>Select Mode</em>
          </MenuItem>
        <MenuItem value="online">Online</MenuItem>
         <MenuItem value="online">Offline</MenuItem>
      </Select>
      {errors.mode && <span style={{color:"red"}}>{errors.mode}</span>}
    </FormControl>

    <FormControl>
      <button className="btnReg" onClick={RegisterUser} >Submit</button>
    </FormControl>
  </div>
</DialogContent>

</BootstrapDialog>


    </>

  )
}

export default Navnbar;
