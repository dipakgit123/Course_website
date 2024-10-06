import React, { useState } from 'react';
import {FormGroup, styled} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { addContact } from '../services/api';


const Container=styled(FormGroup)`
width:50%;
margin: 5% 0 0 20%;
&>div{
margin-top:20px;
 }`

 

const initialValue={
  firstName:'',
  lastName:'',
  email:'',
  phone:'',
  message:''
}




const Contact = () => {

  const [contact, setContact]=useState(initialValue);
  const [errors, setErrors]=useState({});
  const navigate = useNavigate();

  const onValueChange=(e)=>{
    setContact({...contact,[e.target.name]:e.target.value});
    console.log(contact); 
  }


  const validation =(data)=>{ 
    const errors={};
    // if(!data.firstName){
    //   errors.firstName="Name is required."
    // }
  
    // if(!data.lastNamestName){
    //   errors.lastName="Name is required."
    // }
  
    if(!data.email){
      errors.email="Email is required."
    }else if(!/^\S+@\S+\.\S+$/.test(data.email)){
      errors.email="Invalid email."
    }

    if(!data.phone){
      errors.phone="Phone number is required."
    }else if(!/^\d{10}$/.test(data.phone)){
      errors.phone="Invalid phone."
    }
    return errors;
  }
 

  const addUserDetails= async(e)=>{
    e.preventDefault();

    const newErrors=validation(contact); 
    setErrors(newErrors); 
    if(Object.keys(newErrors).length===0){
    await addContact(contact);
    alert("Thank you for contact us")
    navigate('/ourcourses');
  }else{
    alert("Contact details failed due to validation errors");
  }
    
  }
 



  return (
    <div>
      <form>
        <div className='contact_form'>
        <h1>Send us a <br></br>
        message</h1>
        </div>

        <div className='information'>
        <input id='First Name'  type='text' name='firstName' placeholder='First Name' onChange={(e)=>onValueChange(e)}></input>
        {errors.firstName && (
                        <span className="error-message">
                            {errors.firstName}
                        </span>
                    )}

        <input id='Last Name'  type='text' name='lastName' placeholder='Last Name' onChange={(e)=>onValueChange(e)}></input>
        {errors.lastName && (
                        <span className="error-message">
                            {errors.lastName}
                        </span>
                    )}

        <input id='Email'  type='email' name='email' placeholder='Email' onChange={(e)=>onValueChange(e)}></input>

        {errors.email && (
                        <span className="error-message">
                            {errors.email}
                        </span>
                    )}
        <input id='Phone'  type='phone' name='phone' placeholder='Phone' onChange={(e)=>onValueChange(e)}></input>
        </div>

        <div className='msg'>
        <textarea id='Message'  type='message' name='message' placeholder='Message'></textarea>

        <button onClick={addUserDetails}>Send Message</button>
        </div>
      </form>

      <div className="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d121033.66614689966!2d73.84875476674135!3d18.56041562005484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bc2c1efd084fb8b%3A0x1f8e0c9fe165aea4!2sSr.47%20Plot%20no.39%2C%20housing%20society%2C%202nd%20Floor%2C%20near%20Janseva%20sahakari%20bank%2C%20Chandan%20Nagar%2C%20Kharadi%2C%20Pune%2C%20Maharashtra%20411014!3m2!1d18.5604335!2d73.9311565!5e0!3m2!1sen!2sin!4v1728060875251!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
      
    </div>
  )
}


export default Contact

