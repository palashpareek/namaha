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
            <p style={{marginTop: -20}}>Give us the intermediary record of the shot with a brief portrayl.</p>
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
            <p style={{marginTop: -20}}>We will review the shots, understand your project needs and requirements,
and provide quote and delivery schedules for you.</p>
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
            <h1>OUTSOURCE</h1>
            <p style={{marginTop: -20}}>Our creative visual effects artists will continue with the process when you confirm the quote and delivery schedule.</p>
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
            <p style={{marginTop: -20}}>We will deliver the shots on time as planned.</p>
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
            <p style={{marginTop: -20}}>You check the work done & accept (or) provide the feedback, we will issue the invoice upon approval of the deliverable.</p>
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
            <p style={{marginTop: -20}}>Closure of the project: build confidence through excellence of the job and delivery on time.</p>
            </div>

         </div>

      </div>
   	)
}

export default Pipe;