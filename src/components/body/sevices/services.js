import React from 'react'
import './services.css'
 
const Services = () =>{
   
   return(
      
      <div className="services">


         <div className="services-top">

                <div className="services-image">
                  <p style={{ marginBottom: 30, paddingTop: 50}}>Services</p> 
               </div>

         </div>


         <div className="services-bottom"> 

             <div className="service-content">

                 <div className="service-png">
                 <img src={require('../../../assets/service_icons/S3-MM.png').default} className="service-picture" />
                 </div>

                 <div className="service-text">
                 <h1>VFX Rotoscope</h1>
                 </div>

             </div>

             <div className="service-content">

                 <div className="service-png">
                 <img src={require('../../../assets/service_icons/S2-PP.png').default} className="service-picture" />
                 </div>

                 <div className="service-text">
                 <h1>VFX Prep/Paint</h1>
                 </div>
                 
             </div>

             <div className="service-content"> 

                 <div className="service-png">
                 <img src={require('../../../assets/service_icons/S4-K.png').default} className="service-picture" />
                 </div>
 
                 <div className="service-text">
                 <h1>VFX Matchmove</h1>
                 </div>
                 
             </div>

             <div className="service-content">

                 <div className="service-png">
                 <img src={require('../../../assets/service_icons/S1-RS.png').default} className="service-picture" />
                 </div>

                 <div className="service-text">
                 <h1>VFX Keying</h1>
                 </div>
                 
             </div>
         </div>


      </div>
   	)
}

export default Services;

//<p style={{marginTop: -20}}>projects and enlarges individual frames of filmed live action.</p>
/*<p>ONE STOP SOLUTION</p>
                  <p>FOR ALL YOUR CREATIVE NEEDS!</p>*/