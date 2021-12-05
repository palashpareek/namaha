import React, {useState} from 'react'
import './web.css'
import {Link} from 'react-router-dom'


const Web = () =>{

        const[isActive, setIsActive] = useState({
          activeIndex: null
        });

        const toggleActive = (index) =>{
             setIsActive({...isActive, activeIndex: index})
        }

        const toggleActivestyle = (index)=>{
            if(isActive.activeIndex === index)
              return "active-web-option"
            else
              return "web-option"
        }

	return (
           
             <div className="web">
                
 

             <div className={toggleActivestyle(1)} onClick={() =>{toggleActive(1)}}> 

                 <Link to="/">
                 Home  
                 </Link>
              </div>


              
              <div className={toggleActivestyle(3)}  onClick={() =>{toggleActive(3)}}>

                 <Link to="/services">
                 Services
                 </Link>

              </div>



               <div className={toggleActivestyle(4)}  onClick={() =>{toggleActive(4)}}>

                 <Link to="/pipeline">
                 Pipeline
                 </Link>

              </div>



              <div className={toggleActivestyle(5)}  onClick={() =>{toggleActive(5)}}>

                 <Link to="/reels">
                 Show Reels
                 </Link>

              </div>



              <div className={toggleActivestyle(6)}  onClick={() =>{toggleActive(6)}}>

                 <Link to="/credentials">
                 Credentials
                 </Link>

              </div>


              <div className={toggleActivestyle(7)}  onClick={() =>{toggleActive(7)}}>

                 <Link to="/contact">
                 Contact
                 </Link>

              </div>


             </div>
		)
}

export default Web;