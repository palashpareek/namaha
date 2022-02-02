import React from 'react'
import './pipe.css'

const Pipe = () =>{
   
   return(
      
      <div className="pipeline">

         <div style={{marginTop: 40}} className="pipeline-content">

            <div className="pipeline-icon">
            <img src={require('../../../assets/pipeline_icons/1.png').default} className="service-picture" />
            </div>

            <div className="pipeline-text">
            <h1>BID PACKAGE</h1>
            <p style={{marginTop: -20}}>Give us the script anecdotes with a brief portrayal.</p>
            </div>

         </div>

         
         <div class="center-con">
         <div class="line-v"></div>
      <div class="round">
        <span className="arrow"></span>
        <span className="arrow"></span>
        <span className="arrow"></span>
        <span className="arrow"></span>
       </div>
       <div class="line-v"></div>
         </div>
         


         <div className="pipeline-content">

            <div className="pipeline-icon">
            <img src={require('../../../assets/pipeline_icons/2.png').default} className="service-picture" />
            </div>

            <div className="pipeline-text">
            <h1>IDEA</h1>
            <p style={{marginTop: -20}}>We analyse and bid on your ideas after leaving them in our cups and provide a cost-savvy quote and the delivery timeline.</p>
            </div>

         </div>

         <div class="center-con">
         <div class="line-v"></div>
      <div class="round">
        <span className="arrow"></span>
        <span className="arrow"></span>
        <span className="arrow"></span>
        <span className="arrow"></span>
       </div>
       <div class="line-v"></div>
         </div>


         <div className="pipeline-content">

            <div className="pipeline-icon">
            <img src={require('../../../assets/pipeline_icons/4.png').default} className="service-picture" />
            </div>

            <div className="pipeline-text">
            <h1>PRODUCTION</h1>
            <p style={{marginTop: -20}}>Our creative visual effects artist will work after you dial us down the confirmation for the project.</p>
            </div>

         </div>


         <div class="center-con">
         <div class="line-v"></div>
      <div class="round">
        <span className="arrow"></span>
        <span className="arrow"></span>
        <span className="arrow"></span>
        <span className="arrow"></span>
       </div>
       <div class="line-v"></div>
         </div>


         <div className="pipeline-content">

            <div className="pipeline-icon">
            <img src={require('../../../assets/pipeline_icons/3.png').default} className="service-picture" />
            </div>

            <div className="pipeline-text">
            <h1>DELIVERY</h1>
            <p style={{marginTop: -20}}>Delivering the cords on time, shines through in our service.</p>
            </div>

         </div>


         <div class="center-con">
         <div class="line-v"></div>
      <div class="round">
        <span className="arrow"></span>
        <span className="arrow"></span>
        <span className="arrow"></span>
        <span className="arrow"></span>
       </div>
       <div class="line-v"></div>
         </div>


         <div className="pipeline-content"> 

            <div className="pipeline-icon">
            <img src={require('../../../assets/pipeline_icons/5.png').default} className="service-picture" />
            </div>

            <div className="pipeline-text">
            <h1>APPROVAL</h1>
            <p style={{marginTop: -20}}>You review the visual effects feature and grant us the approval; succeeding to that, we will issue the invoice upon the consent of the deliverable.</p>
            </div>

         </div>


         <div class="center-con">
         <div class="line-v"></div>
      <div class="round">
        <span className="arrow"></span>
        <span className="arrow"></span>
        <span className="arrow"></span>
        <span className="arrow"></span>
       </div>
       <div class="line-v"></div>
         </div> 


         <div  style={{marginBottom: 40}}className="pipeline-content">

            <div className="pipeline-icon">
            <img src={require('../../../assets/pipeline_icons/6.png').default} className="service-picture" />
            </div>

            <div className="pipeline-text">
            <h1>COMPLETION</h1>
            <p style={{marginTop: -20}}>Closure of the project, we build trust through the excellence of the job that sounds the success and beams with high production quality on the completion stage.</p>

            </div>

         </div>

      </div>
   	)
}

export default Pipe;