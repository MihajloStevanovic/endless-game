import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Quests from './containers/Quests';
import Character from './containers/Character';
import Guild from './containers/Guild';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="header">
            <div className="header-bar"></div>
          </header> 
          <nav className="nav">
            <ul>
              <div>
                <Link to="/">overview</Link>
                <Link to="/quests">quêtes</Link>
                <Link to="/character">personnage</Link>
                <Link to="/guild">guilde</Link>
              </div>
            </ul>
          </nav>
          <main className="content">
            <Route path="/overview" component={App}/>
            <Route path="/quests" component={Quests}/>
            <Route path="/character" component={Character}/>
            <Route path="/guild" component={Guild}/>
            </main>
        </div>
      </Router>
    );
  }
}

export default App;
