import React from 'react'
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import CardMembershipOutlinedIcon from '@mui/icons-material/CardMembershipOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined';
import CastForEducationOutlinedIcon from '@mui/icons-material/CastForEducationOutlined';
import { Link } from 'react-router-dom';

const Aws = () => {
    const syllabusFile="../Syllabus/AWS_with_DevOps.pdf";
    const handleDownload=()=>{
        const link = document.createElement('a');
        link.href = syllabusFile;
        link.download = 'AWS_with_DevOps.pdf';
        link.click();
    };

  return (
    <>
    {/* Sylabus main section */}
    <section id='develop_course'>

    <section id='course'>
            <div className='syllabus'>
                <h1>AWS with DevOps</h1>
                <button className='btn' onClick={handleDownload}>Download Syllabus</button>
            </div>


            <div className='syllabus1'>
            <div className='syllabus_img'>
                <img src='https://www.fusion-institute.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdu45ucceq%2Fimage%2Fupload%2Fv1722249442%2FFusionCourseImage%2Ftazhhqpz2rrvm7bfrgln.jpg&w=640&q=75' alt='AWS with DevOps'></img>
            </div>

            <div className='Vertical_line' />

            <div className='syllabus_desc'>
                <h1>What is AWS with DevOps?</h1>
            <p> The AWS with DevOps course offers a thorough introduction to Amazon Web Services (AWS) and DevOps principles. 
                Participants will learn key AWS services like EC2, S3, and Lambda, and integrate DevOps practices such as Continuous Integration and Deployment (CI/CD) and Infrastructure as Code (IaC). The course includes hands-on experience with tools like Docker, Jenkins, and Terraform, enabling students to build, deploy, and manage applications on AWS efficiently. By the end, participants will be able to 
                enhance collaboration, speed up deployment, and streamline operations.</p>
                <Link to="/demo">
             <button className='btn'>Book Demo</button>
             </Link>
            </div>
            </div>
    </section>

    {/* sylabous key features */}
    <section>
        <div className='container_key'>
            <h1>Key Features</h1>

            <div style= {{  height: '3px', backgroundColor: '#dbad4d' , marginTop:'15px',borderWidth:'2px',borderRadius:'50px' }} />

            <div className='key_features'>   
                    <div className='key_features1'>                    
                                <div className='key3'>
                                    <h4><span><CastForEducationOutlinedIcon/></span> Expert Trainers</h4>
                                    <p>We are a team of 10+ Years of Industry Experienced Trainers, 
                                        who conduct the training with real-time scenarios. The Trainers follow the Project-Based Learning Method in the Interactive sessions.</p>
                                </div>

                                <div className='key3'>   
                                    <h4><span><HandshakeOutlinedIcon/></span> Mock Interviews and Preparations</h4>
                                    <p>Boost your confidence with mock interviews and thorough preparations, equipping you 
                                        with the skills needed to ace your next job opportunity</p>
                                </div>

                                <div className='key3'>
                                    <h4><span>< FolderCopyOutlinedIcon/></span> Live Projects</h4>
                                    <p>Learning journey through real-life industry projects, sponsored by top companies across 
                                        various sectors, ensuring hands-on experience that prepares you for success.</p>
                                </div>

                                <div className='key3'>
                                    <h4><span><CardMembershipOutlinedIcon/></span> Course Completion Certificate</h4>
                                    <p>After completing this course, receive a Fusion Training Institute certificate to boost your resume and 
                                        advance your career!</p>
                                </div>  
                            </div>
                            <div className='syllabus_img1'>
                                <img src='https://www.fusion-institute.com/_next/image?url=%2Fimg%2FimageFeatures.jpg&w=640&q=75' alt='research'></img>
                            </div>                           
            </div>
        </div>
    </section>

    {/* Tool Use In This Course */}
    <section>
        <div className='container_tool'>
            <h2>Tools Used In This Course</h2>
            <div className='tools'>

                <div className='tools1'>
                    <div className='tools_desc'>
                        <TaskAltOutlinedIcon /><span>AWS CLI</span>
                    </div>
                    </div>

                    <div className='tools1'>
                    <div className='tools_desc'>
                        <TaskAltOutlinedIcon /><span>AWS SDKs</span>
                </div>
                </div>

                <div className='tools1'>
                    <div className='tools_desc'>
                        <TaskAltOutlinedIcon /><span>AWS CloudFormation</span>
                    </div>
                    </div>

                    <div className='tools1'>
                    <div className='tools_desc'>
                        <TaskAltOutlinedIcon /><span>AWS CodePipeline</span>
                    </div>
                </div>

                <div className='tools1'>
                    <div className='tools_desc'>
                        <TaskAltOutlinedIcon /><span>Docker</span>
                    </div>
                </div>

                <div className='tools1'>
                    <div className='tools_desc'>
                        <TaskAltOutlinedIcon /><span>Jenkins</span>
                    </div>
                </div>

                <div className='tools1'>
                    <div className='tools_desc'>
                        <TaskAltOutlinedIcon /><span>Jira</span>
                    </div>
                </div>

                <div className='tools1'>
                    <div className='tools_desc'>
                        <TaskAltOutlinedIcon /><span>Kubernetes</span>
                    </div>
                </div>

                <div className='tools1'>
                    <div className='tools_desc'>
                        <TaskAltOutlinedIcon /><span>Github</span>
                    </div>
                </div>

            </div>
        </div>
    </section>


{/* apply for course */}
    <section>
        <div className='apply_course'>
           <img src='https://www.fusion-institute.com/_next/image?url=%2Fimg%2FCutImage.jpg&w=1200&q=75' alt='course'></img> 

           <div className='apply_course_list'>
            <div className='apply_course_desc'>
                <h2>Who can apply for the course?</h2>
                <ul className='list'>
                    <li><DoneOutlinedIcon />Aspiring Software developers who are interested in switching careers.</li>
                </ul>

                <ul className='list'>
                    <li><DoneOutlinedIcon />Graduate/post-graduate students wishing to pursue their careers in Software testing.</li>
                </ul>

                <ul className='list'>
                    <li><DoneOutlinedIcon />Professionals from non-IT backgrounds, who want to establish themselves in IT.</li>
                </ul>

                <ul className='list'>
                    <li><DoneOutlinedIcon />Candidates who would like to restart their career after a gap.</li>
                </ul>
            </div>
           </div>
        </div>
    </section>



{/* Pre-requisites/Requirements */}
    <section>
        <h2>Pre-requisites/Requirements</h2>
        <div className='requirement'>

            <div className='skills'>
                <span className='box'></span>
                <div className='subskills'>
                    <div className='subskills1'>
                    <h3>Experience developing code in at least one high-level programming language.</h3>
                    </div>
                </div>
            </div>

            <div className='skills'>
                <span className='box'></span>
                <div className='subskills'>
                    <div className='subskills1'>
                    <h3>To Building the in highly automated infrastructures and administering operating systems.</h3>
                    </div>
                </div>
            </div>

            <div className='skills'>
                <span className='box'></span>
                <div className='subskills'>
                    <div className='subskills1'>
                    <h3>Understanding of  modern development and operations processes and methodologies.</h3>
                    </div>
                </div>
            </div>

        </div>
    </section>


{/* course offering */}
    <section>
        <div className='container_offering'>
            <div  className='offering'>
                <h3>Course Offerings</h3>
            </div>

            <div className='offering1'>
                <div className='course_offering'>
                    <p><TaskAltOutlinedIcon />Online + Offline Classes.</p>
                    <div className='vertical'/>
                    <p><TaskAltOutlinedIcon />Course Duration: 4 Months</p>
                    <div className='vertical'/>

                    <p><TaskAltOutlinedIcon />24 x 7 Support</p>
                    <div style= {{width:'100%',borderWidth:'-10px', borderRadius:'50px',border:'1px solid #dbad4d',marginLeft:'-5px' }} />

                    <p><TaskAltOutlinedIcon />Effective Resume Buildings</p>
                    <div className='vertical'/>
                    <p><TaskAltOutlinedIcon />Certificate of Course Completion</p>
                    <div className='vertical'/>

                    <p><TaskAltOutlinedIcon />100% Placement Support</p>

                   <div style= {{width:'100%', marginTop:'5px',borderWidth:'-10px', borderRadius:'50px',border:'1px solid white',marginLeft:'-5px' }} /> 
                </div>   
            </div>
        </div>
    </section>
    </section>
    </>
  )
}

export default Aws;