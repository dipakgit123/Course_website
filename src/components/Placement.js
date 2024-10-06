import React, { useState, useEffect } from 'react';

import {Button,Card,CardActions,CardContent,Typography} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import "../styles/placement.css"
import { Link } from 'react-router-dom';

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

const Placement = () => {

  const counters = [
    { name: 'Students', initialValue: 1500, limit: 3000, speed: 1,symbol:'+',icon:<GroupRoundedIcon style={{fontSize:40}}/>},
    { name: 'Courses', initialValue: 0, limit: 20, speed: 300,symbol:"+",icon:<LibraryBooksIcon style={{fontSize:37}}/> },
    { name: 'Trainers', initialValue: 0, limit: 60, speed: 100,symbol:'+',icon:<CastForEducationIcon style={{fontSize:40}}/> },
    { name: 'Placement ', initialValue: 10, limit: 85, speed: 80,symbol:'%',icon:<SchoolIcon style={{fontSize:40}}/> },
  ];
 
  return (
    <div>
      <section className='place1'>
        <div className='right'>
            <div className='outfill'>
            <Button className='coursebtn1'>Course</Button>
            <Button className='coursebtn2'>Explore Our Quality Courses<KeyboardArrowRightIcon/></Button>
            </div>
            <h1>Build Awesome Career With <span>Fusion Institute.</span></h1>
            <p>We understand that landing a job in the competitive IT industry can be challenging,
               which is why we offer comprehensive training programs that prepare our students for
               the real-world demands of the industry.
            </p>
            <Link to="/demo">
              <Button>Book Seat <KeyboardArrowRightIcon/></Button>
            </Link>
            <Button className='coursebtn2'>Contact <KeyboardArrowRightIcon/></Button>
        </div>
        <div className='left'>
            <img src='https://www.fusion-institute.com/_next/image?url=%2Fimg%2Fcareer%2Fcareer2.jpg&w=640&q=75'alt='' />
        </div>
      </section>

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

      <section className='place3'>
        <h2>Hear From Our Students</h2>
        <p>Discover what our students have to say about their experience at our institute. 
           From transformative learning journeys to career advancements,
           our institute has left a lasting impact on countless individuals.
        </p>
      </section>

      <section className='place4'>
        <Card sx={{ maxWidth: 345 }} className='item'>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <img src='https://th.bing.com/th/id/OIP.l2zOVNXXnmJDjrSnCmoxlwHaFw?rs=1&pid=ImgDetMain' alt=''style={{height:'25px',width:"40px"}}/>
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Great Environment for Study, Good Teaching Staff. It is good for the Java Full Stack Development.
            Teaching Staff is very helpful,We learn data science & data analytics and other extra activities 
            from fusion software institute. Thank you.
            </Typography>
          </CardContent>
          <CardActions>
            <p  className="studn" size="small">~Yashodip Patil</p>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }} className='item'>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <img src='https://th.bing.com/th/id/OIP.l2zOVNXXnmJDjrSnCmoxlwHaFw?rs=1&pid=ImgDetMain'alt='' style={{height:'25px',width:"40px"}}/>
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Great Environment for Study, Good Teaching Staff. It is good for the Java Full Stack Development.
            Teaching Staff is very helpful,We learn data science & data analytics and other extra activities 
            from fusion software institute. Thank you.
            </Typography>
          </CardContent>
          <CardActions>
            <p  className="studn" size="small">~Harshal Patil</p>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }} className='item'>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <img src='https://th.bing.com/th/id/OIP.l2zOVNXXnmJDjrSnCmoxlwHaFw?rs=1&pid=ImgDetMain'alt='' style={{height:'25px',width:"40px"}}/>
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Great Environment for Study, Good Teaching Staff. It is good for the Java Full Stack Development.
            Teaching Staff is very helpful,We learn data science & data analytics and other extra activities 
            from fusion software institute. Thank you.
            </Typography>
          </CardContent>
          <CardActions>
            <p  className="studn" size="small">~Om Gosavi</p>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }} className='item'>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <img src='https://th.bing.com/th/id/OIP.l2zOVNXXnmJDjrSnCmoxlwHaFw?rs=1&pid=ImgDetMain' alt=''style={{height:'25px',width:"40px"}}/>
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Great Environment for Study, Good Teaching Staff. It is good for the Java Full Stack Development.
            Teaching Staff is very helpful,We learn data science & data analytics and other extra activities 
            from fusion software institute. Thank you.
            </Typography>
          </CardContent>
          <CardActions>
            <p  className="studn" size="small">~Karan Chavan</p>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }} className='item'>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <img src='https://th.bing.com/th/id/OIP.l2zOVNXXnmJDjrSnCmoxlwHaFw?rs=1&pid=ImgDetMain'alt='' style={{height:'25px',width:"40px"}}/>
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Great Environment for Study, Good Teaching Staff. It is good for the Java Full Stack Development.
            Teaching Staff is very helpful,We learn data science & data analytics and other extra activities 
            from fusion software institute. Thank you.
            </Typography>
          </CardContent>
          <CardActions>
            <p  className="studn" size="small">~Mohit Verma</p>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }} className='item'>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <img src='https://th.bing.com/th/id/OIP.l2zOVNXXnmJDjrSnCmoxlwHaFw?rs=1&pid=ImgDetMain'alt='' style={{height:'25px',width:"40px"}}/>
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Great Environment for Study, Good Teaching Staff. It is good for the Java Full Stack Development.
            Teaching Staff is very helpful,We learn data science & data analytics and other extra activities 
            from fusion software institute. Thank you.
            </Typography>
          </CardContent>
          <CardActions>
            <p  className="studn" size="small">~Aaditya Bhadane</p>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }} className='item'>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <img src='https://th.bing.com/th/id/OIP.l2zOVNXXnmJDjrSnCmoxlwHaFw?rs=1&pid=ImgDetMain' alt=''style={{height:'25px',width:"40px"}}/>
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Great Environment for Study, Good Teaching Staff. It is good for the Java Full Stack Development.
            Teaching Staff is very helpful,We learn data science & data analytics and other extra activities 
            from fusion software institute. Thank you.
            </Typography>
          </CardContent>
          <CardActions>
            <p  className="studn" size="small">~Namrata Ninghot</p>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }} className='item'>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <img src='https://th.bing.com/th/id/OIP.l2zOVNXXnmJDjrSnCmoxlwHaFw?rs=1&pid=ImgDetMain'alt='' style={{height:'25px',width:"40px"}}/>
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Great Environment for Study, Good Teaching Staff. It is good for the Java Full Stack Development.
            Teaching Staff is very helpful,We learn data science & data analytics and other extra activities 
            from fusion software institute. Thank you.
            </Typography>
          </CardContent>
          <CardActions>
            <p  className="studn" size="small">~Rashi Mahajan</p>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }} className='item'>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <img src='https://th.bing.com/th/id/OIP.l2zOVNXXnmJDjrSnCmoxlwHaFw?rs=1&pid=ImgDetMain'alt='' style={{height:'25px',width:"40px"}}/>
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Great Environment for Study, Good Teaching Staff. It is good for the Java Full Stack Development.
            Teaching Staff is very helpful,We learn data science & data analytics and other extra activities 
            from fusion software institute. Thank you.
            </Typography>
          </CardContent>
          <CardActions>
            <p  className="studn" size="small">~Sarita Gupta</p>
          </CardActions>
        </Card>
      </section>

      <section className='place5'>
        <div className='rig'>
          <h2>
          "At our institute, our dedicated team spends countless hours crafting top-tech educational experiences. 
          We're committed to providing the best possible learning opportunities for our students."
          </h2>
        </div>
        <div className='lef'>
        <Button className='connectbtn'>Connect With Us</Button>
        </div>
      </section>
  
    </div>
  )
}

export default Placement
