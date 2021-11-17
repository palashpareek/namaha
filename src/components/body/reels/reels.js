import React, {useState} from 'react'
import ReactPlayer from 'react-player'
import './reels.css'

const Reels = () =>{

  const code = 12345;

  const[user, setUser] = useState({
    passcode: "" 
  })

  const {passcode} = user;

  const OnInputChange = e =>{
    setUser({...user, [e.target.name]: e.target.value})
  }

	 const showMessage = () =>{
    if(user.passcode==code)
	   alert("Correct passcode!");
     else
     alert("Incorrect passcode!");
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
               <ReactPlayer width='94vw' height='90vh' controls url="https://youtu.be/7sDY4m8KNLc"/>
               </div>


               <div className="bottom-picture">

                <form>
                <input type="password" placeholder="Enter Passcode"
                 required className="reel-input"
                 name="passcode" value={passcode}
                 onChange = {e => OnInputChange(e)}
                 />
                <br/>
                <button className="reel-btn" onClick={()=>showMessage()}>Submit</button>
                </form>


               </div>
         </div>

      </div>
   	)
}

export default Reels;