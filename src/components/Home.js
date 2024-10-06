import { useState,useEffect } from "react";
import React from 'react';
import ReactPlayer from "react-player";
import "../styles/Home.css"
import { Container, Row, Col, Image,Carousel, CarouselItem,Button,Modal, } from 'react-bootstrap';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import LibraryBooksIcon  from '@mui/icons-material/LibraryBooks';
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import SchoolIcon from  '@mui/icons-material/School';


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
  { name: 'Students', initialValue: 2000, limit: 3000, speed: 1,symbol:'+',icon:<GroupRoundedIcon style={{fontSize:40}}/>},
  { name: 'Courses', initialValue: 0, limit: 20, speed: 300,symbol:"+",icon:<LibraryBooksIcon style={{fontSize:37}}/> },
  { name: 'Trainers', initialValue: 0, limit: 60, speed: 100,symbol:'+',icon:<CastForEducationIcon style={{fontSize:40}}/> },
  { name: 'Placement ', initialValue: 10, limit: 85, speed: 80,symbol:'%',icon:<SchoolIcon style={{fontSize:40}}/> },
  ];


const Home = () => {

  const [showModal, setShowModal] = useState(false); // Controls modal visibility
  const [isPlaying, setIsPlaying] = useState(false); // Controls video play state
  const [videoIndex, setVideoIndex] = useState(0); // Track current video index
  
  

  const videoThumbnails = [
    {
      url: 'https://www.youtube.com/watch?v=RD4JPW6mKaU',
      thumbnail: 'https://img.youtube.com/vi/RD4JPW6mKaU/0.jpg',
    },
    {
      url: 'https://www.youtube.com/watch?v=LRaU4rEna8s',
      thumbnail: 'https://img.youtube.com/vi/LRaU4rEna8s/0.jpg',
    },
    {
      url: 'https://www.youtube.com/watch?v=1Z3RrRYIoVs',
      thumbnail: 'https://img.youtube.com/vi/1Z3RrRYIoVs/0.jpg',
    },
  ];

  useEffect(() => {
    let timeoutId;
    if ( !showModal) {
      timeoutId = setTimeout(() => {
        setVideoIndex((prevIndex) => (prevIndex + 1) % videoThumbnails.length);
      }, 5000);
    }
    return () => clearTimeout(timeoutId);
  }, [showModal, videoThumbnails.length]);

  const handleOpenModal = () => {
    setShowModal(true);
    setIsPlaying(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setIsPlaying(false);
  };

  const handleClick = (e) => {
    const answer = e.target.nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  };


  return (
    <>

<Container fluid className="p-5">
      <Carousel indicators={false}
        prevIcon={<i className="fas fa-chevron-left fa-sm text-white" style={{ fontSize: '24px',  bottom: '0',borderRadius: '50%', backgroundColor: 'white', padding: '10px', border: '2px solid black'}}></i>} 
        nextIcon={<i className="fas fa-chevron-right fa-sm text-white" style={{ fontSize: '24px', bottom: '0',borderRadius: '50%', backgroundColor: 'white', padding: '10px', border: '2px solid black' }}></i>}>
        <Carousel.Item>
          <Row className="align-items-center">
            <Col xs={12} md={6}>
              <Image 
                src="https://www.fusion-institute.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcoming.5fb75d9b.png&w=1080&q=100" 
                alt="Career" 
                fluid
                className="w-100"
              />
            </Col>
            <Col xs={12} md={6}>
              <h2 className='Gaurav'>Brighten Your Career at</h2>
              <h1 className='Gaurav1'>Fusion Software Institute</h1>
              <p className='Gaurav2'>15,000 careers advanced through 50+ live classes every month, with 85% reporting career benefits such as promotion or securing a new job.</p>
              <p className='Gauarv3'>Learn Without Limits Brighten Your Career</p>
              <p className='Gaurav2'>"Established in 2017. Trusted by over 3,000+ students."</p>
              <blockquote  className="blockquote">
              <p>Courses for Freshers & Professionals Alike: Building Careers Together!</p>
              </blockquote>
            </Col>
          </Row>
        </Carousel.Item>

        {/* Second Slide */}
        <CarouselItem>
        <Row className="align-items-center">
            <Col xs={12} md={6}>
            <div>
      {videoThumbnails.length > 0 && (
        <div style={{ margin: '10px' }}>
          <img
            src={videoThumbnails[videoIndex].thumbnail} // Access thumbnail safely
            alt={`Video ${videoIndex + 1}`}
            style={{ cursor: 'pointer', width: '600px', height: '300px' }} // Adjust size as needed
            onClick={handleOpenModal} // Open modal when thumbnail is clicked
          />
        </div>
      )}

      {/* Modal for video player */}
      <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Watch Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ReactPlayer
            url={videoThumbnails[videoIndex].url}
            playing={isPlaying} // Start playing when modal opens
            controls={true} // Show player controls
            width="100%" // Full width in modal
            height="400px" // Adjust height as per your requirement
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>


            </Col>
            <Col xs={12} md={6}>
            <div className='coursesSlide0'>
              <h2 className='Mayur'>Book Our Free Demo Class</h2>
              <p className='Mayur1'>Leave  your details and we will get back to you within 24 hours.</p>
              <h3 className='Mayur2'>Our Courses</h3>
              <div className='coursesSlide1'>
                <ul>
                  <li>Data Science</li>
                  <li>Microsoft Azure</li>
                  <li>React JS</li>
                  <li>SAP</li>
                </ul>
                <ul>
                  <li>Data Analytics</li>
                  <li>AWS with DevOps</li>
                  <li>RPA</li>
                  <li>Dot Net Development</li>
                </ul>
                <ul>
                  <li>Java Development</li>
                  <li>Software Testing</li>
                  <li>SAP</li>
                  <li>Power BI</li>
                </ul>
              </div>
              <button className='coursesSlide2'>Book Demo</button>
              </div>
            </Col>
          </Row>
        </CarouselItem>
      </Carousel>
    </Container>

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

    {/* ABOUT US SECTION */}

    <div className="about-container">
        <div className="about-text">
          <h1>About us</h1>
          <p>
            Welcome to Fusion Software Training Institute, where innovation meets excellence. Our mission is to empower individuals and professionals with cutting-edge skills in software development and technology. With a curriculum designed by industry experts, we offer hands-on training that prepares you for real-world challenges. Our dedicated instructors provide personalized mentorship, ensuring you gain both technical and soft skills crucial for career success. Join our vibrant community of tech enthusiasts and leverage our state-of-the-art facilities to unlock your potential and transform your career. Fusion is your gateway to excelling in the dynamic tech industry. Together, we shape the future of technology.
          </p>
        </div>
        <div className="about-image">
          <img src="https://www.fusion-institute.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FaboutUsAtHome.78d159cd.png&w=2048&q=75" alt="About Us"/>
        </div>
      </div>

      {/* why to choose us */}
      <div className="why-choose-us-container">
      <h2 className="title">Why To Choose Us?</h2>
      <p className="subtitle8">"Transform Your Career with Fusion Software Institute's Expert-Led Courses"</p>
      <div className="card-container">
        <div className="card">
          <div className="card-icon">
            <img src="https://www.fusion-institute.com/_next/static/media/resumeBuilding.8d9a37b8.svg" alt="Resume Icon" />
          </div>
          <h3 className='Resume'>Resume Building</h3>
          <p className='Resume1'>We offer personalized resume building services, helping you craft impactful resumes that highlight your strengths and achievements. Stand out to employers with our expert guidance and support.</p>
        </div>

        <div className="card">
          <div className="card-icon">
            <img src="https://www.fusion-institute.com/_next/static/media/careerGuidance.3c2815a8.svg" alt="Career Icon" />
          </div>
          <h3 className='Resume'>Career Guidance</h3>
          <p className='Resume1'>We provide individualized career guidance, offering insights and strategies to navigate your professional journey successfully. Let us support you in achieving your career aspirations with our tailored advice.</p>
        </div>

        <div className="card">
          <div className="card-icon">
            <img src="https://www.fusion-institute.com/_next/static/media/interviewPrep.46c2206a.svg" alt="Career Icon" />
          </div>
          <h3 className='Resume'>Interview Preparation</h3>
          <p className='Resume1'>We provide intensive interview preparation, equipping you with skills and confidence for success in any professional setting. Choose our tailored programs for career-defining results.</p>
        </div>

        <div className="card">
          <div className="card-icon">
            <img src="https://www.fusion-institute.com/_next/static/media/skillDevelopment.c5a58785.svg" alt="Skill Icon" />
          </div>
          <h3 className='Resume'>Skill Development</h3>
          <p className='Resume1'>We prioritize skill development, offering a diverse range of courses and resources to enhance your expertise. Elevate your capabilities and unlock new opportunities with our dynamic skill-building programs.</p>
        </div>
      </div>
    </div>

    {/* TESTIMONALS */}
    <div className="testimonials-container">
      <h1>India's Best Professional Software Training Institute</h1>
      <p className='subtitle8'>Our Success lies in our student's Success Stories. Read to those who have experienced the Magic...</p>
      
      <div className="testimonials">
        <div className="testimonial-card">
          <p className="testimonial-text">
            I recently completed the software testing course at Fusion Software Institute, and it was excellent. The curriculum was comprehensive, covering both manual and automated testing techniques. The instructors were knowledgeable and provided hands-on training, making complex concepts easy to understand. Overall, it was a highly valuable experience that significantly enhanced my skills.
          </p>
          <div className="testimonial-footer">
            <span className="stars">★★★★★</span>
            <span className="author">- Ram Bacchewad</span>
          </div>
        </div>

        <div className="testimonial-card">
          <p className="testimonial-text">
          Fusion Software Institute is best IT training instuite i personally enrolled for Java course i got to learn lot the faculty are very high skilled give you full guidence to get devlope you skillset . the training is based on practical knowledge. it help you to get placemnet in company i really recomneded you to join the training.Thanks to Dinesh Sir for these wonderful Training.
          </p>
          <div className="testimonial-footer">
            <span className="stars">★★★★★</span>
            <span className="author">- Harshal Patil</span>
          </div>
        </div>

        <div className="testimonial-card">
          <p className="testimonial-text">
          Great Environment for Study, Good Teaching Staff. It is good for the Java Full Stack Development. Teaching Staff is very helpful. We learn data science & data analytics and other extra activities from fusion software institute.Thank you
          </p>
          <div className="testimonial-footer">
            <span className="stars">★★★★★</span>
            <span className="author">- Yashoda Patil</span>
          </div>
        </div>

        <div className="testimonial-card">
          <p className="testimonial-text">
            To share my experience with Fusion Software Institute its very amazing. As the part of this institute I have gained so much knowledge. The teaching staff is very well, They have high level of knowledge about Java Full Stack Development course and their nature is very helpful.
          </p>
          <div className="testimonial-footer">
            <span className="stars">★★★★★</span>
            <span className="author">- Amit Adte</span>
          </div>
        </div>
      </div>
    </div>

    {/* POPULAR COURSES */}
    <div className="popular-courses">
      <h2 className="title8">Popular Courses</h2>
      <p className="subtitle8">"Elevate Your Skills with Our Expert-Curated, Industry-Leading Courses"</p>

      <div className="course-list">
        {/* Course 1 */}
        <div className="course-card">
          <div className="badge">Popular</div>
          <img src="https://www.fsm.ac.in/blog/wp-content/uploads/2022/07/FUqHEVVUsAAbZB0.jpg" alt="Data Science" className="course-image" />
          <div className="course-info">
            <h3>Data Science</h3>
            <p>Dive into Artificial Intelligence and ML to analyze data, make predictions, and innovate decision-making. Learn from experts, work on real projects.</p>
            <div className="course-meta">
              <span>👥 480 Learners</span>
              <span className="stars">★★★★★</span>
            </div>
          </div>
        </div>

        {/* Course 2 */}
        <div className="course-card">
          <div className="badge">Popular</div>
          <img src="https://cdn.prod.website-files.com/60c912417dc3bac5c9fa2616/61cb84e73ab5cb48cbb1c342_DevOps%20on%20AWS%20(1)%20(1)%20(1).png" alt="AWS with DevOps" className="course-image" />
          <div className="course-info">
            <h3>AWS with DevOps</h3>
            <p>Master Python for versatile software development, data analysis, and automation. Learn fundamentals, work on real projects, unleash its potential.</p>
            <div className="course-meta">
              <span>👥 980 Learners</span>
              <span className="stars">★★★★★</span>
            </div>
          </div>
        </div>

        {/* Course 3 */}
        <div className="course-card">
          <div className="badge">Popular</div>
          <img src="https://www.softwebsolutions.com/wp-content/uploads/2022/09/Microsoft-azure-cloud-migration.jpg" alt="Microsoft Azure" className="course-image" />
          <div className="course-info">
            <h3>Microsoft Azure</h3>
            <p>Unlock the potential of Microsoft Azure to design, deploy, and manage robust cloud solutions using cutting-edge tools and services.</p>
            <div className="course-meta">
              <span>👥 480 Learners</span>
              <span className="stars">★★★★★</span>
            </div>
          </div>
        </div>

        {/* Course 4 */}
        <div className="course-card">
          <div className="badge">Popular</div>
          <img src="https://www.jrebel.com/sites/default/files/image/2020-05/image-blog-revel-top-java-tools.jpg" alt="Java Development" className="course-image" />
          <div className="course-info">
            <h3>Java Development</h3>
            <p>Master Full Stack Java Development to build dynamic, scalable web applications using Java, Spring Boot, and front-end technologies like React.</p>
            <div className="course-meta">
              <span>👥 760 Learners</span>
              <span className="stars">★★★★★</span>
            </div>
          </div>
        </div>
      </div>

      <button className="browse-button">Browse All Courses</button>
    </div>

    {/* DISCOVER */}
    <div className="container-discover">
      <div className="specialties">
        <div className="specialty">
        <h1 className='Pawan'>Discover Our Core Expertise</h1>
        <p className='Pawan1'>
          Explore the unique strengths and specialized programs that set us apart
          in the world of software and technology education, designed to equip you
          with the skills and knowledge needed to excel in today's dynamic tech landscape.
        </p>
          <h2>Our Specialties:</h2>
          <ul>
            <li>
              <span className="icon">💻</span>
              <strong>Comprehensive Software Development Courses</strong>
              <p>Learn from basic to advanced levels of software engineering, programming languages, and application development.</p>
            </li>
            <li>
              <span className="icon">📊</span>
              <strong>Expert-Led Data Science and AI Programs</strong>
              <p>Gain hands-on experience with machine learning, artificial intelligence, and data analytics guided by industry experts.</p>
            </li>
          </ul>
        </div>

        <div className="specialty">
          <ul>
            <li>
              <span className="icon">🔐</span>
              <strong>Innovative Cybersecurity Training</strong>
              <p>Stay ahead of cyber threats with our comprehensive cybersecurity curriculum, focusing on practical skills and knowledge.</p>
            </li>
            <li>
              <span className="icon">🏢</span>
              <strong>Customized Corporate Training Solutions</strong>
              <p>Tailor-made training programs for businesses to enhance their teams' technical skills and keep them up-to-date with the latest technologies.</p>
            </li>
            <li>
              <span className="icon">🔨</span>
              <strong>Robust Project-Based Learning Approach</strong>
              <p>Engage in real-world projects and collaborative learning to build a strong portfolio and gain practical experience.</p>
            </li>
            <li>
              <span className="icon">🗄️</span>
              <strong>Advanced Database Management</strong>
              <p>Master the skills of database design, development, and administration to effectively manage and utilize data.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>


     {/* FREQUENTLY ASKED QUESTION */}
     <div className="faq-container">
      <h1 className="bhushan">Frequently Asked Questions</h1>

      <div className="faq">
        <div className="question" onClick={handleClick}>
          What courses do you offer at Fusion Software Institute?
        </div>
        <div className="answer">
          Fusion Software Institute offers a wide range of courses in software development, including but not limited to programming languages such as Java, Python, JavaScript, and frameworks like React, Angular, and Node.js. Additionally, we provide courses in database management, web development, mobile app development, software engineering principles, and more. You can explore our course catalog on our website for detailed information.
        </div>
      </div>

      <div className="faq">
        <div className="question" onClick={handleClick}>
          How do I enroll in a course at Fusion Software Institute?
        </div>
        <div className="answer">
          You can enroll in a course by visiting our website, selecting your desired course, and following the registration process. Once registered, you will receive a confirmation email with further details.
        </div>
      </div>

      <div className="faq">
        <div className="question" onClick={handleClick}>
          Do you offer any online or remote learning options?
        </div>
        <div className="answer">
          Yes, we offer a variety of online and remote learning options to suit your schedule. Visit our website for more information on the available courses.
        </div>
      </div>

      <div className="faq">
        <div className="question" onClick={handleClick}>
        What sets Fusion Software Institute apart from other educational institutions?
        </div>
        <div className="answer">
        At Fusion Software Institute, we pride ourselves on our industry-relevant curriculum, experienced instructors, hands-on learning approach, and personalized attention to each student. We are committed to helping our students succeed in their careers by providing high-quality education and support every step of the way.
        </div>
      </div>

      <div className="faq">
        <div className="question" onClick={handleClick}>
        What career opportunities are available to graduates of Fusion Software Institute?
        </div>
        <div className="answer">
        Graduates of Fusion Software Institute are well-equipped to pursue a wide range of career opportunities in the tech industry, including roles such as software developer, web developer, data analyst, cybersecurity specialist, and more. Our career services team provides job placement assistance, networking opportunities, and career guidance to help graduates launch successful careers in their chosen field.
        </div>
      </div>

      <div className="faq">
        <div className="question" onClick={handleClick}>
        Is financial aid available for students and with what can we assist?
        </div>
        <div className="answer">
        Yes, we offer various financial aid options, including scholarships, grants, and tuition assistance programs, to eligible students. Our admissions team can provide more information on available financial aid opportunities and assist you in applying for assistance
        </div>
      </div>
    </div>

      {/* STICKY OBJECTS */}

    {/* <div className="fixed-icons">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div> */}
    </> 
  );
};
export default Home;
