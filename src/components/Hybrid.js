import React from 'react'
import GroupIcon from '@mui/icons-material/Group';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {Button} from '@mui/material';
import '../styles/batch.css'
import { Link } from 'react-router-dom';

const Hybrid = () => {
  return (
    <div>
      <section className='set1'>
        <div className='rot'></div>
        <div className='ri_ght'>
          <span className='mode'>HYBRID BATCHES</span>
          <h1>Discover Our Hybrid Batches
              at<span className='cut'> Fusion Institute.</span>
          </h1>
          <p>
          Experience the best of both worlds with our hybrid batches. 
          Whether you're passionate about data science, web development, 
          or another field, our flexible learning options cater to all interests, 
          ensuring you gain valuable skills in a way that fits your lifestyle.
          </p>
          <div className='btngroup'>
            <Link to={'/demo'}>
              <Button className='bseat'>Book a Seat</Button>
            </Link>
          <Button className='eacourse'>Explore All Courses </Button>
          </div>
        </div>
        <div className='le_ft'>
            <img src='https://www.fusion-institute.com/_next/image?url=%2Fimg%2Fbatches%2FCourseBatch.jpg&w=1080&q=100' alt=''/>
        </div>
      </section>

      <section className='set2'>
        <h2>What Do We Have To Offer?</h2>
        <div className='offer'>
          <p><CheckCircleOutlineIcon/>Flexible Schedule</p>
          <p><CheckCircleOutlineIcon/>Blended Learning</p>
          <p><CheckCircleOutlineIcon/>Interactive Sessions</p>
          <p><CheckCircleOutlineIcon/>Combined Resources</p>
          <p><CheckCircleOutlineIcon/>Balanced Interaction</p>
          <p><CheckCircleOutlineIcon/>Certification</p>
        </div>
      </section>

      <section className='set3'>
        <div className='session'>
          <h2 className='upcoming'>UPCOMING SESSIONS</h2>
          <h2 className='ongoing'>ONGOING SESSIONS</h2>
        </div>
        <div className='event-container'>
         
         <div className='back-box'>
            <div class="event-box">
              <h2 class="event-name">Aws DevOps</h2>
              <p class="event-date"><EventIcon/>August 12, 2024</p>
              <p class="event-time"><AvTimerIcon/>08:00 AM TO 10:00 AM</p>
              <p class="event-day"> <AccessTimeFilledIcon/> MORNING</p>
              <p class="event-location"><LocationOnIcon/>HYBRID</p>
            </div>
          </div>

         <div className='back-box'>
            <div class="event-box">
              <h2 class="event-name">Business Analytics</h2>
              <p class="event-date"><EventIcon/> August 27, 2024</p>
              <p class="event-time"><AvTimerIcon/>10:00 am TO 12:00 pm</p>
              <p class="event-day"> <AccessTimeFilledIcon/> MORNING</p>
              <p class="event-location"><LocationOnIcon/>HYBRID</p>
            </div>
          </div>
        </div>
      </section>

      <section className='set4'>
        <h2>Student Experience - Hybrid Batches</h2>
        <p className='hear'>
        "Many students have thrived in our hybrid batches, effectively balancing their education, work, 
         and personal life, thanks to Fusion Institute's supportive environment."
        </p>
        <div className='icon-box'>
          <div>
          <><GroupIcon/></>
          <h3>Engage in Group Activities</h3>
          <p>Collaborate and Learn Together</p>
          </div>

          <div>
          <><SchoolIcon/></>
          <h3>Access Quality Hybrid Teaching</h3>
          <p>Online & In-Person Benefits</p>
          </div>

          <div>
          <><WorkIcon/></>
          <h3>Prepare for the Workforce</h3>
          <p>Gain Practical Skills and Experience</p>
          </div>
        </div>
      </section> 

      <section className='set5'>
        <h2>Want To Make Awesome Career ?</h2>
        <p>It's today or never.</p>
        <Button className='conwus'>Connect With Us </Button>
      </section>
    </div>
  )
}

export default Hybrid
