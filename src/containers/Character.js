import React, { Component } from 'react';

import Stats from '../components/Stats';
import ProfilPicture from '../components/ProfilPicture';
import Inventory from '../components/Inventory';
import Stuff from '../components/Stuff';

class Character extends Component {
  render() {
    return (
      <div>
      	<Stats />
      	<ProfilPicture />
      	<Inventory />
      	<Stuff />
      </div>
    );
  }
}

export default Character;
