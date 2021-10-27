import React from 'react'
import './about.css'

const About = () =>{
   
   return( 
      
       <div className="about">

             <p className="about-title">Who we are?</p>

          <div className="about-top">
               
                <div className="about-image">
                       <img src={require('../../../assets/vfx-about.jpg').default} className="about-picture" />
                </div>

                <div className="about-info">

                  <div className="about-content-1">
                     <p><span className="about-imp">Namaha VFX Studios</span> creates visuals that bring about he most realistic representation and zeal to the ideas.</p>
                  </div>

                   <div className="about-content-2">
                     <p>We specialze in VFX Rotoscope, Keying, Prep/Paint, and Matchmove services. Our company works with reputed clients globally for commercials and film projects episodic content for VFX endeavours.</p>
                   </div>

                   <div className="about-content-1">
                     <p>We design clients' vision by determining the mission that lifts and inspires us to bring out the best and flourish creativity embarking in our work.</p>
                    </div>

                    <div className="about-content-2">
                      <p>Effective potentials to create spectacular visuals, technical expertise, and specialized experience are our unique artistic traits.</p>
                    </div>

                    <div className="about-content-1">
                       <p>VFX Supervisors and show leads having 15 + yrs experience drive the best approaches focusing on maximizing the production quality and achieves what lies ahead.</p>
                    </div>

                    <div className="about-content-2">
                    <p>We pledge that your script is in the right doors to connect your visionary ideas to the VFX destiny.</p>
                    </div>

                </div>
          </div>


          <div className="about-bottom">

                  <div className="proverb-image">
                       <img src={require('../../../assets/vfx-about.jpg').default} className="proverb-picture" />
                       <div className="proverb-text">This is a proverb</div>
                  </div>

                  <div className="proverb-image">
                       <img src={require('../../../assets/vfx-about.jpg').default} className="proverb-picture" />
                        <div className="proverb-text">This is a proverb</div>
                  </div>

                  <div className="proverb-image">
                       <img src={require('../../../assets/vfx-about.jpg').default} className="proverb-picture"  />
                        <div className="proverb-text">This is a proverb</div>
                  </div>

                  <div className="proverb-image">
                       <img src={require('../../../assets/vfx-about.jpg').default} className="proverb-picture"  />
                        <div className="proverb-text">This is a proverb</div>
                  </div>

                  <div className="proverb-image">
                       <img src={require('../../../assets/vfx-about.jpg').default} className="proverb-picture"  />
                        <div className="proverb-text">This is a proverb</div>
                  </div>
          </div>

       </div>
   	)
}

export default About;