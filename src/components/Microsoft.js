import React from 'react';
import { Container, Grid, Typography, Button, Box,Card,Avatar } from '@mui/material';
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
      title: "Comprehensive Training Modules",
      description: "Delivering comprehensive training modules covering all aspects of Microsoft 365, including Word, Excel, PowerPoint, Outlook, Teams, and more, ensuring participants gain a thorough understanding of the entire suite."
    },
    {
      title: "Expert Microsoft Certified Trainers",
      description: "Led by Microsoft Certified Trainers with extensive experience in Microsoft 365, providing top-notch instruction, insights, and best practices for maximizing productivity and efficiency."
    },
    {
      title: "Hands-on Practical Learning",
      description: "Emphasizing hands-on practical learning experiences, allowing participants to apply their knowledge in real-world scenarios and gain confidence in using Microsoft 365 tools effectively."
    },
    {
      title: "Flexible Learning Options",
      description: "Offering flexible learning options, including in-person workshops, virtual training sessions, and self-paced online courses, to accommodate the diverse learning preferences and schedules of participants."
    },
    {
      title: "Proven Track Record",
      description: "Backed by a proven track record of successful training engagements, ensuring confidence in our ability to deliver high-quality Microsoft 365 training solutions tailored to your organization's needs."
    },
    {
      title: "Customized Training Tracks",
      description: "Offering customized training tracks tailored to different roles and skill levels within your organization, ensuring that participants receive training that is relevant to their specific job responsibilities."
    }
  ];

  const skills = [
    { name: 'OUTLOOK', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR54Aie9KiuOBXd90k_YHeWDwrHgzcyGLK0Ug&s' },   
    { name: 'YAMMER', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScN1OXpFXsCIhDoKKooPf__YgdidXhIf3V4A&s' },
    { name: 'TEAMS', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx0zX8H-iLSs7QT1EBOZbkLfuzEUWkyCQ4QA&s' },
    { name: 'WORD', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzzVwpirJaBId7JyDeH4_bld_DS_jakO1AjA&s' },
    { name: 'EXCEL', icon: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Microsoft_Excel_2013-2019_logo.svg' },
    { name: 'ONENOTE', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8hBpNlvH5VjePbjoGY__Kya8tgBDZqmDs4w&s' },
    { name: 'POWERPOINT', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbfmUjmJfkqx7PR1fthsv-DkMGlnQcrETvig&s' },
    { name: 'MICROSOFT 365', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ezFyuE9d_l69a6HPbqGqn2ulKuKqsziSLw&s' },
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

const Microsoft  = () => {
    return(
        <>
            <Box
      sx={{
        height: { xs: 'auto', md: '80vh' },
        backgroundImage:'url(https://png.pngtree.com/thumb_back/fh260/background/20210403/pngtree-simple-white-flat-vectors-with-diagonal-cuts-decorative-backdrops-for-your-image_597614.jpg)', 
        display: 'flex',
        alignItems: 'center',
        padding: { xs: '2rem', md: '0' },
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
              }} >
          Welcome to Our Microsoft Training Program
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
            sx={{width: '100%',borderRadius: 2,boxShadow: 3,height:{xs:'auto',md:'400px'}}} alt="Person working on code"
            src="https://www.fusion-institute.com/_next/image?url=%2Fimg%2Fcoporate%2Fmicro.jpg&w=1080&q=75"
          />
        </Grid>
      </Grid>
    </Container>
    </Box>

     {/* Company Names Logos */}

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


        {/* SECTION 2 */}
    <Box
      sx={{
        backgroundColor: '#f5f5f5', 
        padding: { xs: '3rem 1.5rem', md: '5rem 0' },
      }}
    >
<Container maxWidth="lg">
<Grid container alignItems="center" spacing={5}>
  <Grid item xs={12} md={6}>
    <Typography variant="h4" gutterBottom sx={{
                fontSize: { xs: '24px', md: '30px' },
                fontWeight: '700',
                color: 'rgb(7 7 6)',
              }}>
    Maximize Productivity with Our Microsoft 365 Training Program
    </Typography>
    <Typography variant="body1" paragraph sx={{
                fontSize: { xs: '16px', md: '18px' },
                color: 'rgb(7 7 6)',
              }} >
    In today's digital workplace, mastering Microsoft 365 is essential for maximizing productivity and collaboration. Our Microsoft 365 Training Program is designed to empower your team with the skills and knowledge needed to leverage the full potential of Microsoft's productivity suite. Through interactive workshops, we equip participants with practical skills to streamline workflows, enhance communication, and drive efficiency.
    </Typography>
    <Button variant="contained" sx={{
                color: 'rgb(254 254 254)',
                fontSize: { xs: '16px', md: '18px' },
                padding: { xs: '0.5rem 1rem', md: '0.75rem 2rem' },
                backgroundColor: 'rgb(219 173 77)',
                borderRadius: '0.375rem',
              }} >
      About us
    </Button>
  </Grid>
  <Grid item xs={12} md={6}>
    <Box component="img" sx={{width: '100%', borderRadius: 2, boxShadow: 3,height:{xs:'auto',md:'400px'}}}
      alt="Woman working with technology servers"
      src="https://www.fusion-institute.com/_next/image?url=%2Fimg%2Fcoporate%2Fcorporate3.jpg&w=640&q=75" 
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

    {/* SECTION 4 */}
    <Box sx={{ textAlign: 'center', margin: '20px' }}>
      <Typography variant="h5" sx={{
          fontSize: { xs: '24px', md: '30px' },
          fontWeight: '800',
          color: 'rgb(218 170 71)',
          paddingBottom: '1.5rem',
        }}  gutterBottom>
        Skills Covered In This Course
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item key={index} xs={12} md={1}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Avatar
                sx={{
                  bgcolor: 'white',
                  border:'5px solid #daaa47',
                  width: 60,
                  height: 60,
                  fontSize: '22px',
                  marginBottom: '10px',
                }}
              >
            <img src={skill.icon} alt={skill.name} style={{ width: '100%', height: '100%' }} />
              </Avatar>
              <Typography variant="subtitle1" sx={{
                  fontSize: { xs: '14px', md: '20px' },
                  color: 'rgb(7 7 6)',
                }}>{skill.name}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>

    {/* Questions and answers */}
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
    )
}
export default Microsoft
