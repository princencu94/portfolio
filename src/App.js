import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import GalleryOverview from './components/gallery-overview/gallery-overview.component';


class App extends React.Component {
  
  

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/about">
            </Route>
            <Route path="/contact">
            </Route>
            <Route path="/">
              <GalleryOverview/>
            </Route>
          </Switch>
          
        </div>
    </Router>
    
    )
  }
  
}


export default App;
