import mingZeGraduate from "../assets/img/MingZeGraduate.jpeg";
import mingZeGraduate2 from "../assets/img/backgroundImg2.jpg";
import 'animate.css';

import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
export const AboutMe = () =>{
    const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate =[ "React Developer", "Full Stack Developer", "UI/UX Designer" ]   ;
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
    return (
      
        <section className="aboutme" id="aboutme"
            style={{
                // backgroundColor:'#89CFF0',
                height:'95vh',                
                width:'100%',             
                display:'flex',
                backgroundImage: `url(${mingZeGraduate2})`, backgroundSize: '100% 100%'
            }}>
        <div>
            <div className="row" style={{
                width:'100%',
                height:'100%',
                alignItems:'center',
                // backgroundColor:'green',
                // position:'absolute'
            }}>              

                <div className="col-12" style={{width:"50%",alignItems:'center',}}>
                    <div className="skill-bx wow zoomIn" alignItems="center">                        
                        <div >
                            <img style={{                                
                                width: "80%",
                                borderRadius:'50%',
                            }}                            
                            src={mingZeGraduate}  alt="mingZeGraduate"/>
                        </div>
                        
                    </div>
                </div>  

                <div className="col-12" style={{width:"50%", border:'red 1px',}}>
                    <div className="skill-bx wow zoomIn" style={{width:"85%", border:'red solid 3px', borderRadius:'15px',padding:'70px 0',backgroundColor:'#e6e6e6'}}>
                        

                        <h1>{`Hi! I'm Ming Ze Choo`}</h1>
                        <h2>{'💻'} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "React Developer", "Full Stack Developer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h2>
                        <p style={{width:'90%',margin:'auto', fontWeight:'450'}}>Computer Science with Artificial Intelligence graduate (Second Upper, 2:1) from the University of
                            Nottingham.</p><br/>
                        <p style={{width:'80%',margin:'auto',}}>I am a dedicated and hardworking individual, consistently pursuing self-improvement and
                            learning. I have independently mastered various programming languages, showcasing my self-taught
                            skills. As a fast learner, I am enthusiastic about new challenges and eager to continue expanding my
                            knowledge.</p>
                    </div>
                </div>

                
            </div>
        </div>
        
    </section>

    // <section className="aboutme" id="aboutme">
    //   <Container>
    //     <Row className="aligh-items-center">
    //       <Col xs={12} md={6} xl={7}>
            
              
              
            
    //       </Col>
    //       <Col xs={12} md={6} xl={5}>
           
              
    //             <div className={"animate__animated animate__zoomIn"}>
    //               <img src={mingZeGraduate} alt="mingZeGraduate"/>
    //             </div>
           
    //       </Col>
    //     </Row>
    //   </Container>
    // </section>

    )

}