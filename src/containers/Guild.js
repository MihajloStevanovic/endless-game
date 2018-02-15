import React, { Component } from 'react';
//import AppRouter from './AppRouter';

class Guild extends Component {
  render() {
    return (
      <div>
      	<h2>Membres de la guilde Endless</h2>
      	<table class="guild-members">
      		<tr>
      			<th>Nom</th>
      			<th>Niveau</th>
      			<th>Rang</th>
      		</tr>
      		<tr>
      			<td>Sieg</td>
      			<td>272</td>
      			<td>Chef</td>
      		</tr>
      		<tr>
      			<td>Thorkh</td>
      			<td>271</td>
      			<td>Presque chef</td>
      		</tr>
      		<tr>
      			<td>Liath</td>
      			<td>270</td>
      			<td>Presque chef</td>
      		</tr>
      		<tr>
      			<td>Despe</td>
      			<td>269</td>
      			<td>Pécore</td>
      		</tr>
      		<tr>
      			<td>Anou</td>
      			<td>268</td>
      			<td>Pécore</td>
      		</tr>
      	</table>
      </div>
    );
  }
}

export default Guild;
