import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import SideNav from './components/SideNav';
import Home from './components/Home';
import Page from './components/Page';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sideNavVisible: true
    };
    this.showSideNav = this.showSideNav.bind(this);
  }

  showSideNav() {
    this.setState({sideNavVisible: !this.state.sideNavVisible});
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" render={(props) => (<SideNav visible={this.state.sideNavVisible} match={props.match} className="red" />)}/>

          <Route exact path="/" component={Home}/>
          <Route path="/food" render={(props) => (<Page url="./data/food.yml" />)}/>
          <Route path="/family" render={(props) => (<Page url="./data/family.yml" />)}/>
          <Route path="/money" render={(props) => (<Page url="./data/money.yml" />)}/>
          <Route path="/immigration" render={(props) => (<Page url="./data/immigration.yml" />)}/>
          <Route path="/game-culture" render={(props) => (<Page url="./data/game-culture.yml" />)}/>
        </div>
      </Router>
    );
  }
}

export default App;
