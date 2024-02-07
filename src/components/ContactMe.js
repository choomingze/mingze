import phoneIcon from "../assets/img/phoneicon.png";
import emailIcon from "../assets/img/emailicon.png";
import linkedinIcon from "../assets/img/linkedinicon.png";
export const ContactMe = () =>{
    
    return (
      
        <section className="contactme" id="contactme"style={{
            // backgroundColor:'#89CFF0',
            height:'45vh',                
            width:'100%',             
            
        }} >
            <hr style={{
                width:'90%',
                margin:'0 auto',
                border:'solid 1px',
                marginBottom:'40px'
            }}/>        

            <h4 style={{textAlign:'left',paddingLeft:'5%'}}>Get In Touch</h4>
            <div style={{display: 'flex', justifyContent: 'flex-start',paddingLeft:'5%',marginTop:'30px'}}>
            <img style={{width: "30px",marginRight:'10px'}}                            
                src={phoneIcon}  alt="phoneIcon"/>
                <span style={{marginRight:'20px',fontSize: '18px',}}> (UK) +44 7818140806</span>
                <span style={{fontSize: '18px',}}> (MY) +60 184081161</span>
            </div>

            <div style={{display: 'flex', justifyContent: 'flex-start',paddingLeft:'5%',marginTop:'10px'}}>
            <img style={{width: "30px",marginRight:'10px'}}                            
                src={emailIcon}  alt="emailIcon"/>
                <span style={{marginRight: '20px', fontSize: '18px', cursor: 'pointer'}} onClick={() => window.location.href = 'mailto:mingggze@gmail.com'}><u>mingggze@gmail.com</u></span>

                
            </div>
            <div style={{display: 'flex', justifyContent: 'flex-start',paddingLeft:'5%',marginTop:'10px'}}>
            <img style={{width: "35px",marginRight:'5px'}}                            
                src={linkedinIcon}  alt="linkedinIcon"/>
                <span style={{marginRight: '20px', fontSize: '18px', cursor: 'pointer'}} onClick={() => window.open('https://www.linkedin.com/in/ming-ze-choo-a04087207', '_blank')}><u>Ming Ze Choo</u></span>

                
            </div>
            
    </section>
   
    )

}