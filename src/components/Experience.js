import keySight from "../assets/img/keysight.png";
import fitwith from "../assets/img/fitwith.jpg";
import FadeIn from "react-fade-in";
import React, { useState } from 'react';
export const Experience = () =>{
    
        const [expanded1, setExpanded1] = useState(false);
        const [expanded2, setExpanded2] = useState(false);
        const frameworks = ['React developer', 'Frontend and UI/UXdesigner', 'Webpage tester', 'React, Django, NodeJS', 'Experienced with uk working culture, remote working, project planning and improved technical skills'];
        const listFrameworks = frameworks.map((framework) =>
            <li>{framework}</li>
            );
        const expereince1 = ['Full Stack Django developer', 'Rest Api developer', 'Software quality assurance', 'Webpage tester', 'Improved soft skills such as communications, Solving problems, Team and Time Management', 'Real world work experience'];
        const listExpereince1 = expereince1.map((expereince1) =>
            <li>{expereince1}</li>
            );
        const toggleExpand1 = () => {
            setExpanded1(!expanded1);
        };
        const toggleExpand2 = () => {
            setExpanded2(!expanded2);
        };
    
    return (
      
        <section className="experince" id="experiences" 
        style={{
            backgroundColor:'',
            height:'140vh',
            paddingTop:'10vh'
        }}>
        <div className="container">
            <h2 style={{marginBottom:'4vh'}}>Experiences</h2>   
            
            <div className="row exp-backL" style={{}}>
            <div className="col-3" style={{ width: "25%", display: 'flex', justifyContent: 'center' ,alignItems:'center'}}>
                <div className="skill-bx wow zoomIn" style={{ justifyContent: 'center' }}>
                    <div>
                        <img style={{
                            width: "80%",
                            borderRadius: '50%',
                        }}
                            src={keySight} alt="mingZeGraduate" />
                    </div>
                </div>
            </div>
            <div className="col-9">
                <div className="skill-bx wow zoomIn" style={{ borderRadius: '15px', textAlign: 'left', padding: '20px 0', marginLeft: '60px', cursor: 'pointer', transition: 'opacity 0.3s ease',  }} onClick={toggleExpand1}>
                        <h1>{`Keysight Technologies Sdn Bhd`}</h1>
                        <h6 style={{ width: '90%', marginTop: '10px' }}> Full Stack Developer Internship<br /> Penang, Malaysia<br />Jun 2021 - Aug 2021</h6>
                       
                        {expanded1 && (
                            <div style={{ width: '80%', textAlign: 'left' }}>
                                <FadeIn>
                                <h6 style={{ width: '90%', marginTop: '20px' }}><u>Description</u></h6>

                                <p>During my internship, I've gained valuable real-world experience alongside my studies. In this role, I function as a full-stack developer, responsible for crafting REST APIs and engaging with both backend and frontend development. Additionally, I'm tasked with conducting comprehensive testing across all team-created products, ensuring they operate seamlessly and meet their intended objectives. Assigned to a collaborative team environment, this internship has provided ample opportunities to enhance my soft skills, particularly communication, as I engage with colleagues and contribute to team projects.</p>
                                </FadeIn>
                            </div>
                        )}
                       
                        {!expanded1 && (
                            <>
                              <FadeIn>
                                <div style={{ textAlign: 'left', paddingTop: '20px' }}>{listExpereince1}</div>
                                <p style={{ textAlign: 'left', paddingTop: '20px' }}><u>Click for more Description!</u></p>
                             </FadeIn>
                            </>
                        )}
                      
                    </div>
                </div>
            </div>

            <div style={{height:'10vh', width:'100%', clear:'both'}}></div>

            <div className="row exp-backR">
            
                <div className="col-9">
                <div className="skill-bx wow zoomIn" style={{ borderRadius: '15px', textAlign: 'left', padding: '20px 0', marginLeft: '60px', cursor: 'pointer', transition: 'opacity 0.3s ease', height:'60vh' }} onClick={toggleExpand2}>
                        <h1>{`FitWith Ltd`}</h1>
                        <h6 style={{ width: '90%', marginTop: '10px' }}>Front End / React Developer<br />Milton Keynes, United Kingdom<br />Feb 2023 - July 2023</h6>
                       
                        {expanded2 && (
                            <div style={{ width: '80%', textAlign: 'left' }}>
                                <FadeIn>
                                <h6 style={{ width: '90%', marginTop: '20px' }}><u>Description</u></h6>

                                <p>In my role as a frontend developer specializing in React, I am responsible for translating provided designs into functional web pages, ensuring that the final product aligns with the design specifications. 
                                    I am also involved in reviewing designs meticulously and suggesting any necessary adjustments to ensure a seamless user experience. 
                                    Additionally, I serve as a web tester, continuously debugging and troubleshooting pages to identify and resolve issues promptly. 
                                    Through this role, I have honed not only my technical skills but also my soft skills, particularly communication and teamwork, as I collaborate with colleagues from various locations. 
                                    Furthermore, I have developed strong time management abilities, efficiently balancing tasks such as work reviews, meetings, and problem-solving to meet project deadlines effectively.</p>
                                </FadeIn>
                            </div>
                        )}
                       
                        {!expanded2 && (
                            <>
                              <FadeIn>
                                <div style={{ textAlign: 'left', paddingTop: '20px' }}>{listFrameworks}</div>
                                <p style={{ textAlign: 'left', paddingTop: '20px' }}><u>Click for more Description!</u></p>
                             </FadeIn>
                            </>
                        )}
                      
                    </div>
                </div>


                <div className="col-3" style={{ width: "25%", display: 'flex', justifyContent: 'center' ,alignItems:'center'}}>
                    <div className="skill-bx wow zoomIn" style={{ justifyContent: 'center' }}>
                        <div>
                            <img style={{
                                width: "110%",
                                borderRadius: '50%',
                                marginRight:'10px'
                            }}
                                src={fitwith} alt="mingZeGraduate" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
   
    )

}