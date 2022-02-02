import React, {useState } from 'react'
import contactVideo from '../../../assets/contactVideo.mp4'
import emailjs from 'emailjs-com'
import {Map, GoogleApiWrapper} from 'google-maps-react'
import './contact.css'

const Contact = ({google}) =>{

   const[data, setData] = useState({
      name: "",
      email: "",
      mobileNo: "",
      message: ""
   })

   const {name, email, mobileNo, message} = data;

   const OnInputChange = e =>{
      setData({...data, [e.target.name]: e.target.value})
    }

    const sendEmail = (e) =>{
      e.preventDefault();

      emailjs.sendForm('service_46rs6uk', 'template_cxxazae', e.target, 'user_5rkX9Ts7JdIpFoJ9qvweq')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
      
         setData({
            name: "",
            email: "",
            mobileNo: "",
            message: ""
         });
    }
   
   return(
   	<div className="contact">
              <div className="contact-left">

                  <div className="contact-left-content">
                     <h1>LET'S</h1>
                  </div>
 
                  <div className="contact-left-content">
                     <h1>CREATE</h1>
                  </div>

                  <div className="contact-left-content">
                     <h1>EXPERIENCES!</h1>
                  </div>

                  <div style={{fontWeight: 900, fontSize: 20, marginBottom: 20}}>
                   <p>Let's Talk</p>
                  </div> 

             <form className="contact-form" onSubmit={sendEmail}>
                  <div className="contact-left-form">
                   <p>Hi! I am</p>
                   <input type="text" placeholder="eg. Harsh" required
                   name="name" value={name}  autoComplete="off" style={{color: "#A00000"}}
                   onChange = {e => OnInputChange(e)}  
                   ></input>
                  </div>

                  <div className="contact-left-form">
                   <p>Reach me at</p>
                   <input type="email" placeholder="eg. harsh123@gmail.com"  required
                   name="email" value={email}  autoComplete="off" style={{color: "#A00000"}}
                   onChange = {e => OnInputChange(e)}
                   ></input>
                  </div>
 
                  <div className="contact-left-form">
                  <p>Mobile No</p>
                   <input type="text" placeholder="eg. +919876543210"  required
                   name="mobileNo" value={mobileNo} autoComplete="off" style={{color: "#A00000"}}
                   onChange = {e => OnInputChange(e)}
                   ></input>
                  </div>

                  <div className="contact-left-form">
                  <p>Your Message</p>
                   <input type="text" placeholder="eg. I wanted to..."  required
                   name="message" value={message}  autoComplete="off"  style={{color: "#A00000"}}
                   onChange = {e => OnInputChange(e)}
                   ></input>
                  </div>

                  <input type="submit" className="contact-button" value="SEND"></input>
                  </form>

              </div>

             <div className="contact-right">

              <video autoPlay loop muted>
                <source src={contactVideo} type="video/mp4"/>
                 </video>

               <div className="location">
                  <p>Locate Us</p>
                  <a  style={{color:"#A00000"}}href="https://maps.app.goo.gl/3HfTrFNSAnTJiLdRA"  target="_blank"><i class="fi fi-rr-marker  option-icon"></i></a>
               </div>

         </div> 
      </div>
   	)
}

export default  GoogleApiWrapper({
   apiKey: "AIzaSyCJx8XTNeZhgllBMLWIR7zNMMUvvF7fuuU"
})(Contact)

/*
<div className="contact_map">
                 <Map 
                 google={google}
                  style={{width:"20%", height:"50%"}}
                  zoom={10}
                  initialCenter={
                     {
                        lat: 24.588327,
                        lng: 73.739027
                     }
                  }
                 />
            </div>*/