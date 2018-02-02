import React, { Component } from 'react';

class Stuff extends Component {
	constructor(props) {
		super(props)
		this.state = {
      stuff : {
        head : {

        },
        body : {
          
        },
        hand : {
          
        },
        feet : {
          
        }
      }
		}
	}
  render() {
    return (
      <div className="stuff-list">
      	<ul>
      		<li></li>
      		<li></li>
      		<li></li>
      		<li></li>
      		<li></li>
      		<li></li>
      		<li></li>
      		<li></li>
      		<li></li>
      		<li></li>
      	</ul>
      </div>
    );
  }
}

export default Stuff;
