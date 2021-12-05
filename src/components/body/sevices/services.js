import React from 'react'
import './services.css'

const Services = () =>{
   
   return(
      
      <div className="services">


         <div className="services-top">

                <div className="services-image">
                  <p style={{fontSize: 20, marginBottom: 30, paddingTop: 50}}>Services</p> 
                  <p>ONE STOP SOLUTION</p>
                  <p>FOR ALL YOUR CREATIVE NEEDS!</p>
               </div>

         </div>


         <div className="services-bottom">

             <div className="service-content">

                 <div className="service-png">
                 <img src={require('../../../assets/vfx-about.jpg').default} className="service-picture" />
                 </div>

                 <div className="service-text">
                 <h1>VFX Rotoscope</h1>
                 <p style={{marginTop: -20}}>projects and enlarges individual frames of filmed live action.</p>
                 </div>

             </div>

             <div className="service-content">

                 <div className="service-png">
                 <img src={require('../../../assets/vfx-about.jpg').default} className="service-picture" />
                 </div>

                 <div className="service-text">
                 <h1>VFX Prep/Paint</h1>
                 <p style={{marginTop: -20}}>projects and enlarges individual frames of filmed live action.</p>
                 </div>
                 
             </div>

             <div className="service-content">

                 <div className="service-png">
                 <img src={require('../../../assets/vfx-about.jpg').default} className="service-picture" />
                 </div>

                 <div className="service-text">
                 <h1>VFX Matchmove</h1>
                 <p style={{marginTop: -20}}>projects and enlarges individual frames of filmed live action.</p>
                 </div>
                 
             </div>

             <div className="service-content">

                 <div className="service-png">
                 <img src={require('../../../assets/vfx-about.jpg').default} className="service-picture" />
                 </div>

                 <div className="service-text">
                 <h1>Keying</h1>
                 <p style={{marginTop: -20}}>projects and enlarges individual frames of filmed live action.</p>
                 </div>
                 
             </div>
         </div>


      </div>
   	)
}

export default Services;