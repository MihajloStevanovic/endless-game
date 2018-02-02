import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from './App';
import Quests from './containers/Quests';
import Character from './containers/Character';
import Guild from './containers/Guild';

const AppRouter = () => {
  return (
  	<div>
      <Route path='/' component={App} />
      <Route path="/overview" component={App}/>
      <Route path="/quests" component={Quests}/>
      <Route path="/character" component={Character}/>
      <Route path="/guild" component={Guild}/>
      <Route path="*" component={App}/>
    </div>
  )
}

export default AppRouter