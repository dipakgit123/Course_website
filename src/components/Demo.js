import React,{useState , useEffect} from 'react'
import { Button} from '@mui/material'
import '../styles/demo.css'
import { bookUser } from '../services/api';
import { useNavigate } from 'react-router-dom';


const Demo = () => {

  const [courses, setCourses] = useState([]);
  const [country, setCountry] = useState([]);

  useEffect(() => {
      // fetch course data from database
      fetch('http://127.0.0.1:8080/course_select')
          .then(response => response.json())
          .then(data => setCourses(data));
  }, []);

  useEffect(() => {
    // fetch course data from database
    fetch('http://127.0.0.1:8080/country_select')
        .then(response => response.json())
        .then(data => setCountry(data));
}, []);

  const handleChange =(e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const initialValue = {
    fullname:'',
    country:'',
    phone:'',
    email:'',
    course:'',
    mode:''
  }

  const [formData, setFormData] = useState(initialValue);
  const navigate = useNavigate();
  const [errors,setErrors] = useState({})

  const addBookDetail = async(e) =>{
    e.preventDefault();

    const newErrors = validForm(formData);
    setErrors(newErrors);

    if(Object.keys(newErrors).length === 0){
      await bookUser(formData)
      alert("Demo Booked Successfully")
      navigate("/batch");
    }else{
      alert("form submission failed due to validation error")
    }
    }

    const validForm = (data) =>{
      const errors = {}
  
      if(!data.fullname){
        errors.fullname = "Please enter your full name"
      }
      if(!data.country){
        errors.country = "Select country"
      }
      if(!data.phone){
        errors.phone = "Please enter your mobile number"
      }
      if(!data.email){
        errors.email = "Please enter your email"
      }
      if(!data.course){
        errors.course = "Please select course"
      }
      if(!data.mode){
        errors.mode = "Select mode"
      }
      return errors
    }

  return (
    <div>
      <section className="book_section">
        <div className="col1">
          <h1>Book Demo Class</h1>
          <p>Enter your information</p>
          <form>

            <h4>Full Name</h4>
            <input type="text" placeholder="Enter your name" name='fullname' onChange={(e)=>{handleChange(e)}}/><br/>
            {errors.fullname && <span style={{color:"red"}}>{errors.fullname}</span>}
            
            <h4>Mobile Number</h4>
            <div className='combine'>
                <select  onChange={(e)=>handleChange(e)} name='country'>
                <option value="" disabled selected hidden> Select country </option>
                {country.map((country, index) => (
                  <option key={index} value={country.name}>{country.name}</option>
                ))}
                </select>
            {errors.country && <span style={{color:"red"}}>{errors.country}</span>}

            <input type="tel" placeholder="Enter your mobile number" name='phone' onChange={(e)=>handleChange(e)}/>
            <br></br>
            {errors.phone && <span style={{color:"red"}}>{errors.phone}</span>}
            </div>
            
            <h4>Email ID</h4>
            <input type="email"  placeholder="Enter your email" name='email' onChange={(e)=>handleChange(e)}/><br/>
            {errors.email && <span style={{color:"red"}}>{errors.email}</span>}

            <h4>Courses</h4>
            <select  onChange={(e)=>handleChange(e)} name='course'>
                <option value="" disabled selected hidden> Select Course </option>
                {courses.map((course, index) => (
                  <option key={index} value={course.name}>{course.name}</option>
                ))}
            </select><br/>
            {errors.course && <span style={{color:"red"}}>{errors.course}</span>}


            <h4>Mode</h4>
            <select onChange={(e)=>handleChange(e)} name='mode'>  
            <option value="" disabled selected hidden> Select Mode </option>
            <option value='online'>Online</option>
            <option value='offline'>Offline</option>
            </select><br/>
            {errors.mode && <span style={{color:"red"}}>{errors.mode}</span>}
            <br/>

            <button onClick={addBookDetail}>Submit</button>

          </form>
        </div>

        <div className="col2">
          <img src="https://www.fusion-institute.com/_next/image?url=%2Fimg%2Fdemo.jpg&w=1080&q=75" alt="" />
        </div>
      </section>

      <section className='book_section2'>
        <p>"At our institute, our dedicated team spends countless hours crafting top-notch educational experiences. 
            We're committed to providing the best possible learning opportunities for our students."
        </p>
        <Button className='connectbtn2'>Connect With Us</Button>


      </section>
    </div>
  )
}

export default Demo
