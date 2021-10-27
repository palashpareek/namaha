import React, {useState} from 'react'
import Social from '../../common/social-contact/social-contact.js'
import './contact.css'
import Mobile from '../../header/mobile/mobile'

const Contact = () =>{
   
   return(
   	<div className="contact">

    
      <div className="contact-container">

         <div className="contact-left">

           <img src={require('../../../assets/Contactus.png').default} className="picture" />

         </div>



          <div className="contact-right">

           <div className="contact-form">

           <p><span className="contact-title">Any queries ?</span></p>
           <form >
              <input placeholder="email" required className="input" />
              <br/>
              <textarea placeholder="text" required className="input" />
              <br/>
                <button className="btn">Submit</button>
           </form>


      </div >


      <div className="contact-icons">
             
             <p><span className="contact-title">Locate Us</span></p>

             <a href="www.google.com"><i class="fi fi-rr-map-marker"></i></a>         
      </div>  

         </div>

      </div>

      </div>
   	)
}

export default Contact;