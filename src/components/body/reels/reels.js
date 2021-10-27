import React from 'react'
import './reels.css'

const Reels = () =>{

	const showMessage = () =>{
		alert("Incorrect passcode!")
	}
   
   return(
      
      <div className="reels">

         <div className="reels-top">

               <div className="reel-image">
                  <p>Showreel</p>
               </div>         

         </div>

         <div  className="reels-bottom">

               <div className="reel-video">

                <form>
                <input type="password" placeholder="Enter Passcode" required className="reel-input"/>
                <br/>
                <button className="reel-btn" onClick={()=>showMessage()}>Submit</button>
                </form>


               </div>
         </div>

      </div>
   	)
}

export default Reels;