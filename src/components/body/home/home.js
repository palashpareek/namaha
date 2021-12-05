import React from 'react'
import ReactPlayer from 'react-player'
import Separator1 from '../../common/separator1/separator1'
import Video from '../../../assets/show_reel.mp4'
import './home.css'

const Home1 = () =>{

	return(
 
		<div className="home1">
		   
		     <div  className="home-top">
		          <ReactPlayer width='100vw' height='100vh' controls url="https://youtu.be/7sDY4m8KNLc"/>
		     </div>

		      <div  className="home-bottom">

		         <p className="home-title">About Namaha VFX Studio</p>
		         

		         <div className="home-separator1">

		         </div>

		         <div className="home-separator">

		         </div>

		         <div className="home-separator1">

		         </div>


		         <div className="home-content">
		           <p>Namaha VFX Studios creates visuals that bring about the 
		           most realistic representation and zeal to the ideas.
		           </p>

		            <img src={require('../../../assets/vfx-about.jpg').default} className="home-picture"/>
		         </div>


		           <p className="home-para">We specialze in VFX Rotoscope, Keying, Prep/Paint, and Matchmove services. Our company works with reputed clients globally for commercials and film projects episodic content for VFX endeavours.</p>

                    <p className="home-para">We design clients' vision by determining the mission that lifts and inspires us to bring out the best and flourish creativity embarking in our work.</p>



		         <div className="home-content">
		            <img src={require('../../../assets/vfx-about.jpg').default} className="home-picture"/>

		            <p>VFX Supervisors and show leads having 15+ years of experience
		               drive the best appraches focusing on maximizing the production
		               quality and achieves what lies ahead.
		           </p>
		         </div> 



		         <p className="home-para">Effective potentials to create spectacular visuals, technical expertise, and specialized experience are our unique artistic traits.</p>
		          <p className="home-para" style={{marginBottom:70}}>We pledge that your script is in the right doors to connect your visionary ideas to the VFX destiny.</p>



		           <div className="home-content-1">
		             <h2>"All the glitters are not gold"</h2>
                     <p>We are some of the best glitters in the industry. ie., our talented artists, to make your vision gold.</p>
                  </div>

                  <div className="home-content-2">
		             <h2>"Opportunity plus instinct make a profit"</h2>
                     <p>We value every opportunity, create impacts binding our creative instincts, and derive the best profits for our clients.</p>
                  </div>

                  <div className="home-content-1">
		             <h2>"First things first"</h2>
                     <p>"Fulfilling our client's priorities", "Honouring them for the trust", "Deliver the finest quality and stand out of the crowd"</p>
                  </div>

                  <div className="home-content-2">
		             <h2>"It's the tip of the iceberg"</h2>
                     <p>Setting powerful operational strategies works best for us to create quality projects even in the tight deadlines.</p>
                  </div>

                  <div className="home-content-1" style={{marginBottom:50}}>
		             <h2>"Action speaks louder than words"</h2>
                     <p>"Connect with us and make your decision worth it."</p>
                  </div>

                   
		         
		     </div>

		</div>

		)
}

export default Home1;

/**/

/*<video autoPlay loop muted 
		          style={{
		          	width:'100%',
		          	height:'100%'
		          }}
		          >
		          <source src={Video} type="video/mp4"/>
		          </video>*/