import React from 'react'
import Social from '../common/social-contact/social-contact.js'
import './footer.css'

const Footer = ()=>{

	return (
         
         <div className="footer">

           <div className="footer-container">

              <div className="container-left">

                   <p className="title">Contact</p>
 
                   <p><Social /></p>

              </div>
                
              <div className="container-right">
                    
                    <p>
                    <a href={require('../../assets/Palash_Pareek_Resume.pdf').default}>Privacy Policy</a>  |  <a href={require('../../assets/Palash_Pareek_Resume.pdf').default}>Terms of Use</a>
                    </p>

                     <p>info@example.com | +91-1234567890</p>
              </div>

           </div>

         </div>
		)
}

export default Footer;