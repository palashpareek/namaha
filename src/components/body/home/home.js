import React from 'react'
import ReactPlayer from 'react-player'
import './home.css'

const Home1 = () =>{

	return(

		<div className="home1">
		   
		     <div  className="home-top">
		          <ReactPlayer width='95vw' height='90vh' controls url="https://youtu.be/7sDY4m8KNLc"/>
		     </div>

		      <div  className="home-bottom">

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

                  <div className="home-content-1">
		             <h2>"Action speaks louder than words"</h2>
                     <p>"Connect with us and make your decision worth it."</p>
                  </div>

                   
		         
		     </div>

		</div>

		)
}

export default Home1;