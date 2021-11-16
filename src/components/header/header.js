import React, {useState} from 'react'
import Web from './web/web'
import Mobile from './mobile/mobile'
import './header.css'


const Header = () =>{

	const[isOpen, setIsOpen] = useState(false)

	return (
         
           <div className="header">
             

                 <div className="logo"> 
                      <img src={require('../../assets/logo.jpg').default} />
                 </div>
  
 
                 <div className="menu">


                     <div className="web-menu">
                        <Web />
                     </div>


                     <div className="mobile-menu">

                      <div onClick={()=> setIsOpen(!isOpen)}>
                        <i class="fi-rr-apps menu-icon"></i>
                      </div>
                         {isOpen &&  <Mobile  isOpen={isOpen} setIsOpen={setIsOpen}/>}
                     </div>

                 </div>
           </div>
		)
}

export default Header;