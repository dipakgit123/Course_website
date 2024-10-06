import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
 import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
 import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
//  import CallEndIcon from '@mui/icons-material/CallEnd';
 import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
// import { ExitToApp } from '@mui/icons-material';
import '../styles/NavBar.css'
import { CallEnd, Info } from '@mui/icons-material';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
// import InfoIcon from '@mui/icons-material/Info';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import SchoolIcon from '@mui/icons-material/School';
// import { Prev } from 'react-bootstrap/esm/PageItem';
// import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import Link from '@mui/material/Link';


const Navnbar = () => {

  const [openprofile,setopenprofile] = useState(false);
  const [profile,setprofile] = useState(false);
  const [treaning,settreaning] = useState(false);
  const [carrer,setcarrer] = useState(false);

  return (
    <>
   
    <Navbar  expand="lg"  style={{position:'sticky',backgroundColor:'black' }}>
    <div className='logo'>
                  <img  src='https://www.fusion-institute.com/_next/image?url=%2Fimg%2Ffusion.png&w=128&q=100' alt='logo is there'></img>
      </div>
      <Container style={{backgroundColor:'black',display:'flex' ,flexDirection:'row',justifyContent:'end',alignItems:'end'}} >
       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{backgroundColor:'white'}} />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href="#"  style={{color:'white',textAlign:"center"}}><LocalPhoneIcon></LocalPhoneIcon> +91 9511987273</Nav.Link>
            <Nav.Link href="#deet"  style={{color:'white',textAlign:"center"}}><LocalPhoneIcon></LocalPhoneIcon> +91 7498992609</Nav.Link>
            <Nav.Link href="#deets"  style={{color:'white',textAlign:"center"}}><CallEnd></CallEnd> Book a Seat</Nav.Link>
            <Nav.Link href="#deets"  style={{color:'white',textAlign:"center"}}><AppRegistrationIcon></AppRegistrationIcon> Register</Nav.Link>
            <Nav.Link href="/login"  style={{color:'white',textAlign:"center"}}><ExitToAppIcon></ExitToAppIcon> Login</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
    

    <Navbar expand="lg" style={{position:'sticky',  backgroundColor:'rgb(244 222 124)'}}>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" className='bar_1' />
      <Container style={{backgroundColor:'rgb(244 222 124)',display:'flex' ,flexDirection:'row',justifyContent:'end',alignItems:'end'}} >
      
        <Navbar.Collapse id="responsive-navbar-nav" >
        <Nav className="me-auto">
          <Nav.Link href="/"  style={{color:'black',textAlign:"center"}}><HomeIcon/>Home</Nav.Link>
          <Nav.Link href="#deets"  style={{color:'black',textAlign:"center"}} onMouseOver={()=> setopenprofile ((prev) => !prev)}><LibraryBooksIcon/>Our Courses</Nav.Link>
          <Nav.Link href="#deets"  style={{color:'black',textAlign:"center"}} onMouseOver={()=> setprofile ((prev) => !prev)}><LibraryAddCheckIcon/>Batches</Nav.Link>
          <Nav.Link href="#deets"  style={{color:'black',textAlign:"center"}}><GroupIcon/>Our Placements</Nav.Link>
          <Nav.Link href="#deets"  style={{color:'black',textAlign:"center"}}><Info/>About Us</Nav.Link>
          <Nav.Link href="#deets"  style={{color:'black',textAlign:"center"}}><RecentActorsIcon/>Contact Us</Nav.Link>
          <Nav.Link href="#deets"  style={{color:'black',textAlign:"center"}}  onMouseOver={()=> settreaning ((prev) => !prev)}><LibraryAddCheckIcon/>Corporate Training</Nav.Link>
          <Nav.Link href="/career"  style={{color:'black',textAlign:"center"}} onMouseOver={()=> setcarrer ((prev) => !prev)}><SchoolIcon/>Career</Nav.Link>
          </Nav> 
        </Navbar.Collapse>
        </Container>
      
    </Navbar>
   
    {
      openprofile && 
   
    <div className='flex flex-col dropdownprofile'>
      <Link href="/" underline="none"  className="link-1"> Data Science</Link>
            <Link href="/" underline="none"  className="link-1">Data Analyst</Link>
            <Link href="/" underline="none"  className="link-1">Power BI</Link>
            <Link href="/" underline="none"  className="link-1">AWS with DevOps</Link>
            <Link href="/" underline="none"  className="link-1">React JS</Link>
            <Link href="/" underline="none"  className="link-1">Java Development</Link>
            <Link href="/" underline="none"  className="link-1"> Python Development</Link>
            <Link href="/" underline="none"  className="link-1">Full Stack Web Development</Link>
            <Link href="/" underline="none"  className="link-1">Microsoft Azure</Link>
            <Link href="/" underline="none"  className="link-1">Software Testing</Link>
            <Link href="/" underline="none" className="link-1">SAP (Material Management)</Link>
            <Link href="/" underline="none"  className="link-1">Salesforce</Link>
            <Link href="/" underline="none"  className="link-1">SAP FICO</Link>
            <Link href="/" underline="none"  className="link-1">Big Data Hadoop</Link>
            <Link href="/" underline="none"  className="link-1">Oracle SQL and PLSQL</Link>
            <Link href="/" underline="none"  className="link-1">SAP SD</Link>
            <Link href="/" underline="none"  className="link-1">RPA (Robotic Process Automation)</Link>
            <Link href="/" underline="none"  className="link-1">Dot Net Development</Link>
    </div>
}

{
  profile && 
  <div className=" flex flex-col  dropdownprofile_2">
    
      <Link href="/" underline="none"  className="link-1">Online-Batches</Link> 
      <Link href="/" underline="none"  className="link-1">Offline-Batches</Link>
      <Link href="/" underline="none"  className="link-1">Hybrid-Batches</Link>
    
  </div>
}


{
   treaning && 
   <div className=" flex flex-col  dropdownprofile_3">
    
     <Link href="/" underline="none"  className="link-1">Technology Training Program</Link>
       <Link href="/" underline="none"  className="link-1">Management Development Program</Link>
       <Link href="/" underline="none"  className="link-1">Microsoft Office 365</Link>
    
   </div>
}


{
  carrer && 
    <div className=" flex flex-col  dropdownprofile_4">
  
       <Link href="/" underline="none"  className="link-1">Technical</Link>
      <Link href="/nontechnical" underline="none"  className="link-1">Non Technical</Link>
     
   </div>
  
}

    </>
  )
}

export default Navnbar

