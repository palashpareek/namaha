import React, {useState, useEffect} from 'react'
import ReactPlayer from 'react-player'
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
               <ReactPlayer width='95vw' height='90vh' controls url="https://youtu.be/7sDY4m8KNLc"/>
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