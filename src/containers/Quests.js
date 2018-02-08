import React, { Component } from 'react';

class Quests extends Component {
	constructor(props) {
		super(props)
		this.state = {
      cd : 60,
      questSelected : false,
      questOn : undefined
		}
    this.onQuestClick = this.onQuestClick.bind(this)
	}
	onQuestClick(quest) {
		this.setState({questOn : quest})
	}
	onQuestSelect() {
		this.setState({questSelected : true})
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
      	{(this.state.questSelected === false) &&
      	<ul className="quests-list">
      		<li><button className="button" onClick={this.onQuestClick.bind(this, '1')}>L'antre du dragon</button>
      			{(this.state.questOn === '1') &&
      			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. .</p> }
      			{(this.state.questOn === '1') &&
      			<button onClick={this.onQuestSelect.bind(this)}>Lancer la quête</button> }
      		</li>
      		<li><button className="button" onClick={this.onQuestClick.bind(this, '2')}>La tombe du chevalier érant</button>
      			{(this.state.questOn === '2') &&
      			<p>lorem ipsum...</p> }
      			{(this.state.questOn === '2') &&
      			<button onClick={this.onQuestSelect.bind(this)}>Lancer la quête</button> }
      		</li>
      		<li><button className="button" onClick={this.onQuestClick.bind(this, '3')}> La montagne solitaire</button>
      			{(this.state.questOn === '3') &&
      			<p>lorem ipsum...</p> }
      			{(this.state.questOn === '3') &&
      			<button onClick={this.onQuestSelect.bind(this)}>Lancer la quête</button> }
      		</li>
      	</ul> }
      	{(this.state.questSelected === true) &&
      	<div className="quest-count-down">Temps restant  { this.state.cd }</div> }
      </div>
    );
  }
}

export default Quests;
