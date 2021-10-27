import React from 'react'
import './web.css'
import {Link} from 'react-router-dom'


const Web = () =>{

	return (
           
             <div className="web">
                
 

              <div className="web-option">

                 <Link to="/about">
                 <i class="fi fi-rr-info  option-icon"></i>
                 About Us
                 </Link>

              </div>



              <div className="web-option">

                 <Link to="/reels">
                 <i class="fi fi-rr-film option-icon"></i>
                 Show Reels
                 </Link>

              </div>



              <div className="web-option">

                 <Link to="/services">
                 <i class="fi fi-rr-settings-sliders  option-icon"></i>
                 Services
                 </Link>

              </div>



              <div className="web-option">

                 <Link to="/pipeline">
                 <i class="fi fi-rr-data-transfer  option-icon"></i>
                 Pipeline
                 </Link>

              </div>



              <div className="web-option">

                 <Link to="/credentials">
                 <i class="fi fi-rr-list-check option-icon"></i>
                 Credentials
                 </Link>

              </div>


              <div className="web-option">

                 <Link to="/contact">
                  <i class="fi-rr-user option-icon"></i>
                 Contact
                 </Link>

              </div>


             </div>
		)
}

export default Web;