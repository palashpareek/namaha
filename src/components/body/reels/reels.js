import React, {useState} from 'react'
import ReactPlayer from 'react-player'
import {useHistory} from 'react-router-dom';
import Video from '../../../assets/show_reel.mp4'
import './reels.css'

const Reels = () =>{ 

  const code = 12345;
  let history = useHistory();

  const[user, setUser] = useState({
    passcode: ""
  })

  const {passcode} = user;

  const OnInputChange = e =>{
    setUser({...user, [e.target.name]: e.target.value})
  }

 const showMessage = () =>{
    if(user.passcode==code)
    {
      sessionStorage.setItem("passcode", user.passcode)
      history.push("/reels1");
    }
      
     else
     alert("Incorrect Passcode!!");  
	}

   
   return(
      
      <div className="reels">

         <div className="reels-top">

               <div className="reel-image">
                  <p>Showreel</p>
               </div>         

         </div>

         <div  className="reels-bottom">


               <div className="bottom-picture"> 

                <video autoPlay loop muted className="reels-bg-video">
                <source src={Video} type="video/mp4"/>
                 </video>

                <form>
                <input type="password" placeholder="Enter Passcode"
                 required className="reel-input"
                 name="passcode" value={passcode}
                 onChange = {e => OnInputChange(e)}
                 />
                <br/>
                <button className="reel-btn" onClick={() => showMessage()}>Submit</button>
                </form>
           

               </div>
         </div>

      </div>
   	)
}

export default Reels;