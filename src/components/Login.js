// import { Button, FormControl, FormGroup, Input, Typography, styled } from '@mui/material'
// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { loginUser } from '../services/api'

// const Container = styled(FormGroup)`
// width:50%;
// margin:5% 0 0 20%;
// &>div{
//   margin-top:20px
// }`

// const Login = () => {

//     const[email,setEmail] = useState("")
//     const [password,setPassword] = useState("")
//     const [msg,setMsg] = useState("")

//     const navigate = useNavigate()

//     const handleLogin = async(e) =>{
//         e.preventDefault()

//         const result = await loginUser(email,password)
//         if(result.success){
//            alert("Login Successful")
//            setMsg(`Welcome, ${result.user.email}`)
//            navigate("/alluser")
//         }else{
//             setMsg("Login Failed")
//         }
//     }

//   return (

//     <div>

//       <form onSubmit={handleLogin}>
//     <Container >
  
//   <Typography variant='h-4' className='heading' >Login</Typography>

//     <FormControl>

  
//       <Input type='text' placeholder='Enter your email' value={email} 
//     onChange={(e)=>setEmail(e.target.value)}
//     />
//     </FormControl>


//     <FormControl>

      
//       <Input type='text' placeholder='Enter your password' value={password} 
//     onChange={(e)=>setPassword(e.target.value)}
//     />
//     </FormControl>

//     <Button type='submit' variant='contained' style={{marginTop:"5px"}}>Login</Button>
//     {msg && <p>{msg}</p>}

//     <p>If New User <Link to="/signup">here to signUp</Link></p>
//     </Container>
//     </form>
    
    
   
//    </div>
  

//   )
// }

// export default Login


import React,{useState,useEffect} from 'react'
import {FormControl, FormLabel, OutlinedInput } from "@mui/material"
import "../styles/signin.css";
import {Link, useNavigate} from "react-router-dom"
import GoogleIcon from '@mui/icons-material/Google';
import toast,{ Toaster } from "react-hot-toast"
import { loginUser } from '../services/api';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../GoogleAuth/config';
import Home from './Home';

const Login = () => {
      const[email,setEmail] = useState("")
      const [password,setPassword] = useState("")
      const [value, setValue] = useState('')
    
      let navigate = useNavigate()

      const handleLogin = async(e) =>{
                e.preventDefault()
                if(email && password){
                  const result = await loginUser(email,password)
                  if(result.success){
                    toast.success("Login Successfully")
                    setTimeout(() => {
                      navigate("/");
                    }, 2000);
                  }else{
                   toast.error("check your credentials")
                  } 
                }else{
                  toast.error("Please fill all the fields") 
                 
                }
                
            }



    const googlehandle = async () => {
    signInWithPopup(auth, provider)
        .then((data) => {
            setValue(data.user.email);
            console.log(data.user.email); // Log the email directly
            navigate('/');
        })
        .catch((error) => {
            console.error("Error during Google sign-in: ", error);
        });
};


        useEffect(()=>{
          setValue(localStorage.getItem('email'))
        })

  return (
    <div>
      <Toaster/>
      <div className='container1'>
      <h1 className="heading">Sign in to your account</h1>
    <p className="para">Don't have an account?<Link to='/signup' style={{color:"black",fontWeight:"500"}}> Create a free account</Link></p>

    <form  onSubmit={handleLogin}>
    <FormControl sx={{ width: { xs: '100%', sm: '55ch' } }} style={{ marginLeft: "15px", marginBottom: "15px" }}>
      <FormLabel style={{ marginTop: "20px", color: "black", fontWeight: "medium" }}>Email</FormLabel>
      <OutlinedInput placeholder='email' className="responsive-input" value={email} onChange={(e)=>setEmail(e.target.value)} />
</FormControl>
      
    <FormControl sx={{ width: { xs: '100%', sm: '55ch' } }} style={{ marginLeft: "15px", marginBottom: "15px" }}>
      <FormLabel style={{ marginTop: "8px", color: "black", fontWeight: "medium" }}>Password</FormLabel>
      <OutlinedInput placeholder='password' type='password' className="responsive-input" value={password}  onChange={(e)=>setPassword(e.target.value)} />
    </FormControl>

    <FormControl>
      <button className="btn2">Sign In</button>
    </FormControl>
   
    <FormControl>
      <button type='text' className="btn1"  onClick={googlehandle}><GoogleIcon sx={{  marginRight: '5px', fontSize: '22px',}}   />Sign In with Google</button>
    </FormControl>
    </form>
    </div>
      
    </div>
  )
}

export default Login

