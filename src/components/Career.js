import React from 'react'
import '../styles/Career.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Career = () => {
  return (
    <>
      <div className='first_div'>
       <div className='inside_content'>
        <h1> <span>Join Our Dynamic Team</span>
        <br></br>
       <span> Today!</span></h1>
       <br></br>
        <div className='inside_content_1'>
          <h2>Be Part of a Collaborative Environment</h2>
        <h2>Focused on Growth and Innovation.</h2></div>
        <br></br>
        <button className='carrer_btn_1'>Explore Opportunities</button>
        </div> 
        </div>
<br></br>
     <div className='section_container_1 '>
         <div className='carrer_col'>
          <img src='https://www.fusion-institute.com/_next/image?url=%2Fimg%2Fcareer%2Fcareer.jpg&w=640&q=75'/>
        </div>
        <div className='carrer_col_2'>
          <h3 >Your career awaits</h3>
          <div className='career_div_1'>Embark on a journey of growth and fulfillment with us! Join our dynamic team where innovation thrives, collaboration flourishes, and opportunities abound. We're committed to nurturing your potential, fostering creativity, and empowering you to make a meaningful impact.</div>
          <h5 >Seize the opportunity today!</h5>
        </div>
        </div>
       
      <section className='section_container_2'>
       <h2 >Life @ Fusion Software Institute</h2>
       <hr></hr>
       <section  className='section_container_3'>
       <div className='carrer_col_3'>
        <h4>Benefit's</h4>
        <div>"We prioritizes the well-being and security of its workforce. Flexible work arrangements and professional development opportunities further enhance employee satisfaction and growth."</div>
        <h4>Flexible work</h4>
        <div>"Fusion Software embraces flexible work arrangements, fostering a dynamic environment where employees can balance work and life commitments."</div>
       </div>

       <div className='carrer_col_4'>
        <img src='https://www.fusion-institute.com/_next/image?url=%2Fimg%2Fcareer%2Fcareer2.jpg&w=640&q=75'></img>
       </div>
       </section>
       <hr></hr>
       <section  className='section_container_4'> 
       <div className='carrer_col_5'>
        <img src='https://www.fusion-institute.com/_next/image?url=%2Fimg%2Fcareer%2Fcareer1.jpg&w=640&q=75'></img>
       </div>
       <div className='carrer_col_6'>
       <h4>Culture</h4>
       <div>
       "We thrive on collaboration, innovation, and inclusivity, fostering an environment where every voice is heard and valued."
       </div>
       <h4>Career Development</h4>
       <div>"Offering tailored paths for growth through mentorship, training programs, and opportunities for advancement. we empower our team to grow professionally, fostering innovation and excellence in software solutions. "</div>
       </div> 
       </section>
       </section>

       <section className='section_container_5'>
<h2 className='title_carrer_bootom'>See our areas of Work & Opportunities for you</h2>
<div className='line_carrer'></div>

<section className='section_container_6 ' >

<Card className='card_carrer'>      
      <Card.Body >
        <Card.Title className='card_carrer_title'><h2>Java Trainer</h2></Card.Title>
        <Card.Text style={{textAlign:'justify'}}>
        As a Java Trainer, you will play a pivotal role in delivering comprehensive and engaging training sessions to aspiring Java developers and professionals. Your primary responsibility will be to impart knowledge, share industry best practices, and equip participants with the skills needed to excel in Java development.
        </Card.Text>
        <Card.Text className='card_text_carrer'>
          <p><span>EmploymentType:</span> Full Time,Part Time</p>
          <p><span>Experience:</span>  4+ years</p>
          <p><span>Education:</span> B.Tech/B.E. in Electronics Telecommunication,Computers, Any Graduate</p>
        </Card.Text>
        <div className='card_btn'>
          
        <Button className='btn_card_career'>Apply</Button>
        </div>
      </Card.Body>
    </Card>

    <Card className='card_carrer'>      
      <Card.Body >
        <Card.Title className='card_carrer_title'><h2>React Js Trainer</h2></Card.Title>
        <Card.Text style={{textAlign:'justify'}}>
        We are seeking an experienced React.js Trainer to join our dynamic team. As a React.js Trainer, you will be responsible for delivering high-quality training sessions and workshops focused on React.js fundamentals and advanced concepts. You will play a key role in shaping the skills and capabilities of aspiring developers and seasoned professionals looking to enhance their expertise in React.js.
        </Card.Text>
        <Card.Text className='card_text_carrer'>
          <p><span>EmploymentType:</span> Full Time,Part Time</p>
          <p><span>Experience:</span>  4+ years</p>
          <p><span>Education:</span> B.Tech/B.E. in Electronics Telecommunication,Computers, Any Graduate</p>
        </Card.Text>
        <div className='card_btn'>
          
        <Button className='btn_card_career'>Apply</Button>
        </div>
      </Card.Body>
    </Card>

    <Card className='card_carrer'>      
      <Card.Body >
        <Card.Title className='card_carrer_title'><h2>Salesforce Trainer</h2></Card.Title>
        <Card.Text style={{textAlign:'justify'}}>
        We are seeking a skilled and experienced Salesforce Trainer to join our team. As a Salesforce Trainer, you will be responsible for designing, developing, and delivering training programs for our employees to enhance their Salesforce knowledge and skills. You will work closely with various departments to understand their specific training needs and create tailored programs accordingly.
        </Card.Text>
        <Card.Text className='card_text_carrer'>
          <p><span>EmploymentType:</span> Full Time,Part Time</p>
          <p><span>Experience:</span>  4+ years</p>
          <p><span>Education:</span> B.Tech/B.E. in Electronics Telecommunication,Computers, Any Graduate</p>
        </Card.Text>
        <div className='card_btn'>
          
        <Button className='btn_card_career'>Apply</Button>
        </div>
      </Card.Body>
    </Card>

    <Card className='card_carrer'>      
      <Card.Body >
        <Card.Title className='card_carrer_title'><h2>Data Science Trainer</h2></Card.Title>
        <Card.Text style={{textAlign:'justify'}}>
        We are seeking a passionate and experienced Data Science Trainer to develop and deliver comprehensive training programs in data science and related fields. As a Data Science Trainer, you will play a crucial role in shaping the next generation of data scientists by imparting industry-relevant knowledge and skills.
        </Card.Text>
        <Card.Text className='card_text_carrer'>
          <p><span>EmploymentType:</span> Full Time,Part Time</p>
          <p><span>Experience:</span>  4+ years</p>
          <p><span>Education:</span> B.Tech/B.E. in Electronics Telecommunication,Computers, Any Graduate</p>
        </Card.Text>
        <div className='card_btn'>
          
        <Button className='btn_card_career'>Apply</Button>
        </div>
      </Card.Body>
    </Card>

    <Card className='card_carrer'>      
      <Card.Body >
        <Card.Title className='card_carrer_title'><h2>AWS Trainer</h2></Card.Title>
        <Card.Text style={{textAlign:'justify'}}>
        We are seeking an experienced AWS Trainer to join our team and deliver high-quality training sessions on AWS cloud services. As an AWS Trainer, you will be responsible for designing, developing, and delivering training programs that enable participants to acquire AWS skills and certifications.
        </Card.Text>
        <Card.Text className='card_text_carrer'>
          <p><span>EmploymentType:</span> Full Time,Part Time</p>
          <p><span>Experience:</span>  4+ years</p>
          <p><span>Education:</span> B.Tech/B.E. in Electronics Telecommunication,Computers, Any Graduate</p>
        </Card.Text>
        <div className='card_btn'>
          
        <Button className='btn_card_career'>Apply</Button>
        </div>
      </Card.Body>
    </Card>

    <Card className='card_carrer'>      
      <Card.Body >
        <Card.Title className='card_carrer_title'><h2>Power Bi Trainer</h2></Card.Title>
        <Card.Text style={{textAlign:'justify'}}>
        Looking for a knowledgeable and passionate Power BI Trainer to design and deliver engaging training programs to our clients and internal teams. The ideal candidate will have hands-on experience with Power BI and a strong ability to communicate complex concepts effectively.        </Card.Text>
        <Card.Text className='card_text_carrer'>
          <p><span>EmploymentType:</span> Full Time,Part Time</p>
          <p><span>Experience:</span>  4+ years</p>
          <p><span>Education:</span> B.Tech/B.E. in Electronics Telecommunication,Computers, Any Graduate</p>
        </Card.Text>
        <div className='card_btn'>
          
        <Button className='btn_card_career'>Apply</Button>
        </div>
      </Card.Body>
    </Card>

    <Card className='card_carrer'>      
      <Card.Body >
        <Card.Title className='card_carrer_title'><h2>.Net Trainer</h2></Card.Title>
        <Card.Text style={{textAlign:'justify'}}>
        We are seeking a skilled and experienced .NET Trainer to join our team. As a .NET Trainer, you will be responsible for designing and delivering training programs on .NET technologies to our employees, clients, and external participants. The ideal candidate should have a strong background in .NET development and a passion for teaching and mentoring others. 
        </Card.Text>
               <Card.Text className='card_text_carrer'>
          <p><span>EmploymentType:</span> Full Time,Part Time</p>
          <p><span>Experience:</span>  4+ years</p>
          <p><span>Education:</span> B.Tech/B.E. in Electronics Telecommunication,Computers, Any Graduate</p>
        </Card.Text>
        <div className='card_btn'>
          
        <Button className='btn_card_career'>Apply</Button>
        </div>
      </Card.Body>
    </Card>

    <Card className='card_carrer'>      
      <Card.Body >
        <Card.Title className='card_carrer_title'><h2>Data Analytics Trainer</h2></Card.Title>
        <Card.Text style={{textAlign:'justify'}}>
        As a Data Analytics Trainer, you will be responsible for designing and delivering training programs that enhance the skills and capabilities of individuals in the field of data analytics. You will play a pivotal role in educating and empowering our workforce or clients to leverage data effectively and make informed business decisions.
                </Card.Text>
               <Card.Text className='card_text_carrer'>
          <p><span>EmploymentType:</span> Full Time,Part Time</p>
          <p><span>Experience:</span>  4+ years</p>
          <p><span>Education:</span> B.Tech/B.E. in Electronics Telecommunication,Computers, Any Graduate</p>
        </Card.Text>
        <div className='card_btn'>
          
        <Button className='btn_card_career'>Apply</Button>
        </div>
      </Card.Body>
    </Card>

    <Card className='card_carrer'>      
      <Card.Body >
        <Card.Title className='card_carrer_title'><h2>Microsoft Azure Trainer</h2></Card.Title>
        <Card.Text style={{textAlign:'justify'}}>
        We are seeking a passionate and experienced Microsoft Azure Trainer to join our dynamic team. As a Microsoft Azure Trainer, you will be responsible for designing, developing, and delivering engaging training sessions and workshops on Microsoft Azure cloud services. This role requires a deep understanding of Azure technologies and a proven ability to effectively convey complex concepts to diverse audiences.
                        </Card.Text>
               <Card.Text className='card_text_carrer'>
          <p><span>EmploymentType:</span> Full Time,Part Time</p>
          <p><span>Experience:</span>  4+ years</p>
          <p><span>Education:</span> B.Tech/B.E. in Electronics Telecommunication,Computers, Any Graduate</p>
        </Card.Text>
        <div className='card_btn'>
          
        <Button className='btn_card_career'>Apply</Button>
        </div>
      </Card.Body>
    </Card>

    <Card className='card_carrer'>      
      <Card.Body >
        <Card.Title className='card_carrer_title'><h2>FICO-MM Trainer</h2></Card.Title>
        <Card.Text style={{textAlign:'justify'}}>
        As a FICO-MM Trainer, you will be responsible for providing comprehensive training on SAP FICO (Financial Accounting and Controlling) and MM (Materials Management) modules to our employees. Your role will involve designing training materials, conducting training sessions, and assessing the effectiveness of training programs. The ideal candidate will have a strong understanding of SAP FICO and MM modules along with excellent communication and teaching skills.
           </Card.Text>
               <Card.Text className='card_text_carrer'>
          <p><span>EmploymentType:</span> Full Time,Part Time</p>
          <p><span>Experience:</span>  4+ years</p>
          <p><span>Education:</span> B.Tech/B.E. in Electronics Telecommunication,Computers, Any Graduate</p>
        </Card.Text>
        <div className='card_btn'>
          
        <Button className='btn_card_career'>Apply</Button>
        </div>
      </Card.Body>
    </Card>

    
    <Card className='card_carrer'>      
      <Card.Body >
        <Card.Title className='card_carrer_title'><h2>SAP-MM Trainer</h2></Card.Title>
        <Card.Text style={{textAlign:'justify'}}>
        We are seeking an experienced SAP-MM (Materials Management) Trainer to join our team. The ideal candidate will have a strong background in SAP-MM modules and a passion for teaching and developing others. As an SAP-MM Trainer, you will be responsible for designing, developing, and delivering comprehensive training programs to our employees, ensuring they have the necessary skills and knowledge to effectively utilize SAP-MM within our organization.           </Card.Text>
               <Card.Text className='card_text_carrer'>
          <p><span>EmploymentType:</span> Full Time,Part Time</p>
          <p><span>Experience:</span>  4+ years</p>
          <p><span>Education:</span> B.Tech/B.E. in Electronics Telecommunication,Computers, Any Graduate</p>
        </Card.Text>
        <div className='card_btn'>
          
        <Button className='btn_card_career'>Apply</Button>
        </div>
      </Card.Body>
    </Card>

    <Card className='card_carrer'>      
      <Card.Body >
        <Card.Title className='card_carrer_title'><h2>RPA-UI Path Trainer</h2></Card.Title>
        <Card.Text style={{textAlign:'justify'}}>
        We are looking for an RPA-UI Path Trainer who possesses deep expertise in Robotic Process Automation (RPA) and proficiency in UI Path platform. The ideal candidate will have a passion for teaching and mentoring, with the ability to effectively communicate complex concepts to individuals at various skill levels. In this role, you will be responsible for designing and delivering comprehensive training programs that empower our clients and internal teams to leverage RPA and UI Path effectively.
        </Card.Text>
                       <Card.Text className='card_text_carrer'>
          <p><span>EmploymentType:</span> Full Time,Part Time</p>
          <p><span>Experience:</span>  4+ years</p>
          <p><span>Education:</span> B.Tech/B.E. in Electronics Telecommunication,Computers, Any Graduate</p>
        </Card.Text>
        <div className='card_btn'>
          
        <Button className='btn_card_career'>Apply</Button>
        </div>
      </Card.Body>
    </Card>
</section>
       </section>
        </>
  )
}

export default Career
