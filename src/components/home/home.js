import React from 'react'
import Header from '../header/header'
import Body from '../body/body'
import Footer from '../footer/footer'
import {BrowserRouter as Router} from 'react-router-dom'
import './home.css'

const Home = () =>{

	return (

    <Router>

        <div className="home">


          <div>
             <Header />
          </div>

  
           <div className="body">
             <Body />
          </div>


           <div>
             <Footer />
          </div>
         


        </div>

</Router>
          
		)
}

export default Home;