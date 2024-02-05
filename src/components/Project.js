import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y ,Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export const Project = () =>{
    // SwiperCore.use([Autoplay]);
    return (
      
        <section className="project" id="projects" 
        style={{
            backgroundColor:'',
            height:'110vh',
            paddingTop:'15vh'
        }}>
        <div style={{paddingnTop:'10vh',width:'100%'}}>
            <div className="row" style={{paddingnTop:'10vh',width:'100%',backgroundColor:'red'}}>
                <div className="col-12">
                <div className="skill-bx wow zoomIn">
                        <h2>Project</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        
                    </div>

                    
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        loop={true}
                        spaceBetween={30}
                        autoplay={{
                            delay: 1000, // Adjust the delay to your preference
                            disableOnInteraction: false
                        }}
                        slidesPerView={3.9}
                        speed={3000} // Adjust the speed as needed
                        effect="slide" // Use the "slide" effect for continuous sliding
                    >
                        <SwiperSlide>
                            <div className="skill-bx wow zoomIn" style={{backgroundColor:'blue'}}>
                                <h2>Project</h2>
                                <p>Lorem Ipsum is simply dummy text of</p>                                
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                      
                    <div className="skill-bx wow zoomIn" style={{ border:'red solid 3px', borderRadius:'15px',padding:'70px 0',backgroundColor:'yellow'}}>
                        

                        <h1>{`Hi! I'm Ming Ze Choo`}</h1>
                        <h2>{'💻'} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "React Developer", "Full Stack Developer", "UI/UX Designer" ]'><span className="wrap">'h2h2'</span></span></h2>
                        <p style={{width:'90%',margin:'auto', fontWeight:'450'}}>Computer Science with Artificial Intelligence graduate (Second Upper, 2:1) from the University of
                            Nottingham.</p><br/>
                        <p style={{width:'80%',margin:'auto',}}>I am a dedicated and hardworking individual, consistently pursuing self-improvement and
                            learning. I have independently mastered various programming languages, showcasing my self-taught
                            skills. As a fast learner, I am enthusiastic about new challenges and eager to continue expanding my
                            knowledge.</p>
                  
                </div>
                            </SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 5</SwiperSlide>
                        <SwiperSlide>Slide 6</SwiperSlide>
                        <SwiperSlide>Slide 7</SwiperSlide>
                    </Swiper>

                </div>
            </div>
        </div>
        
    </section>
   
    )

}