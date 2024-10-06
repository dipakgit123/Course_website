import React from 'react'
import '../styles/NonTechnical.css'
import { Card } from 'react-bootstrap'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const NonTechnical = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
<div className='main_nontech'>
    <div className='nontech_div_1'>
        <div className='text-overlay'>
            <h1>Ignite Your Career: Fuel Your Ambition with Endless Possibilities</h1>
            <p>We believe in fostering a culture where every individual's success is intertwined with the success of our team as a whole.</p>
            <p>because when our associate succeed we all do.</p>
        </div>
    </div>
</div>

<h2 className='title_bootom'>See Opportunities for you....</h2>
<section className='section_container_non'>
<Card className='card_non'>      
      <Card.Body >
        <Card.Title className='card_non_title'><h2>Admission Counselor</h2></Card.Title>
      
        <Card.Text className='card_text_non'>
          <p><span>Role and Responsibilities:</span> Offering information on programs, assisting with application materials, providing guidance on admissions requirements, facilitating communication between applicants and academic departments. Serve as a liaison between the institution and applicants, offering support and answering questions to ensure a smooth admissions process.</p>
          <p><span>Education:</span>Master's degree in Education, Counseling, or a related field</p>
          <p><span>EmploymentType:</span> Full Time,Part Time</p>
          <p><span>Experience:</span>  2+ years</p>
          
        </Card.Text>
        <div className='card_btnn'>
          
        <Button className='btn_card_non' onClick={handleShow}>
        Apply
      </Button>
        </div>
      </Card.Body>
    </Card>

    <Card className='card_non'>      
      <Card.Body >
        <Card.Title className='card_non_title'><h2>Business Development Associate</h2></Card.Title>
      
        <Card.Text className='card_text_non'>
          <p><span>Role and Responsibilities:</span>Generate leads, contact potential clients, promote training offerings, develop relationships with corporate clients, negotiate partnerships, organize promotional events, gather feedback, and collaborate with internal teams.</p>
          <p><span>Education:</span>Bachelor's degree in Business Administration, Marketing, or a related field</p>
          <p><span>EmploymentType:</span> Full Time,Part Time</p>
          <p><span>Experience:</span>  2+ years</p>
          
        </Card.Text>
        <div className='card_btnn'>
          
        <Button className='btn_card_non' onClick={handleShow}>
        Apply
      </Button>
        </div>
      </Card.Body>
    </Card>

    <Card className='card_non'>      
      <Card.Body >
        <Card.Title className='card_non_title'><h2>Business Development Executive</h2></Card.Title>
      
        <Card.Text className='card_text_non'>
          <p><span>Role and Responsibilities:</span>Generate leads, nurture client relationships, expand the company's market reach, identify new business opportunities, pitch products or services to potential clients, conduct market research, collaborate with internal teams to tailor offerings to client needs and contribute to overall business growth.</p>
          <p><span>Education:</span>Master's degree in Business Administration, Marketing, or a related field</p>
          <p><span>EmploymentType:</span> Full Time,Part Time</p>
          <p><span>Experience:</span>  2+ years</p>
          
        </Card.Text>
        <div className='card_btnn'>
          
        <Button className='btn_card_non' onClick={handleShow}>
        Apply
      </Button>
        </div>
      </Card.Body>
    </Card>


    <Card className='card_non'>      
      <Card.Body >
        <Card.Title className='card_non_title'><h2>Front Desk Executive</h2></Card.Title>
      
        <Card.Text className='card_text_non'>
          <p><span>Role and Responsibilities:</span> Should possess strong customer service and communication skills, along with organizational abilities and attention to detail. They must present a professional demeanor, demonstrate problem-solving capabilities, and ideally have basic technical proficiency.</p>
          <p><span>Education:</span>Bachelor's degree in Hospitality, Business Administration, or a related field</p>
          <p><span>EmploymentType:</span> Full Time,Part Time</p>
          <p><span>Experience:</span>  2+ years</p>
          
        </Card.Text>
        <div className='card_btnn'>
          
        <Button className='btn_card_non' onClick={handleShow}>
        Apply
      </Button>
        </div>
      </Card.Body>
    </Card>

    <Card className='card_non'>      
      <Card.Body >
        <Card.Title className='card_non_title'><h2>Team Lead</h2></Card.Title>
      
        <Card.Text className='card_text_non'>
          <p><span>Role and Responsibilities:</span> As a Team Lead, you will be responsible for overseeing team members, participating in recruitment, providing training, managing performance, planning projects, allocating resources, solving problems, facilitating communication, ensuring quality, and promoting continuous improvement.</p>
          <p><span>Education:</span>Bachelor's degree in Management, Business Administration, or a related field</p>
          <p><span>EmploymentType:</span> Full Time</p>
          <p><span>Experience:</span>  2+ years</p>
          
        </Card.Text>
        <div className='card_btnn'>
          
        <Button className='btn_card_non' onClick={handleShow}>
        Apply
      </Button>
        </div>
      </Card.Body>
    </Card>

    <Card className='card_non'>      
      <Card.Body >
        <Card.Title className='card_non_title'><h2>Team Manager</h2></Card.Title>
      
        <Card.Text className='card_text_non'>
          <p><span>Role and Responsibilities:</span>Oversee teams, set goals, and ensure tasks are completed efficiently, provide guidance, resolve conflicts, evaluate performance, communicate with stakeholders, allocate resources, and drive organizational objectives while adhering to policies and regulations.</p>
          <p><span>Education:</span>Bachelor's degree in Management, Business Administration, or a related field</p>
          <p><span>EmploymentType:</span> Full Time</p>
          <p><span>Experience:</span>  2+ years</p>
          
        </Card.Text>
        <div className='card_btnn'>
          
        <Button className='btn_card_non' onClick={handleShow}>
        Apply
      </Button>
        </div>
      </Card.Body>
    </Card>

    <Card className='card_non'>      
      <Card.Body >
        <Card.Title className='card_non_title'><h2>HR Executive</h2></Card.Title>
      
        <Card.Text className='card_text_non'>
          <p><span>Role and Responsibilities:</span> Recruitment and onboarding of new employees, administering employee benefits and payroll, handle employee relations issues, performance management processes, and training and development initiatives, collaborate with other departments to support organizational objectives and foster a positive work environment.</p>
          <p><span>Education:</span>Bachelor's degree in Human Resources, Business Administration, or a related field</p>
          <p><span>EmploymentType:</span> Full Time</p>
          <p><span>Experience:</span>  2+ years</p>
          
        </Card.Text>
        <div className='card_btnn'>
          
        <Button className='btn_card_non' onClick={handleShow}>
        Apply
      </Button>
        </div>
      </Card.Body>
    </Card>

    <Card className='card_non'>      
      <Card.Body >
        <Card.Title className='card_non_title'><h2>HR and Placement Executive</h2></Card.Title>
      
        <Card.Text className='card_text_non'>
          <p><span>Role and Responsibilities:</span>  Manage human resources functions and placement activities, conduct interviews, coordinate placement activities for students, manage employee relations, administer benefits, cultivate relationships with industry partners to facilitate internships, job placements, and career development opportunities for students.</p>
          <p><span>Education:</span>Bachelor's degree in Human Resources, Business Administration, or a related field</p>
          <p><span>EmploymentType:</span> Full Time</p>
          <p><span>Experience:</span>  2+ years</p>
          
        </Card.Text>
        <div className='card_btnn'>
          
        <Button className='btn_card_non' onClick={handleShow}>
        Apply
      </Button>
        </div>
      </Card.Body>
    </Card>

    <Card className='card_non'>      
      <Card.Body >
        <Card.Title className='card_non_title'><h2>Training and Placement Officer</h2></Card.Title>
      
        <Card.Text className='card_text_non'>
          <p><span>Role and Responsibilities:</span> Coordinate training programs, workshops, and seminars to enhance skills and employability, establish relationships with industry partners to organize internships, job placements, and recruitment drives. Provide career counseling, resume assistance, and interview preparation support to individuals.</p>
          <p><span>Education:</span>Bachelor's degree in Human Resources, Business Administration, or a related field</p>
          <p><span>EmploymentType:</span> Full Time</p>
          <p><span>Experience:</span>  2+ years</p>
          
        </Card.Text>
        <div className='card_btnn'>
          
        <Button className='btn_card_non' onClick={handleShow}>
        Apply
      </Button>

        </div>
      </Card.Body>
    </Card>
</section>

<div className='section_container_non_2 '>
         <div className='non_col'>
          <img src='https://www.fusion-institute.com/_next/image?url=%2Fimg%2Fcareer%2FcareerImg.jpg&w=1080&q=75'/>
        </div>

        <div className='non_col'>
       <p>" Embrace each day with enthusiasm and dedication, knowing that your passion and commitment are the driving forces behind our shared success."</p> 
        </div>
        </div>

{/* form  */}
       
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Job Application.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Full Name"
                autoFocus
              />
            </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Phone Number"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Application For Interested Job</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Interested Job"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Work Experience</Form.Label>
            
                <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                <Dropdown.Item href="#/action-1">Less Than 1 Year+</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>

             
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
</>
  )
}

export default NonTechnical
