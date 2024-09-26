import React, { useState } from 'react'
import {Button, FormControl,FormGroup,Input,InputLabel, Typography,RadioGroup,FormControlLabel,Radio,FormLabel,Select,MenuItem,Checkbox} from "@mui/material"
import styled from '@emotion/styled'
import { addUser } from '../services/api'
import {useNavigate} from "react-router-dom"
import "../styles/signUp.css"

const Container = styled(FormGroup)`
width:50%;
margin:5% 0 0 20%;
&>div{
  margin-top:20px
}`

const initialValue = {
    firstname:'',
    password:'',
    email:'',
    city:'',
    phone:'',
    gender:'',
    country:'',
    social:[]
}

const  CountryList =["India","America","Russia","China"]
const Social = ["Linkedin","facebook","whatsapp","instagram","youtube"]

const SignUp = () => {


  const [formData ,setFormData] = useState(initialValue);
   const navigate = useNavigate();
   const [errors,setErrors] = useState({})
 
  const onValueChane = (e) =>{
    // console.log(e.target.value)
    setFormData({...formData,[e.target.name]:e.target.value})
    // console.log(formData);
  }

  const onCheckBoxChange = (e) =>{
    const { value, checked} = e.target

    if(checked){
      // add the selected  option

      setFormData((prevUser)=>({
        ...prevUser,
        social: [...prevUser.social, value]
      }))
    }else{
      setFormData((prevUser) =>({
        ...prevUser,
        social: prevUser.social.filter((item) => item !== value)
      }))
    }
  }

  const addUserDetail = async(e) =>{

    e.preventDefault();

    const newErrors = validForm(formData);
    setErrors(newErrors);
    
    if(Object.keys(newErrors).length === 0){

      await addUser(formData)
      alert("form submitted Successfully")
      navigate("/alluser");
    }else{
      alert("form submission failed due to validation error")
    }
  }

  const validForm = (data) =>{
    const errors = {}

    if(!data.firstname.trim()){
      errors.firstname = "Please enter your first name"
    }
    if(!data.city.trim()){
      errors.city = "Please enter your City"
    }
    if(!data.phone.trim()){
      errors.phone= "Please enter your contact number"
    }else if(!/^(\+\d{1,3}[- ]?)?\d{10}$/.test(data.phone)){
      errors.phone = " plz enter valid contact number"

    }
    if(!data.email.trim()){
      errors.email = "Please enter your Email"
    } 
    // else if(!/^\+\d{1,3}\d{9}$/.test(data.email)){
    // //   errors.email= "Email is not valid"
    // // }
    if(!data.gender){
      errors.gender = "Please enter your Gender"
    }
    if(!data.password){
      errors.gender = "Please enter your Password"
    }
    if(!data.country){
      errors.country = "Please enter your country"
    }
    if(!data.social || data.social.length === 0){
      errors.social = "Please enter where you hear about us?"
    }
   return errors;
  }

 
  return (

    <div>
        
        <Container className='contain'>
          <Typography variant='h-4' className='heading' >Sign-Up</Typography>
          <FormControl>
            <InputLabel >Firstname</InputLabel>
            <Input name='firstname' onChange={(e)=>onValueChane(e)} />
            {errors.firstname && <span style={{color:"red"}}>{errors.firstname}</span>}
          </FormControl>
          <FormControl>
            <InputLabel>Email</InputLabel>
            <Input name='email'  onChange={(e)=>onValueChane(e)} />
            {errors.email && <span style={{color:"red"}}>{errors.email}</span>}
          </FormControl>

          <FormControl>
            <InputLabel>Password</InputLabel>
            <Input name='password'  onChange={(e)=>onValueChane(e)} type='password' />
            {errors.password && <span style={{color:"red"}}>{errors.password}</span>}
          </FormControl>
          
          <FormControl>
            <InputLabel>City</InputLabel>
            <Input name='city' onChange={(e)=>onValueChane(e)} />
            {errors.city && <span style={{color:"red"}}>{errors.city}</span>}
          </FormControl>
          <FormControl>
            <InputLabel>Contact No</InputLabel>
            <Input name="phone" onChange={(e)=>onValueChane(e)} />
            {errors.phone && <span style={{color:"red"}}>{errors.phone}</span>}
          </FormControl>
          <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="gender"
        onChange={(e)=>onValueChane(e)}
      >
        <FormControlLabel value="female" control={<Radio/>} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
      {errors.gender && <span style={{color:"red"}}>{errors.gender}</span>}
    </FormControl>
    <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Country</InputLabel>
  
          <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Country"
          name='country'
         
          onChange={(e)=>onValueChane(e)} >
            {CountryList.map((options,index)=>(
          <MenuItem value={options}  key={index} >{options}</MenuItem>
          ))}
        </Select>

 
 
  {errors.country && <span style={{color:"red"}}>{errors.country}</span>}
</FormControl>
<FormControl component='fieldset'>
<FormLabel component="legend" >Where you hear about us?</FormLabel>
<FormGroup row >
  {Social.map((info, index)=>(
   <FormControlLabel key={index}  control={<Checkbox name='social' value={info} onChange={onCheckBoxChange}/> } label={info} />
  ))}
</FormGroup>
{errors.social && <span style={{color:"red"}}>{errors.social}</span>}
</FormControl>

          <Button variant='contained' onClick={addUserDetail}>Signup</Button>
        </Container>
       
    </div>
  )
}

export default SignUp
