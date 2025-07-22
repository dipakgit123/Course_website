import React, { useEffect, useRef, useState } from 'react'
import '../styles/OurCourses.css' 
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import InterpreterModeOutlinedIcon from '@mui/icons-material/InterpreterModeOutlined';
import ArticleIcon from '@mui/icons-material/Article';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import CastForEducationOutlinedIcon from '@mui/icons-material/CastForEducationOutlined';
import {Typography, Card, CardMedia, CardContent, CardActions} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import { Link } from 'react-router-dom';


const OurCourses = () => {

  // courses
  const [currentSection, setCurrentSection]=useState('');
  const handelButtonClick=()=>{
    setCurrentSection('course_offer');
    document.getElementById('course_offer').scrollIntoView({behavior: 'smooth'});//with id 
  }


  // video
  const videoRef = useRef(null);
  const [videos, setVideos]=useState([]);

  useEffect(()=>{
    fetch('http://127.0.0.1:8080/video')
    .then(response => response.json())
    .then(data => setVideos(data));
  },[]);

  //Project Course
  const[projectCourses,setProjectCourses]=useState([]);
  useEffect(()=>{
    fetch('http://127.0.0.1:8080/ProjectCourse')
    .then(response => response.json())
    .then(data => setProjectCourses(data));
  },[]);


  // course_cards:
  const[course_card, setCourse_cards]=useState([]);
  useEffect(()=>{
    fetch('http://127.0.0.1:8080/course_card')
    .then(response => response.json())
    .then(data => setCourse_cards(data));
  },[])


  // course details :
  const [courseDuration, setCourseDuration] = useState([]);
  useEffect(()=>{
    fetch('http://127.0.0.1:8080/courseDetails')// send get request to url
    .then(response => response.json()) //take the response from fetch request and convert in json format
    .then(data => setCourseDuration(data)); //take the json data recice from server and updates 
  },[])

  console.log(courseDuration)

  
 


  
  return (
    <>
       <section>
        <div className='container_vdo'>
        {videos.map(video=>(
          <video key={video.id} ref={videoRef}  width='100%' height="650px"  loop autoPlay muted >
            <source src={video.url} type='video/mp4'></source>
          </video>
        ))}

        </div>
        
        <div  className='our-courses'>
        <h1>Discover Your Path to Knowledge with Our Diverse Course Selection</h1>
        <p>Welcome to our educational hub, where limitless learning possibilities await. Embark on a journey of discovery with our curated selection of courses.</p>
        <button onClick={handelButtonClick}>Explore Courses</button>
        </div>
        </section>


        <section>
        <div><h1 className='head'>Explore Our Exciting Courses</h1></div>

        <div style={{ height: '4px', backgroundColor: '#dbad4d' ,borderWidth:'2px', width:'10rem', display:"inline-block",marginLeft:'30px',borderRadius:'50px'}}></div>
        <div style={{ height: '4px', backgroundColor: '#dbad4d' ,borderWidth:'2px', width:'8rem', display:"inline-block", marginLeft:'0.25rem',borderRadius:'50px'}}></div>
        <div style={{ height: '4px', backgroundColor: '#dbad4d' ,borderWidth:'2px', width:'1rem', display:"inline-block",marginLeft:'0.25rem',borderRadius:'50px'}}></div>
           
   <div className='ourcourses'>           
    <div className='course-features'>
     <table className="courses">
        <tr>
            <td><HowToRegOutlinedIcon/>Industry Experts</td>
            <td  className='td1'><ArticleIcon />Real World Projects</td>
        </tr>

        <tr>
            <td ><InterpreterModeOutlinedIcon  /><span >Interview Preparation Session</span></td>
            <td className='td2'><DescriptionOutlinedIcon/> Resume Building</td>
        </tr>

        <tr>
            <td ><WatchLaterOutlinedIcon />Flexible Learning </td>
            <td  className='td3'><CastForEducationOutlinedIcon />Interactive Learning Environment</td>
        </tr>    
    </table>
    </div>
    
    
    <div className='course_img'>
      {projectCourses.map(project=>(
        <img src={project.image_url} alt="write"/>
      ))}
        </div>
    </div>
    </section>





   <section id='course_offer'>
    <main className='main_course'>
        <h3>Explore Our Comprehensive Course Offerings</h3>
        <p>Unlock your potential with our diverse range of expertly designed courses, tailored to meet your learning goals and career aspirations.</p>
        <div className='card20'>
        {course_card.map(course=>(
      <div key={course.id} className='card_section10'> 
      <Card>
      <div className='cardmedia'>
      <CardMedia className='cardmedia_img'
        component="img"
        alt={course.title}
        height="140"
        image={course.image}/>
      </div>

      <div  className='cardcontent'>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className='h2'>
         {course.title}
        </Typography>
        <p>
        {course.description}
        </p>
      </CardContent>
      </div>
    <div className='action'>
      <CardActions>
      <div className='cardaction'>
        <span size="small"  className='learner'><PersonOutlineOutlinedIcon/>{course.learners} Learners</span>
        </div>

    <div className='rating'>
        <span size="small" className='star_light'>
         <StarIcon/> <StarIcon/><StarIcon/><StarIcon/><StarIcon/>
        </span>        
    </div>
      </CardActions>
      </div>
    </Card>

    <div className='duration'>
        {courseDuration  //create new array //takes single argument
          .filter(courseDemo => courseDemo.id === course.id) // callback 
          .map(courseDemo => (//called resulting array and it creates new array
            <div className='duration1' key={courseDemo.id}>
              <h4>{courseDemo.title}</h4>
              <ul className='duration_list'>
                <li><TaskAltOutlinedIcon /><span>Duration: {courseDemo.Duration}</span></li>
                <li><TaskAltOutlinedIcon /><span>Projects: {courseDemo.Projects}</span></li>
                <li><TaskAltOutlinedIcon /><span>Placement Assistance: {courseDemo.Placement}</span></li>
                <li><TaskAltOutlinedIcon /><span>Modes: {courseDemo.Modes}</span></li>
                <li><TaskAltOutlinedIcon /><span>Expertise: {courseDemo.Expertise}</span></li>
              </ul>
              <Link to={courseDemo.path}>
                <button className='duration_btn1'>Read More</button>
              </Link>
              <Link to={courseDemo.path1}>
                <button className='duration_btn2'>Book Demo</button>
              </Link>
            </div>
          ))}
      </div>
    </div>
  ))}   

   
    
        </div>
    </main>
   </section>
        
            
        


 











    </>
  )
}

export default OurCourses