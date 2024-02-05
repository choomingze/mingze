export const Skills = () =>{
    const programming = ['Python', 'Java', 'C', 'C++', 'C#','MATLAB', 'SQL', 'Haskell', 'CSS', 'JavaScript', 'HTML', 'MySQL', 'PHP', 'JavaScript'];
    const tools = ['TensorFlow', 'Keras', 'Android Studio', 'Unity', 'Git','Docker'];
    const frameworks = ['Django', 'React', 'NodeJS', 'Hooks', 'Hadoop','Spark'];
    const languages = ['English','Chinese (Mandarin)','Bahasa Malaysia (Malay)'];
    const listProgramming = programming.map((prog) =>
    <li>{prog}</li>
    );
    const listTools = tools.map((tool) =>
    <li>{tool}</li>
    );
    const listFrameworks = frameworks.map((framework) =>
    <li>{framework}</li>
    );
    const listLanguages = languages.map((language) =>
    <li>{language}</li>
    );
    return (
      
        <section className="skill" id="skills" 
            style={{
                // backgroundColor:'orange',
                height:'110vh',
                paddingTop:'12vh'
            }}>
                <div class="container" >
                <h2>Skills</h2>
                    <div class="row" style={{marginTop:'5vh'}}>                       
                        
                        <div class="col-3" style={{border:'solid 3px red',backgroundColor:'#f0eded', borderRadius:'15px',marginRight:'auto',width:'24%',boxShadow:'5px 10px 18px #888888'}}>
                            <div class="skill-bx wow zoomIn" style={{padding:'20px 0'}}>
                                <h2>Programming</h2>
                                <div style={{textAlign:'left',paddingLeft:'40px',paddingTop:'20px'}}>{listProgramming}</div>
                            </div>
                        </div>
                        <div class="col-3" style={{border:'solid 3px red', borderRadius:'15px',marginRight:'auto',width:'24%'}}>
                            <div class="skill-bx wow zoomIn" style={{padding:'20px 0'}}>
                                <h2>Tools</h2>
                                <div style={{textAlign:'left',paddingLeft:'40px',paddingTop:'20px'}}>{listTools}</div>
                            </div>
                        </div>
                        <div class="col-3" style={{border:'solid 3px red', borderRadius:'15px',marginRight:'auto',width:'24%'}}>
                            <div class="skill-bx wow zoomIn" style={{padding:'20px 0'}}>
                                <h2>Framework</h2>
                                <div style={{textAlign:'left',paddingLeft:'40px',paddingTop:'20px'}}>{listFrameworks}</div>
                            </div>
                        </div>
                        <div class="col-3" style={{border:'solid 3px red', borderRadius:'15px',width:'24%'}}>
                            <div class="skill-bx wow zoomIn" style={{padding:'20px 0'}}>
                                <h2>Languages</h2>
                                <span>(Spoken and Written)</span>
                                <div style={{textAlign:'left',paddingLeft:'40px',paddingTop:'20px'}}>{listLanguages}</div>
                            </div>
                        </div>
                    </div>

                    
                </div>            
        </section>
   
    )

}