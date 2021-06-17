import logo from './logo.svg';
import './App.css';
import Hero from './Hero.js'
import Footer from './Footer.js'
import Carousel from './Carousel.js'
import Card from './card-ui'
import { Button } from "reactstrap";

import Navbar from './Navbar.js';

import PersonalInfo from './Form.js'
import { BrowserRouter as Router,Switch,Link} from "react-router-dom";
import Jaipur from "./Jaipur/Jaipur1.js";
import Agra from "./Agra/Agra1.js";
import Route from 'react-router-dom/Route';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Services from './Services.js';
import Home from './Home.js';

function App() {
  return (
  
    <div className="App">
     <Navbar/>
   
      <Router>
   
   
     
        <Switch>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/card" component={Card}/>
        <Route exact path="/hero" component={Hero}/>
        <Route exact path="/form" component={PersonalInfo}/>
        <Route exact path="/footer" component={Footer}/>
        <Route exact path="/navbar" component={Navbar}/>
        <Route exact path="/jaipur" component={Jaipur}/>
        <Route exact path="/agra" component={Agra}/>
        </Switch>
        
     
      

    
    
    
    
    </Router>
     
  
     
      

    
    
    
    </div>
  
     
   
    
    
    
    
  );
}

export default App;
