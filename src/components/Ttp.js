import React from 'react';
import { Container, Grid, Typography, Button, Box,Card,Avatar, } from '@mui/material';
import "../styles/Ttp.css"
import styled, { keyframes } from 'styled-components';

const move = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

const MarqueeContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  background-color: #f5f5f5;
`;

const MarqueeItem = styled.div`
  display: inline-block;
  padding: 0 2rem;
  font-size: 1.5rem;
  animation: ${move} 5s linear infinite;
`;


const items = [
    {
      title: "Comprehensive Course",
      description: "Providing comprehensive course materials, including manuals, exercises, and resources, to support continuous learning and reference."
    },
    {
      title: "Expert Instructors",
      description: "Led by industry professionals with extensive experience and expertise in the latest technologies, providing top-notch instruction and guidance."
    },
    {
      title: "Hands-on Practical",
      description: "Emphasizing practical exercises and real-world scenarios to equip participants with valuable skills and knowledge applicable in their roles."
    },
    {
      title: "Flexible Scheduling",
      description: "Offering flexible training schedules to accommodate the busy calendars of your employees, minimizing disruption to daily operations."
    },
    {
      title: "Proven Track Record",
      description: "Backed by a track record of successful training engagements and satisfied clients, ensuring confidence in our ability to deliver results."
    },
    {
      title: "Certification Opportunities",
      description: "Providing the opportunity for participants to earn industry-recognized certifications upon successful completion of the training program, enhancing their career prospects."
    }
  ];

  const skills = [
    { name: 'JAVA', icon: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg' },
    { name: 'C++', icon: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg' },
    { name: 'MY SQL', icon: 'https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg' },
    { name: 'LINUX', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png' },
    { name: 'DBMS', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE31qCclFML7BEO4CDKTAOZABAQRu9Q2EiIw&s' }, 
    { name: 'TESTING', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReECmSBglEluVqqjt4WuMrX8nPA3O2f_LBqQ&s' }, 
    { name: 'AWS', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
    { name: 'JIRA', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSReovKFbJpYKewtnghzjUYAh1Rbqmy-rmQyQ&s' },
    { name: 'AZURE', icon: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg' },
    { name: 'ORACLE', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF1NRgvhBoa4xOdEKG9-jn2T90hzKUGuAKVA&s' },
    { name: 'PYTHON', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
    { name: 'DOCKER', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg' },
    { name: 'BLOCKCHAIN', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTERKrRDaz-zVNLBqqqF_jPdVO6lVhkOb1eWQ&s' }, 
    { name: 'NODE.JS', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' }
  ];

  const faqData = [
    {
      question: 'What types of technology training do you offer?',
      answer: 'Our Technology Training Program covers a wide range of topics, including programming languages, cloud computing, cybersecurity, data analytics, artificial intelligence, and more. We tailor our training sessions to meet the specific needs and goals of your organization.'
    },
    {
      question: 'Who will be conducting the training sessions?',
      answer: 'Our training sessions are led by industry experts with extensive experience in their respective fields. They are skilled instructors passionate about sharing their knowledge and helping participants develop practical skills applicable in real-world scenarios.'
    },
    {
      question: 'Can you accommodate the scheduling needs of our organization?',
      answer: 'Yes, we understand that each organization has unique scheduling requirements. We offer flexible scheduling options, including weekday, evening, and weekend sessions. Our goal is to minimize disruption to your daily operations while ensuring that your team receives the training they need.'
    },
    {
      question: 'How do you measure the effectiveness of your training programs?',
      answer: 'We believe in delivering measurable results. Throughout the training program, we use various assessment methods, including quizzes, assignments, and practical exercises, to gauge participants progress and understanding. Additionally, we gather feedback from participants to continuously improve our training programs and ensure their effectiveness.'
    },
    {
      question: 'Is certification available upon completion of the training program?',
      answer:'Yes, upon successful completion of our Technology Training Program, participants will receive a certificate of completion. This certificate validates their participation and demonstrates their newly acquired skills and knowledge in the respective technology areas. Additionally, some of our training programs may offer the opportunity to earn industry-recognized certifications, further enhancing participants credentials and career prospects.'
    }
  ];

const Ttp = () => {
  return (
    <>
<Box
        sx={{
          height: { xs: 'auto', md: '80vh' }, // Responsive height
          backgroundImage: 'url(https://png.pngtree.com/thumb_back/fh260/background/20210403/pngtree-simple-white-flat-vectors-with-diagonal-cuts-decorative-backdrops-for-your-image_597614.jpg)',
          display: 'flex',
          alignItems: 'center',
          padding: { xs: '2rem', md: '0' }, // Padding for mobile
        }}
      >
        <Container maxWidth="lg" sx={{ py: { xs: 3, md: 5 } }}>
          <Grid container alignItems="center" spacing={5}>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" gutterBottom sx={{
                marginBottom: '1.5rem',
                fontSize: { xs: '2rem', md: '3rem' }, // Responsive font size
                lineHeight: '3rem',
                fontWeight: '800',
                color: 'rgb(7 7 6)',
              }}>
                Welcome to Our Technology Training Program
              </Typography>
              <Typography variant="body1" paragraph sx={{
                marginBottom: '2rem',
                fontSize: { xs: '14px', md: '16px' }, // Responsive font size
                fontWeight: '500',
              }}>
                Unlock the full potential of your team with our specialized corporate training programs.
              </Typography>
              <Button variant="contained" sx={{
                color: 'rgb(254 254 254)',
                fontSize: { xs: '14px', md: '18px' }, // Button text responsiveness
                padding: { xs: '0.5rem 1rem', md: '0.75rem 2rem' }, // Responsive padding
                backgroundColor: 'rgb(219 173 77)',
                borderRadius: '0.375rem',
              }}>
                Connect with us
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                sx={{
                  width: '100%',
                  borderRadius: 2,
                  boxShadow: 3,
                  height:{xs:'auto',md:'400px'},
                }}
                alt="Person working on code"
                src="https://www.fusion-institute.com/_next/image?url=%2Fimg%2Fcoporate%2Ftech1.jpg&w=1080&q=75"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Marquee */}
      <MarqueeContainer>
      <MarqueeItem><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3pj6Dwf_F7ucAjn7hRXhZsKvytaqdRZtPVA&s" alt='Company A' style={{width:150,height:75,marginTop:30}}/></MarqueeItem>
      <MarqueeItem><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTndwc7x1N3PyJIQosyxIssvu5yLKlCerv4hQ&s" alt='Company B' style={{width:150,height:75,marginTop:30}}/></MarqueeItem>
      <MarqueeItem><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaq_5MsVgUJBlloNp2bBfDnNcTZ8tX1fRhZQ&s" alt='Company C' style={{width:150,height:75,marginTop:30}}/></MarqueeItem>
      <MarqueeItem><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvupL4gUCM7vRmACUEAl2jCE_g8pSp69BxVA&s" alt='Company C' style={{width:150,height:75,marginTop:30}}/></MarqueeItem>
      <MarqueeItem><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBXVDEyxGGiZWlzJIV4roTnB7oRqRhygpCJA&s" alt='Company C' style={{width:150,height:75,marginTop:30}}/></MarqueeItem>
      <MarqueeItem><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX4jEisVJWxjQe8_swMHZE4t3aSv_mBOjevQ&s" alt='Company C' style={{width:150,height:75,marginTop:30}}/></MarqueeItem>
      <MarqueeItem><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFFVf7cYGOo_NcPSWyflXzL_x6jkZg67vL4Q&s" alt='Company C' style={{width:150,height:75,marginTop:30}}/></MarqueeItem>
      <MarqueeItem><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuEdssHbzEm-DTHQhKuWXKG-9TISpz1HGsUA&s" alt='Company C' style={{width:150,height:75,marginTop:30}}/></MarqueeItem>
      <MarqueeItem><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3wAAZ70vGGNMvdGKuZNyHeBOeBx8OnHNbTA&s" alt='Company C' style={{width:150,height:75,marginTop:30}}/></MarqueeItem>
      <MarqueeItem><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3TXCVBnwKaqh7JF_DVi4zC3aiXwA7cEXDZA&s" alt='Company C' style={{width:150,height:75,marginTop:30}}/></MarqueeItem>
    </MarqueeContainer>

      {/* Section 2 */}
      <Box sx={{
        backgroundColor: '#f5f5f5',
        padding: { xs: '3rem 1.5rem', md: '5rem 0' }, // Responsive padding
      }}>
        <Container maxWidth="lg">
          <Grid container alignItems="center" spacing={5}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" sx={{
                fontSize: { xs: '24px', md: '30px' },
                fontWeight: '700',
                color: 'rgb(7 7 6)',
              }}>
                Empower Your Team with Technology Training
              </Typography>
              <Typography variant="body1" paragraph sx={{
                fontSize: { xs: '16px', md: '18px' },
                color: 'rgb(7 7 6)',
              }}>
              In today's rapidly evolving digital landscape, the scarcity of IT expertise poses a significant hurdle for businesses. With a staggering 86% of respondents foreseeing its continued impact on cloud initiatives, staying ahead necessitates a proactive approach. Our Technology Training Program at Fusion Institute is crafted to address this challenge head-on.
              </Typography>
              <Button variant="contained" sx={{
                color: 'rgb(254 254 254)',
                fontSize: { xs: '16px', md: '18px' },
                padding: { xs: '0.5rem 1rem', md: '0.75rem 2rem' },
                backgroundColor: 'rgb(219 173 77)',
                borderRadius: '0.375rem',
              }}>
                About us
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                sx={{ width: '100%', borderRadius: 2, boxShadow: 3,height:{xs:'auto',md:'400px'} }}
                alt="Woman working with technology servers"
                src="https://www.fusion-institute.com/_next/image?url=%2Fimg%2Fcoporate%2Fcorporate1.jpg&w=640&q=75"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* SECTION 3 */}
      <Box
      sx={{
        height: 'auto',
        backgroundImage:'url(https://img.freepik.com/free-vector/light-grey-dots-background_78370-2583.jpg)',
        display: 'flex',
        alignItems: 'center',
        padding:{xs:'3rem 0',md:'5rem 0'}
      }}
    >
        <Container>
      <Box mt={4} mb={4}>
        <Typography variant="h4" align="center" sx={{fontSize:'30px',fontWeight:'800',color:'rgb(218 170 71)'}}>
          Why Choose Us
        </Typography>
        <Typography variant="body1" align="center" paragraph sx={{marginBottom:'3rem',fontSize:'16px',fontWeight:'500',color:'rgb(7 7 6)'}}>
          We provide tailored training sessions designed to equip your team with the latest skills necessary to thrive in the digital age. 
          Through hands-on learning experiences and expert guidance, we empower your workforce to bridge skill gaps and unlock their full potential.
        </Typography>
      </Box>
      
      <Grid container spacing={3}>
        {items.map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card elevation={3} style={{ padding: '20px', height: '100%',backgroundColor:'#f5f5f5' }}>
              <Typography variant="h6" sx={{marginBottom:'1rem',textAlign:'center',fontSize:'1.25rem',fontWeight:'600',color:'rgb(218 170 71)'}} gutterBottom>
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{fontSize:'16px',textAlign:'center',color:'rgb(101 99 95)'}}>
                {item.description}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    </Box>


      {/* Skills Section */}
      <Box sx={{ textAlign: 'center', margin: '20px', padding: { xs: '1rem 0', md: '3rem 0' } }}>
        <Typography variant="h5" sx={{
          fontSize: { xs: '24px', md: '30px' },
          fontWeight: '800',
          color: 'rgb(218 170 71)',
          paddingBottom: '1.5rem',
        }}>
          Skills Covered In This Course
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {skills.map((skill, index) => (
            <Grid item key={index} xs={4} md={1}>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Avatar
                  sx={{
                    bgcolor: 'white',
                    border: '4px solid #daaa47',
                    width: 60,
                    height: 60,
                    marginBottom: '10px',
                  }}>
                  <img src={skill.icon} alt={skill.name} style={{ width: '100%', height: '100%' }} />
                </Avatar>
                <Typography variant="subtitle1" sx={{
                  fontSize: { xs: '14px', md: '20px' },
                  color: 'rgb(7 7 6)',
                }}>
                  {skill.name}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* FAQ Section */}
      <div className="faq-container8">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      {faqData.map((faq, index) => (
        <div key={index} className="faq-row">
          <h3 className="faq-question">{faq.question}</h3>
          <p className="faq-answer">{faq.answer}</p>
        </div>
      ))}
    </div>
      
</>
  );
};

export default Ttp;
