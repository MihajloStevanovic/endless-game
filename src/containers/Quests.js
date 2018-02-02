import React, { Component } from 'react';

class Quests extends Component {
	constructor(props) {
		super(props)
		this.state = {
      cd : 60,
      questOn : false
		}
	}
	onQuestAccept() {
		this.setState({questOn : true})
		this.handleCountDown()
	}
	handleCountDown(state) {
		setTimeout(() => {
			if (this.state.cd === 0) {
				alert('Quest finished !')
			} else {
				this.setState({cd : this.state.cd - 1})
				this.handleCountDown()
			}
		}, 1000);
	}
  render() {
    return (
      <div>
      	{(this.state.questOn === false) &&
      	<ul className="quests-list">
      		<li><button onClick={this.onQuestAccept.bind(this)}>L'antre du dragon</button></li>
      		<li><button>La tombe du chevalier érant</button></li>
      		<li><button> La montagne solitaire</button></li>
      	</ul> }
      	{(this.state.questOn === true) &&
      	<div className="quest-count-down">Temps restant  { this.state.cd }</div> }
      </div>
    );
  }
}

export default Quests;
