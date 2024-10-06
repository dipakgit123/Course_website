import React from 'react';
import '../styles/Footer.css'
import NearMeIcon from '@mui/icons-material/NearMe';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from '@mui/material/Link';



const Footer = () => {
  return (
    <footer  className="footer_1">
      <div className="section_container footer_container">
      <div className="footer_col">
        <h2>About Us</h2>
        <p>At Fusion Software Institute, we offer dynamic courses blending theory and hands-on training to prepare you for a successful career in IT. With expert instructors and state-of-the-art facilities, we equip you with the skills needed to thrive in IT industry</p>

        </div>

        <div className="footer_col">
        <h2>Our Courses</h2>
      
            <Link href="/" underline="none"  className="footer-link"> Data Science</Link>
            <Link href="/" underline="none"  className="footer-link">Data Analyst</Link>
            <Link href="/" underline="none"  className="footer-link">Power BI</Link>
            <Link href="/" underline="none"  className="footer-link">AWS with DevOps</Link>
            <Link href="/" underline="none"  className="footer-link">React JS</Link>
            <Link href="/" underline="none"  className="footer-link">Java Development</Link>
            <Link href="/" underline="none"  className="footer-link"> Python Development</Link>
            <Link href="/" underline="none"  className="footer-link">Full Stack Web Development</Link>
            <Link href="/" underline="none"  className="footer-link">Microsoft Azure</Link>
            <Link href="/" underline="none"  className="footer-link">Software Testing</Link>
            <Link href="/" underline="none" className="footer-link">SAP (Material Management)</Link>
            <Link href="/" underline="none"  className="footer-link">Salesforce</Link>
            <Link href="/" underline="none"  className="footer-link">SAP FICO</Link>
            <Link href="/" underline="none"  className="footer-link">Big Data Hadoop</Link>
            <Link href="/" underline="none"  className="footer-link">Oracle SQL and PLSQL</Link>
            <Link href="/" underline="none"  className="footer-link">SAP SD</Link>
            <Link href="/" underline="none"  className="footer-link">RPA (Robotic Process Automation)</Link>
            <Link href="/" underline="none"  className="footer-link">Dot Net Development</Link>

      

        </div>
       

        <div className="footer_col">
  <h2>Quick Links</h2>
  <Link href="/" underline="none" className="footer-link">About Us</Link>
  <Link href="/" underline="none" className="footer-link">Technical Job Openings</Link>
  <Link href="/" underline="none" className="footer-link">NON-Technical Job Openings</Link>
  <Link href="/" underline="none" className="footer-link">Online Batches</Link>
  <Link href="/" underline="none" className="footer-link">Offline Batches</Link>
  <Link href="/" underline="none" className="footer-link">Our Placements</Link>
  <Link href="/" underline="none" className="footer-link">Contact Us</Link>
  <Link href="/" underline="none" className="footer-link">Enterprise Services</Link>
  <Link href="/" underline="none" className="footer-link">Management Program</Link>
  <Link href="/" underline="none" className="footer-link">Microsoft-365</Link>
</div>

        <div className="footer_col">
        <h2>Contact Details</h2>
      
      <div className='contact_details_1'><NearMeIcon className='icons_footer' ></NearMeIcon>Office 101,01st Floor,Stellar Spaces Kharadi SouthMainRoad,opp.Zensar,IT Park,Kharadi,Pune,Maharashtra 411014</div>
       <div className='contact_details_1'><AttachEmailIcon className='icons_footer'></AttachEmailIcon>enquiry@fusion-institute.com</div>
       <div className='contact_details_1'><PhoneAndroidIcon className='icons_footer'></PhoneAndroidIcon>9511987273,7498992609</div>
        </div>

        <div className="footer_col">
        <FacebookRoundedIcon></FacebookRoundedIcon>
        <WhatsAppIcon></WhatsAppIcon>
        <InstagramIcon></InstagramIcon>
        <LinkedInIcon></LinkedInIcon>
        <YouTubeIcon></YouTubeIcon>
        <h6>Refund Policy | Privacy Policy</h6>


        </div>
        </div>
    </footer>
  ); 
};

export default Footer;