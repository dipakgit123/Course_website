import { Button, FormControl, FormGroup, Input, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../services/api'

const Container = styled(FormGroup)`
width:50%;
margin:5% 0 0 20%;
&>div{
  margin-top:20px
}`

const Login = () => {

    const[email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [msg,setMsg] = useState("")

    const navigate = useNavigate()

    const handleLogin = async(e) =>{
        e.preventDefault()

        const result = await loginUser(email,password)
        if(result.success){
           alert("Login Successful")
           setMsg(`Welcome, ${result.user.email}`)
           navigate("/alluser")
        }else{
            setMsg("Login Failed")
        }
    }

  return (

    <div>

      <form onSubmit={handleLogin}>
    <Container >
  
  <Typography variant='h-4' className='heading' >Login</Typography>

    <FormControl>

  
      <Input type='text' placeholder='Enter your email' value={email} 
    onChange={(e)=>setEmail(e.target.value)}
    />
    </FormControl>


    <FormControl>

      
      <Input type='text' placeholder='Enter your password' value={password} 
    onChange={(e)=>setPassword(e.target.value)}
    />
    </FormControl>

    <Button type='submit' variant='contained' style={{marginTop:"5px"}}>Login</Button>
    {msg && <p>{msg}</p>}

    <p>If New User <Link to="/signup">here to signUp</Link></p>
    </Container>
    </form>
    
    
   
   </div>
  

  )
}

export default Login
