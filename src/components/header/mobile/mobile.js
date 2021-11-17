import React from 'react'
import './mobile.css'
import {Link} from 'react-router-dom'


const Mobile = ({isOpen, setIsOpen}) =>{ 

	return (
           
             <div className="mobile" onClick={()=> setIsOpen(!isOpen)}>

               <div className="close-icon" onClick={()=> setIsOpen(!isOpen)}>
                  <i class="fi-rr-cross-circle"></i>
               </div>



             <div className="mobile-options">



              <div className="mobile-option">

                 <Link to="/">
                 <i class="fi fi-rr-home  option-icon"></i>
                 Home
                 </Link>

              </div>
                
 

              <div className="mobile-option">

                 <Link to="/about">
                 <i class="fi fi-rr-info  option-icon"></i>
                 About Us
                 </Link>

              </div>



              <div className="mobile-option">

                 <Link to="/reels">
                 <i class="fi fi-rr-film option-icon"></i>
                 Show Reels
                 </Link>

              </div>



              <div className="mobile-option">

                 <Link to="/services">
                 <i class="fi fi-rr-settings-sliders  option-icon"></i>
                 Services
                 </Link>

              </div>



              <div className="mobile-option">

                 <Link to="/pipeline">
                 <i class="fi fi-rr-data-transfer  option-icon"></i>
                 Pipeline
                 </Link>

              </div>



              <div className="mobile-option">

                 <Link to="/credentials">
                 <i class="fi fi-rr-list-check option-icon"></i>
                 Credentials
                 </Link>

              </div>


              <div className="mobile-option">

                 <Link to="/contact">
                  <i class="fi-rr-user option-icon"></i>
                 Contact
                 </Link>

              </div>


             </div>
               
          </div>
		)
}

export default Mobile;