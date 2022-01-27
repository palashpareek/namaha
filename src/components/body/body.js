import React from 'react'
import About from './about/about'
import Home from './home/home'
import Contact from './contact/contact'
import Cred from './credentials/credentials'
import Pipe from './pipeline/pipe'
import Reels from './reels/reels'
import Reels1 from './reels/reels1'
import Services from './sevices/services'
import {Route, Switch} from 'react-router-dom'
import './body.css'

const Body = () =>{
   
   return(

      <div className="body">

    <Switch>

      <div>
 
      <Route exact path='/namaha' component={Home}></Route>

      <Route exact path='/contact' component={Contact}></Route>

      <Route exact path='/pipeline' component={Pipe}></Route>

      <Route exact path='/reels' component={Reels}></Route>

      <Route exact path='/reels1' component={Reels1}></Route>

      <Route exact path='/services' component={Services}></Route>

      </div>

  </Switch>

      </div>

   

   	)
}

export default Body;

/*<Route exact path='/credentials' component={Cred}></Route>*/