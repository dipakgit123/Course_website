import React from 'react';
import "../styles/About.css"
import { useState,useEffect } from 'react';
import { Card, CardContent, Typography, Grid, Box,CardMedia,Container,Button } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LaptopIcon from '@mui/icons-material/Laptop';
import PeopleIcon from '@mui/icons-material/People';
import ComputerIcon from '@mui/icons-material/Computer';
import DescriptionIcon from '@mui/icons-material/Description';
import HandshakeIcon from '@mui/icons-material/Handshake';
import GroupsIcon from '@mui/icons-material/Groups';
import WorkIcon from '@mui/icons-material/Work';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import LibraryBooksIcon  from '@mui/icons-material/LibraryBooks';
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import SchoolIcon from  '@mui/icons-material/School';
import { fetchCards,fetchLogos,fetchCards1,fetchCorporateTrainingData,fetchFeaturesData,fetchVisionMissionData } from '../services/api';



const About = () => {
  const [logos, setLogos] = useState([]);
  const [cards1, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cards, setCards1] = useState([]);
  const [corporateTraining, setCorporateTraining] = useState(null);
  const [features, setFeatures] = useState([]);
  const [vision, setVision] = useState('');
  const [mission, setMission] = useState('');
  const [visionImage, setVisionImage] = useState('');
  const [missionImage, setMissionImage] = useState('');

  //HIGHLIGHTS
  const Counter = ({ name, initialValue, limit, speed,symbol,icon}) => {
    const [count, setCount] = useState(initialValue);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCount(prevCount => {
          if (prevCount < limit) {
            return prevCount + 1;
          } else {
            clearInterval(interval);
            return prevCount;
          }
        });
      }, speed);
  
      return () => clearInterval(interval);
    }, [limit, speed]);
  
    return (
  
      <div>
        <section className='place2'>
        <p className='ico'>{icon}</p>
        <p className='sym'>{count}{symbol}</p>
        <h1 className='hig'>{name}</h1>
        </section>
      </div>
    );
  };
  
  const counters = [
    { name: 'Students', initialValue: 1500, limit: 3000, speed: 1,symbol:'+',icon:<GroupRoundedIcon style={{fontSize:40}}/>},
    { name: 'Courses', initialValue: 0, limit: 20, speed: 300,symbol:"+",icon:<LibraryBooksIcon style={{fontSize:37}}/> },
    { name: 'Trainers', initialValue: 0, limit: 60, speed: 100,symbol:'+',icon:<CastForEducationIcon style={{fontSize:40}}/> },
    { name: 'Placement ', initialValue: 10, limit: 85, speed: 80,symbol:'%',icon:<SchoolIcon style={{fontSize:40}}/> },
    ];


  //WHY TO CHooSE US
  useEffect(() => {
    const loadCards = async () => {
      const cardData = await fetchCards1();
      setCards1(cardData);
    };

    loadCards();
  }, []);

  //CORPORATE TRAINING
  useEffect(() => {
    fetchCorporateTrainingData()
      .then((data) => {
        setCorporateTraining(data);
      })
      .catch((error) => {
        console.error('Error fetching the corporate training data:', error);
      });
  }, []);

  //OUR KEY FEATURES
  useEffect(() => {
    fetchFeaturesData()
      .then((data) => { //then method is used to handle the response data when the data is received
        if (data) setFeatures(data);
      })
      .catch((error) => {
        console.error('Error fetching the features data:', error);
      });
  }, []);

  // LOGOS
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedLogos = await fetchLogos();
        const fetchedCards = await fetchCards();
        setLogos(fetchedLogos);
        setCards(fetchedCards);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  //VISION AND MISSION
  useEffect(() => {
    const getVisionMissionData = async () => {
      const data = await fetchVisionMissionData();  // Call the API function to fetch data
      if (data) {
        setVision(data.vision);
        setMission(data.mission);
        setVisionImage(data.visionImage);
        setMissionImage(data.missionImage);
      }
    };

    getVisionMissionData();
  }, []);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>{error}</Typography>;
  }

  const iconMap = {
    CheckCircleOutlineIcon: <CheckCircleOutlineIcon style={{ fontSize: 50, color: '#FFCC00' }} />,
    TrendingUpIcon: <TrendingUpIcon style={{ fontSize: 50, color: '#FFCC00' }} />,
    LaptopIcon: <LaptopIcon style={{ fontSize: 50, color: '#FFCC00' }} />
  };
  
  const iconMaps = {
    PeopleIcon: <PeopleIcon sx={{ fontSize: 40, color: '#FFD700' }} />,
    ComputerIcon: <ComputerIcon sx={{ fontSize: 40, color: '#FFD700' }} />,
    DescriptionIcon: <DescriptionIcon sx={{ fontSize: 40, color: '#FFD700' }} />,
    HandshakeIcon: <HandshakeIcon sx={{ fontSize: 40, color: '#FFD700' }} />,
    GroupsIcon: <GroupsIcon sx={{ fontSize: 40, color: '#FFD700' }} />,
    WorkIcon: <WorkIcon sx={{ fontSize: 40, color: '#FFD700' }} />
  };

      
    
      return (
        <>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        backgroundImage: 'url(https://img.freepik.com/free-photo/women-beauty-happy-young-woman-laughing-smiling-joyful-looking-away-left-side-your-promotion-text-advertisement-standing-t-shirt-against-white-background_176420-47524.jpg)',
        backgroundSize: 'cover',
        color: 'white',
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ maxWidth: '50%',marginLeft:'0px' }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{ fontSize: '30px', fontWeight: '800', color: 'rgb(218, 170, 71)' }}
          >
            Fusion Software Institute
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: '16px', color: 'rgb(7, 7, 6)' }}
          >
            At Fusion Software Institute, we're dedicated to shaping futures. With innovative programs, expert guidance, and a supportive community, we empower your journey in technology. Join us to unlock your potential and thrive in the digital age.
          </Typography>
          <Button
            variant="contained"
            sx={{ marginTop: 2, backgroundColor: '#ffc107', color: 'black' }}
          >
            Connect with us
          </Button>
        </Box>
      </Container>
    </Box>

        {/* // WHY CHOOSE US */}
        <Box sx={{ padding: '20px', textAlign: 'center' }}>
      <Typography variant="h4" sx={{marginBottom: '0.75rem', marginTop: '0.75rem', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', fontSize: '30px',fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em',color: 'rgb(218 170 71)'}}gutterBottom>
        WHY CHOOSE US?
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: '700', fontSize: '24px', backgroundClip: 'text', color: '#374151' }} gutterBottom>
        Become Certified And Job Ready For Corporate World!
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {cards.map((card) => (
          <Grid item xs={12} sm={6} md={4} key={card.id}>
            <Card
              sx={{
                minHeight: 200,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '20px',
                backgroundColor: '#030712',
                borderRadius: '15px',
                color: 'white'
              }}
            >
              {iconMap[card.icon]}
              <CardContent>
                <Typography variant="h6" sx={{ color: 'white', fontWeight: '600', fontSize: '24px' }} component="div" gutterBottom>
                  {card.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    marginTop: '1rem',
                    marginBottom: '0',
                    fontWeight: '400',
                    lineHeight: '1.625',
                    letterSpacing: '0.025rem',
                    color: 'white'
                  }}
                >
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>


    {/* What is Corporate Training? */}
    <Box sx={{ backgroundColor: 'black' }}>
      <Box sx={{ padding: '20px' }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ color: '#daaa47', fontWeight: '800', backgroundClip: 'text', fontSize: '30px' }}
            >
              {corporateTraining.heading}
            </Typography>

            {corporateTraining.sections.map((section, index) => (
              <Box sx={{ mb: 2 }} key={index}>
                <Typography
                  variant="h6"
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    lineHeight: '2rem',
                    color: 'rgb(254 254 254)',
                  }}
                  gutterBottom
                >
                  &raquo; {section.text}
                </Typography>
              </Box>
            ))}
          </Grid>

          <Grid item xs={12} md={6}>
            <img
              src={corporateTraining.imageUrl}
              alt="Corporate Training"
              style={{ width: '100%', borderRadius: '8px' }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>

    {/* OUR KEY FEATURES */}
    <Box sx={{ padding: '20px', textAlign: 'center', backgroundColor: '#F8F9FA' }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#D4AF37' }}>
        OUR KEY FEATURES
      </Typography>

      <Grid container spacing={3}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ minHeight: '150px', backgroundColor: 'black', color: '#fff', borderRadius: '5px' }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                  {iconMaps[feature.icon]} {/* Dynamically display icon based on the name */}
                </Box>
                <Typography variant="h6" component="div" sx={{ color: 'white', fontWeight: '600', fontSize: '24px' }}>
                  {feature.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>



        {/* ISO And AICTE */}

        <Box sx={{ backgroundColor: 'black', color: '#fff', minHeight: '60vh', p: 4 }}>
      <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ mb: 4 }}>
        {logos.map((logo, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
              <CardMedia
                component="img"
                image={logo.imageUrl}
                alt={logo.altText}
                sx={{ width: '50%', height: 'auto' }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3} justifyContent="center">
        {cards1.map((card, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ backgroundColor: '#444', color: '#fff', border: '2px solid white', borderRadius: '5px' }}>
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: '700', color: 'rgb(254 254 254)' }}
                  gutterBottom
                >
                  {card.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ marginTop: '1rem', color: 'rgb(209 213 219)', fontSize: '16px' }}
                >
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>

    {/* OUR MISSION AND VISION */}

    <Box sx={{ backgroundColor: "#121721", color: "#fdd835", minHeight: "100vh", padding: "20px",marginRight:"80px",marginLeft:"80px"}}>
      <Grid container spacing={4}>
        {/* Vision Section */}
        <Grid item xs={12} md={6}>
          <Card sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: "800",color:"#daaa47",fontSize:'30px',lineHeight:'2rem',marginTop:'50px' }}>
              OUR VISION
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ color: "rgb(254 254 254)",fontSize:'18px' }}>
                {vision}
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <CardMedia
            component="img"
             maxWidth="50%"
             height="auto"
            image={visionImage} 
            alt="Vision Image"
          />
        </Grid>

        {/* Mission Section */}
        <Grid item xs={12} md={6}>
          <CardMedia
            component="img"
            maxWidth="50%"
            height="auto"
            image={missionImage}
            alt="Mission Image"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: "800",color:"#daaa47",fontSize:'30px',lineHeight:'2rem',marginTop:'50px' }} >
              OUR MISSION
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ color: "rgb(254 254 254)",fontSize:'18px' }}>
                {mission}
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Box>

        {/* HIGHLIGHTS */}
        <section>
      <div className="App">
      <h2>Highlights</h2>
      {counters.map((counter, index) => (
        <Counter
          key={index}
          name={counter.name}
          initialValue={counter.initialValue}
          limit={counter.limit}
          speed={counter.speed}
          symbol={counter.symbol}
          icon={counter.icon}
        />
      ))}
    </div>
      </section>
    </>
  )
}

export default About
