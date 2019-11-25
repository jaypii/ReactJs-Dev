import React, { Component } from "react";
import {Route,HashRouter} from "react-router-dom";

// Components
import TopNav from './components/topnav';
import Footer from './components/footer';

// Pages
import Home from "./pages/Home";
import Stuff from "./pages/Stuff";
import Stuff2 from "./pages/Stuff2";
import Contact from "./pages/Contact";

class App extends Component {
  render() {
    return (
        <HashRouter>
        <div>
            <TopNav />
            <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/stuff2" component={Stuff2}/>
            <Route path="/contact" component={Contact}/>
            <Footer />
        </div>
        </HashRouter>
    );
  }
}
 
export default App;