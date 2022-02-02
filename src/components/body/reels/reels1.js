import React, {useState, useEffect} from 'react'
import VideoPlayer from 'react-video-js-player'
import Video1 from '../../../assets/main_show_reel2.mp4'
import poster from '../../../assets/home_images/New1.jpg'
import Video from '../../../assets/show_reel.mp4'
import {useHistory} from 'react-router-dom';
import './reels.css'

const Reels = () =>{

  const passcode = sessionStorage.getItem("passcode");

  useEffect(() =>{
       sessionStorage.setItem("passcode", "");
  })


  if(passcode==12345)
  {
    return(
      
      <div className="reels">

         <div className="reels-top"> 

               <div className="reel-image">
                  <p>Showreel</p>
               </div>         

         </div>

         <div  className="reels-bottom">
               
               <div className="reel-video">
               <VideoPlayer width='800' height='420'  src={Video1}
               poster={poster}
               playbackRates={[0.5,1,1.25,1.5,1.75,2]}
               />
               </div>

         </div>
 
      </div>
    )
  }
  else
  {
    return(
           <div className="reels">

         <div className="reels-top">

               <div className="reel-image">
                  <p>ERROR!</p>
               </div>         

         </div>

         <div  className="reels-bottom">


               <div className="bottom-picture">
                <p className="para">Please go to Showreel and enter Passcode again!</p>
               </div>
         </div>

      </div>
      )
  }
   
   
}

export default Reels;