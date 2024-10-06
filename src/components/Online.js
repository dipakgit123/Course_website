import React from 'react'
import ComputerIcon from '@mui/icons-material/Computer';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import SchoolIcon from '@mui/icons-material/School';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {Button} from '@mui/material';
import '../styles/batch.css'
import { Link } from 'react-router-dom';


const Online = () => {
  return (
    <div>
      <section className='set1'>
        <div className='rot'></div>
        <div className='ri_ght'>
          <span className='mode'>ONLINE BATCHES</span>
          <h1>Explore Our Online Batches
              at<span className='cut'> Fusion Institute.</span>
          </h1>
          <p>
          Dive into a world of learning with our online batches. 
          Whether you're interested in data science, web development, 
          or any other field, we have something for everyone.
          </p>
          <div className='btngroup'>
            <Link to="/demo">
              <Button className="bseat">Book a Seat</Button>
            </Link>
            <Button className='eacourse'>Explore All Courses </Button>
          </div>
        </div>
        <div className='le_ft'>
            <img src='https://www.fusion-institute.com/_next/image?url=%2Fimg%2Fbatches%2FCourseBatch.jpg&w=1080&q=100' alt=''/>
        </div>
      </section>

      <section className='set2'>
        <h2 className='set2-1'>What Do We Have To Offer?</h2>
        <div className='offer'>
          <p><CheckCircleOutlineIcon/>Flexible Learning Schedule</p>
          <p><CheckCircleOutlineIcon/>Multimedia Resources</p>
          <p><CheckCircleOutlineIcon/>Mobile Compatibility</p>
          <p><CheckCircleOutlineIcon/>Discussion Forums</p>
          <p><CheckCircleOutlineIcon/>Access to Expert Instructors</p>
          <p><CheckCircleOutlineIcon/>Certification</p>
        </div>
      </section>

      <section className='set3'>
        <div className='session'>
          <h2 className='upcoming'>UPCOMING SESSIONS</h2>
          <h2 className='ongoing'>ONGOING SESSIONS</h2>
        </div>
        <div className='event-container1'>
         
         <div className='back-box1'>
            <div class="event-box">
              <h2 class="event-name">Aws DevOps</h2>
              <p class="event-date"><EventIcon/>June 1, 2024</p>
              <p class="event-time"><AvTimerIcon/>08:00 AM TO 10:00 AM</p>
              <p class="event-day"> <AccessTimeFilledIcon/> MORNING</p>
              <p class="event-location"><LocationOnIcon/>ONLINE</p>
            </div>
          </div>

         <div className='back-box1'>
            <div class="event-box">
              <h2 class="event-name">Business Analytics</h2>
              <p class="event-date"><EventIcon/> June 1, 2024</p>
              <p class="event-time"><AvTimerIcon/>10:00 am TO 12:00 pm</p>
              <p class="event-day"> <AccessTimeFilledIcon/> MORNING</p>
              <p class="event-location"><LocationOnIcon/>ONLINE</p>
            </div>
          </div>

          <div className='back-box1'>
            <div class="event-box">
              <h2 class="event-name">Data Science</h2>
              <p class="event-date"><EventIcon/> June 1, 2024</p>
              <p class="event-time"><AvTimerIcon/>08:30AM TO 10:30AM</p>
              <p class="event-day"> <AccessTimeFilledIcon/> MORNING</p>
              <p class="event-location"><LocationOnIcon/>ONLINE</p>
            </div>
          </div>

          <div className='back-box1'>
            <div class="event-box">
              <h2 class="event-name">Power BI</h2>
              <p class="event-date"><EventIcon/> June 6, 2024</p>
              <p class="event-time"><AvTimerIcon/>08:30AM TO 10:30AM</p>
              <p class="event-day"> <AccessTimeFilledIcon/> MORNING</p>
              <p class="event-location"><LocationOnIcon/>ONLINE</p>
            </div>
          </div>

          <div className='back-box1'>
            <div class="event-box">
              <h2 class="event-name">Data Analyst</h2>
              <p class="event-date"><EventIcon/>June 1, 2024</p>
              <p class="event-time"><AvTimerIcon/>08:00 AM TO 10:00 AM</p>
              <p class="event-day"> <AccessTimeFilledIcon/> MORNING</p>
              <p class="event-location"><LocationOnIcon/>ONLINE</p>
            </div>
          </div>

         <div className='back-box1'>
            <div class="event-box">
              <h2 class="event-name">Microsoft Azure</h2>
              <p class="event-date"><EventIcon/> June 1, 2024</p>
              <p class="event-time"><AvTimerIcon/>10:00 am TO 12:00 pm</p>
              <p class="event-day"> <AccessTimeFilledIcon/> MORNING</p>
              <p class="event-location"><LocationOnIcon/>ONLINE</p>
            </div>
          </div>

          <div className='back-box1'>
            <div class="event-box">
              <h2 class="event-name">Software Testing</h2>
              <p class="event-date"><EventIcon/> June 1 , 2024</p>
              <p class="event-time"><AvTimerIcon/>08:00 am TO 10:00 pm</p>
              <p class="event-day"> <AccessTimeFilledIcon/> MORNING</p>
              <p class="event-location"><LocationOnIcon/>ONLINE</p>
            </div>
          </div>

          <div className='back-box1'>
            <div class="event-box">
              <h2 class="event-name">Java Development</h2>
              <p class="event-date"><EventIcon/> June 1, 2024</p>
              <p class="event-time"><AvTimerIcon/>07:00 am TO 09:00 pm</p>
              <p class="event-day"> <AccessTimeFilledIcon/> EVENING</p>
              <p class="event-location"><LocationOnIcon/>ONLINE</p>
            </div>
          </div>

          <div className='back-box1'>
            <div class="event-box">
              <h2 class="event-name">Oracle SQL/PLSQL</h2>
              <p class="event-date"><EventIcon/>July 14, 2024</p>
              <p class="event-time"><AvTimerIcon/>08:00 AM TO 10:00 AM</p>
              <p class="event-day"> <AccessTimeFilledIcon/> EVENING</p>
              <p class="event-location"><LocationOnIcon/>ONLINE</p>
            </div>
          </div>

         <div className='back-box1'>
            <div class="event-box">
              <h2 class="event-name">Python Development</h2>
              <p class="event-date"><EventIcon/> August 5, 2024</p>
              <p class="event-time"><AvTimerIcon/>08:00 am TO 10:00 pm</p>
              <p class="event-day"> <AccessTimeFilledIcon/> MORNING</p>
              <p class="event-location"><LocationOnIcon/>ONLINE</p>
            </div>
          </div>

          <div className='back-box1'>
            <div class="event-box">
              <h2 class="event-name">Web Development</h2>
              <p class="event-date"><EventIcon/> July 18, 2024</p>
              <p class="event-time"><AvTimerIcon/>09:30AM TO 10:30AM</p>
              <p class="event-day"> <AccessTimeFilledIcon/> MORNING</p>
              <p class="event-location"><LocationOnIcon/>ONLINE</p>
            </div>
          </div>

          <div className='back-box1'>
            <div class="event-box">
              <h2 class="event-name">Salesforce</h2>
              <p class="event-date"><EventIcon/>January 5, 2024</p>
              <p class="event-time"><AvTimerIcon/>08:30AM TO 10:30AM</p>
              <p class="event-day"> <AccessTimeFilledIcon/> EVENING</p>
              <p class="event-location"><LocationOnIcon/>ONLINE</p>
            </div>
          </div>

          <div className='back-box1'>
            <div class="event-box">
              <h2 class="event-name">Robotics Process Automation</h2>
              <p class="event-date"><EventIcon/>August 9, 2024</p>
              <p class="event-time"><AvTimerIcon/>08:00 AM TO 10:00 AM</p>
              <p class="event-day"> <AccessTimeFilledIcon/> MORNING</p>
              <p class="event-location"><LocationOnIcon/>ONLINE</p>
            </div>
          </div>

         <div className='back-box1'>
            <div class="event-box">
              <h2 class="event-name">Big Data Hadoop</h2>
              <p class="event-date"><EventIcon/>September 12, 2024</p>
              <p class="event-time"><AvTimerIcon/>07:00PM 09:00PM</p>
              <p class="event-day"> <AccessTimeFilledIcon/> EVENING</p>
              <p class="event-location"><LocationOnIcon/>ONLINE</p>
            </div>
          </div>

          <div className='back-box1'>
            <div class="event-box">
              <h2 class="event-name">SAP MM</h2>
              <p class="event-date"><EventIcon/> November 1, 2024</p>
              <p class="event-time"><AvTimerIcon/>07:00 am TO 10:00 pm</p>
              <p class="event-day"> <AccessTimeFilledIcon/> EVENING</p>
              <p class="event-location"><LocationOnIcon/>ONLINE</p>
            </div>
          </div>

          <div className='back-box1'>
            <div class="event-box">
              <h2 class="event-name">SAP FICO</h2>
              <p class="event-date"><EventIcon/> November 10, 2024</p>
              <p class="event-time"><AvTimerIcon/>07:00 am TO 9:00 pm</p>
              <p class="event-day"> <AccessTimeFilledIcon/> EVENING</p>
              <p class="event-location"><LocationOnIcon/>ONLINE</p>
            </div>
          </div>

          <div className='back-box1'>
            <div class="event-box">
              <h2 class="event-name">Aws DevOps</h2>
              <p class="event-date"><EventIcon/>June 1, 2024</p>
              <p class="event-time"><AvTimerIcon/>08:00 AM TO 10:00 AM</p>
              <p class="event-day"> <AccessTimeFilledIcon/> MORNING</p>
              <p class="event-location"><LocationOnIcon/>ONLINE</p>
            </div>
          </div>

         <div className='back-box1'>
            <div class="event-box">
              <h2 class="event-name">Business Analytics</h2>
              <p class="event-date"><EventIcon/> June 1, 2024</p>
              <p class="event-time"><AvTimerIcon/>10:00 am TO 12:00 pm</p>
              <p class="event-day"> <AccessTimeFilledIcon/> MORNING</p>
              <p class="event-location"><LocationOnIcon/>ONLINE</p>
            </div>
          </div>

          <div className='back-box1'>
            <div class="event-box">
              <h2 class="event-name">Data Science</h2>
              <p class="event-date"><EventIcon/> June 1, 2024</p>
              <p class="event-time"><AvTimerIcon/>08:30AM TO 10:30AM</p>
              <p class="event-day"> <AccessTimeFilledIcon/> MORNING</p>
              <p class="event-location"><LocationOnIcon/>ONLINE</p>
            </div>
          </div>

          <div className='back-box1'>
            <div class="event-box">
              <h2 class="event-name">Power BI</h2>
              <p class="event-date"><EventIcon/> June 6, 2024</p>
              <p class="event-time"><AvTimerIcon/>08:30AM TO 10:30AM</p>
              <p class="event-day"> <AccessTimeFilledIcon/> MORNING</p>
              <p class="event-location"><LocationOnIcon/>ONLINE</p>
            </div>
          </div>

          <div className='back-box1'>
            <div class="event-box">
              <h2 class="event-name">Data Analyst</h2>
              <p class="event-date"><EventIcon/>June 1, 2024</p>
              <p class="event-time"><AvTimerIcon/>08:00 AM TO 10:00 AM</p>
              <p class="event-day"> <AccessTimeFilledIcon/> MORNING</p>
              <p class="event-location"><LocationOnIcon/>ONLINE</p>
            </div>
          </div>

         <div className='back-box1'>
            <div class="event-box">
              <h2 class="event-name">Microsoft Azure</h2>
              <p class="event-date"><EventIcon/> June 1, 2024</p>
              <p class="event-time"><AvTimerIcon/>10:00 am TO 12:00 pm</p>
              <p class="event-day"> <AccessTimeFilledIcon/> MORNING</p>
              <p class="event-location"><LocationOnIcon/>ONLINE</p>
            </div>
          </div>

          <div className='back-box1'>
            <div class="event-box">
              <h2 class="event-name">Software Testing</h2>
              <p class="event-date"><EventIcon/> June 1 , 2024</p>
              <p class="event-time"><AvTimerIcon/>08:00 am TO 10:00 pm</p>
              <p class="event-day"> <AccessTimeFilledIcon/> MORNING</p>
              <p class="event-location"><LocationOnIcon/>ONLINE</p>
            </div>
          </div>

          <div className='back-box1'>
            <div class="event-box">
              <h2 class="event-name">Java Development</h2>
              <p class="event-date"><EventIcon/> June 1, 2024</p>
              <p class="event-time"><AvTimerIcon/>07:00 am TO 09:00 pm</p>
              <p class="event-day"> <AccessTimeFilledIcon/> EVENING</p>
              <p class="event-location"><LocationOnIcon/>ONLINE</p>
            </div>
          </div>

          <div className='back-box1'>
            <div class="event-box">
              <h2 class="event-name">Oracle SQL/PLSQL</h2>
              <p class="event-date"><EventIcon/>July 14, 2024</p>
              <p class="event-time"><AvTimerIcon/>08:00 AM TO 10:00 AM</p>
              <p class="event-day"> <AccessTimeFilledIcon/> EVENING</p>
              <p class="event-location"><LocationOnIcon/>ONLINE</p>
            </div>
          </div>

         <div className='back-box1'>
            <div class="event-box">
              <h2 class="event-name">Python Development</h2>
              <p class="event-date"><EventIcon/> August 5, 2024</p>
              <p class="event-time"><AvTimerIcon/>08:00 am TO 10:00 pm</p>
              <p class="event-day"> <AccessTimeFilledIcon/> MORNING</p>
              <p class="event-location"><LocationOnIcon/>ONLINE</p>
            </div>
          </div>

          <div className='back-box1'>
            <div class="event-box">
              <h2 class="event-name">Web Development</h2>
              <p class="event-date"><EventIcon/> July 18, 2024</p>
              <p class="event-time"><AvTimerIcon/>09:30AM TO 10:30AM</p>
              <p class="event-day"> <AccessTimeFilledIcon/> MORNING</p>
              <p class="event-location"><LocationOnIcon/>ONLINE</p>
            </div>
          </div>

          <div className='back-box1'>
            <div class="event-box">
              <h2 class="event-name">Salesforce</h2>
              <p class="event-date"><EventIcon/>January 5, 2024</p>
              <p class="event-time"><AvTimerIcon/>08:30AM TO 10:30AM</p>
              <p class="event-day"> <AccessTimeFilledIcon/> EVENING</p>
              <p class="event-location"><LocationOnIcon/>ONLINE</p>
            </div>
          </div>

          <div className='back-box1'>
            <div class="event-box">
              <h2 class="event-name">Robotics Process Automation</h2>
              <p class="event-date"><EventIcon/>August 9, 2024</p>
              <p class="event-time"><AvTimerIcon/>08:00 AM TO 10:00 AM</p>
              <p class="event-day"> <AccessTimeFilledIcon/> MORNING</p>
              <p class="event-location"><LocationOnIcon/>ONLINE</p>
            </div>
          </div>

         <div className='back-box1'>
            <div class="event-box">
              <h2 class="event-name">Big Data Hadoop</h2>
              <p class="event-date"><EventIcon/>September 12, 2024</p>
              <p class="event-time"><AvTimerIcon/>07:00PM 09:00PM</p>
              <p class="event-day"> <AccessTimeFilledIcon/> EVENING</p>
              <p class="event-location"><LocationOnIcon/>ONLINE</p>
            </div>
          </div>

          <div className='back-box1'>
            <div class="event-box">
              <h2 class="event-name">SAP MM</h2>
              <p class="event-date"><EventIcon/> November 1, 2024</p>
              <p class="event-time"><AvTimerIcon/>07:00 am TO 10:00 pm</p>
              <p class="event-day"> <AccessTimeFilledIcon/> EVENING</p>
              <p class="event-location"><LocationOnIcon/>ONLINE</p>
            </div>
          </div>

          <div className='back-box1'>
            <div class="event-box">
              <h2 class="event-name">SAP FICO</h2>
              <p class="event-date"><EventIcon/> November 10, 2024</p>
              <p class="event-time"><AvTimerIcon/>07:00 am TO 9:00 pm</p>
              <p class="event-day"> <AccessTimeFilledIcon/> EVENING</p>
              <p class="event-location"><LocationOnIcon/>ONLINE</p>
            </div>
          </div>
         
        </div>
      </section>

      <section className='set4'>
        <h2>Student Experience - Online Batches</h2>
        <p className='hear'>
        "Numerous students have successfully secured employment while effectively juggling their studies, 
         professional commitments, and personal life, showcasing the remarkable balance achieved through 
         Fusion Institute's online batch programs."
        </p>
        <div className='icon-box'>
          <div>
          <><WatchLaterOutlinedIcon/></>
          <h3>Manage Time with Flexible Courses</h3>
          <p>Efficiently Navigate your Schedule</p>
          </div>

          <div>
          <><SchoolIcon/></>
          <h3>Use Robust Student Resources</h3>
          <p>Empower you with Tools & Support</p>
          </div>

          <div>
          <><ComputerIcon/></>
          <h3>Learn Online</h3>
          <p>Access to High-Quality Education</p>
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

export default Online
