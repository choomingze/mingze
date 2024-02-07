import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y ,Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export const Project = () =>{
    // SwiperCore.use([Autoplay]);
    const prj1 = ['Html,Css,Python','Framework: Django.', 'API: Mendeley API, Scopus API',];
    const project1 = prj1.map((p1) =>
        <li>•{p1}</li>
        );
    const prj2 = ['Html,Css,Java,JavaScript','MVC desigin pattern'];
    const project2 = prj2.map((p2) =>
        <li>•{p2}</li>
        );
    const prj3 = ['Numpy,Pandas,TensorFlow,Sklearn,Keras','Reinforcement Learning','Machine Learning'];
    const project3 = prj3.map((p3) =>
    <li>•{p3}</li>
    );
    const prj4 = ['Java','Android Studio','MVC desigin pattern'];
    const project4 = prj4.map((p4) =>
    <li>•{p4}</li>
    );
    const prj5 = ['Matlab','Siamese Neural Network','VGG Face'];
    const project5 = prj5.map((p5) =>
    <li>•{p5}</li>
    );
    return (
      
        <section className="project" id="projects" 
        style={{
            backgroundColor:'',
            height:'110vh',
            paddingTop:'15vh'
        }}>
        <div style={{paddingnTop:'10vh',width:'100%'}}>
            <div className="row" style={{paddingnTop:'10vh',width:'100%'}}>
                <div className="col-12">
                    <div className="skill-bx wow zoomIn" style={{marginBottom:'30px'}}>
                        <h2 style={{fontFamily: 'Pacifico, cursive', fontSize: '2.5rem', color: '#333', textTransform: 'uppercase'}}>
                            Projects
                        </h2>
                    </div>                 
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        loop={true}
                        spaceBetween={30}
                        autoplay={{
                            delay: 1000, // Adjust the delay to your preference
                            disableOnInteraction: false
                        }}
                        style={{
                            // backgroundColor:'#fafafa',
                            padding:'40px 0'
                        }}
                        slidesPerView={3.5}
                        speed={3000} // Adjust the speed as needed
                        effect="slide" // Use the "slide" effect for continuous sliding
                    >
                       
                        <SwiperSlide onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
                            <div 
                                className="skill-bx wow zoomIn swiper-card" 
                               
                                onClick={() => window.open('https://github.com/mingggze/Research-Paper-Search-Engine-SEGP', '_blank')}
                            >
                                <h3>{`Research Paper Search Engine `}</h3>
                                <p style={{textAlign:'left',margin:'0'}}>•Developed a search engine website that aids researchers in coming up with new topics for future research</p>
                                <p style={{textAlign:'left',margin:'0'}}>•Suggesting the user a selection of promising topics based on the combinations of the inputs from the users</p>
                                <p style={{textAlign:'left',marginBottom:'0'}}><u>Technologies</u></p>
                                <div style={{textAlign: 'left'}}>{project1}</div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
                            <div 
                                className="skill-bx wow zoomIn swiper-card" 
                                
                                onClick={() => window.open('https://github.com/mingggze/Frogger', '_blank')}
                                 // Scale up on hover
                                 // Reset scale on mouse leave
                            >
                                <h3 style={{marginBottom:'20px'}}>{`Frogger `}</h3>
                                <p style={{textAlign:'left',margin:'0'}}>•Maintaining and extending reimplementation of the classic retro game.</p>
                                <p style={{textAlign:'left',margin:'0'}}>•Software maintenance and building the game using the Movdel-View-Control design pattern. Adding extra features to make improvementfor the game</p>
                                <p style={{textAlign:'left',marginBottom:'0'}}><u>Technologies</u></p>
                                <div style={{textAlign: 'left'}}>{project2}</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
                            <div 
                                className="skill-bx wow zoomIn swiper-card" 
                            
                                onClick={() => window.open('https://github.com/mingggze/DQN-Agent', '_blank')} // Reset scale on mouse leave
                            >
                                <h3 style={{marginBottom:'20px'}}>{`DQN Agent`}</h3>
                                <p style={{textAlign:'left',margin:'0'}}>•Designed an intelligent agent using reinforcement learning to perform actions on the stocks-trading environment I used from the openAI gym.</p>
                                <p style={{textAlign:'left',margin:'0'}}>•A DQN agent that is responsible for the stocks trading is created by following the DQN
algorithm, the DQN model was created using a deep neural network.</p>
                                <p style={{textAlign:'left',marginBottom:'0'}}><u>Technologies</u></p>
                                <div style={{textAlign: 'left'}}>{project3}</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
                            <div 
                                className="skill-bx wow zoomIn swiper-card" 
                              
                                onClick={() => window.open('https://github.com/mingggze/Running-Tracker-App', '_blank')}
                                 // Scale up on hover
                                 // Reset scale on mouse leave
                            >
                                <h3 style={{marginBottom:'20px'}}>{`Running Tracker Mobile App`}</h3>
                                <p style={{textAlign:'left',margin:'0'}}>•Built an Android running tracking application using Android Studio.</p>
                                <p style={{textAlign:'left',margin:'0'}}>•A running tracker mobile app that tracks the movement by using the changes of the
physical location using GPS.</p>
                                <p style={{textAlign:'left',marginBottom:'0'}}><u>Technologies</u></p>
                                <div style={{textAlign: 'left'}}>{project4}</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
                            <div 
                                className="skill-bx wow zoomIn swiper-card" 
                               
                                onClick={() => window.open('https://github.com/choomingze/face-recog', '_blank')}
                                 // Scale up on hover
                                 // Reset scale on mouse leave
                            >
                                <h3 style={{marginBottom:'20px'}}>{`Face Recognition`}</h3>
                                <p style={{textAlign:'left',margin:'0'}}>•Face recognition using Siamese Neural Network with The VGGFace descriptor as sub-network</p>
                                <p style={{textAlign:'left',margin:'0'}}>•One-shot learning is used for limited training data set.</p>
                                <p style={{textAlign:'left',marginBottom:'0'}}><u>Technologies</u></p>
                                <div style={{textAlign: 'left'}}>{project5}</div>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                </div>
            </div>
        </div>
        
    </section>
   
    )

}