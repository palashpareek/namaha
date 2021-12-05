import React from 'react'
import Social from '../common/social-contact/social-contact.js'
import Separator from '../common/separator/separator'
import Separator1 from '../common/separator1/separator1'
import './footer.css'

const Footer = ()=>{

	return (

    <div className="footer-section">   

         <div className="footer">
 
           <div className="footer-container">

              <div className="container-left">

                   <p className="footer-title">About Namaha</p>
                    <p style={{marginTop:-25}}><Separator1 /></p>

               <div  style={{display:'flex'}}>

                  <div className="logo" style={{marginRight: 5}}> 
                     <img src={require('../../assets/logo.jpg').default} />
                   </div>

                  <p style={{marginTop:-5}}>We specialize in VFX Rotoscope, Keying, Prep/Paint,
                 and Matchmove services.</p> 
                 </div> 

                  <p style={{marginTop:-7}}>
                    Our company works with reputed clients
                   globally for commercials and film projects episodic content for VFX
                   endeavours.
                  </p>

              </div>
                
              <div className="container-right">
                    
                    <p className="footer-title">Contact At</p>
                    <p style={{marginTop:-25}}><Separator1 /></p>

                     <p style={{marginTop:-5}}>info@example.com</p> 
                     <p style={{marginTop:-10}}>+91-1234567890</p>

                     <p className="footer-title" style={{marginTop:-5}}>Catch Up On</p>
                    <p style={{marginTop:-25}}><Separator1 /></p>
                     <Social />

              </div>

           </div>  

         </div>
             
             <div className="copyright-section">

                <Separator />

                <p><span>©</span> Copyright <span className="copyright-main">Namaha VFX</span>. All Rights Reserved.</p>
             </div>

         </div>
		)
}

export default Footer;

                    /*<p>
                    <a href={require('../../assets/Privacy_policy.docx').default}>Privacy Policy</a>  |  <a href={require('../../assets/Terms_of_use.docx').default}>Terms of Use</a>
                    </p>*/