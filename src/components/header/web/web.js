import React, {useState} from 'react'
import './web.css'
import {Link} from 'react-router-dom'


const Web = () =>{


	return (
           
             <div className="web">
                
 

             <div className="web-option">

                 <Link to="/" class="selected">
                 Home
                 </Link>
              </div>
 


              <div className="web-option">

                 <Link to="/about">
                 About Us
                 </Link>

              </div>


              
              <div className="web-option">

                 <Link to="/services">
                 Services
                 </Link>

              </div>



               <div className="web-option">

                 <Link to="/pipeline">
                 Pipeline
                 </Link>

              </div>



              <div className="web-option">

                 <Link to="/reels">
                 Show Reels
                 </Link>

              </div>



              <div className="web-option">

                 <Link to="/credentials">
                 Credentials
                 </Link>

              </div>


              <div className="web-option">

                 <Link to="/contact">
                 Contact
                 </Link>

              </div>


             </div>
		)
}

export default Web;