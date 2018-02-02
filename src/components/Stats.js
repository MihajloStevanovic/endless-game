import React, { Component } from 'react';

class Stats extends Component {
	constructor(props) {
		super(props)
		this.state = {
			strength : 43,
			vitality : 7658,
			precision : 2345,
			critick : 3548,
      levelProgress: 30
		}
    this.onAddStat = this.onAddStat.bind(this)
	}
  onAddStat(value) {
    const newValue = value[1] + 1,
          newType = value[0],
          obj = {}
    obj[newType] = newValue
    this.setState(obj)
  }
  render() {
    return (
      <div className="stats-list">
      	<ul>
      		<li>Force : { this.state.strength } <button onClick={this.onAddStat.bind(this, ['strength', this.state.strength])}>+</button></li>
      		<li>Vitalité : { this.state.vitality } <button onClick={this.onAddStat.bind(this, ['vitality', this.state.vitality])}>+</button></li>
      		<li>Précision : { this.state.precision } <button onClick={this.onAddStat.bind(this, ['precision', this.state.precision])}>+</button></li>
      		<li>Coup critique : { this.state.critick } <button onClick={this.onAddStat.bind(this, ['critick', this.state.critick])}>+</button></li>
      	</ul>

        <div className="character-level">
          <h2>Michel Le Rouge</h2>
          <div className="level-bar-wrapper">
            <div className="level-bar" style={{width: this.state.levelProgress + '%'}}></div>
            <span className="level">Niveau 72</span>
          </div>  
        </div>
      </div>
    );
  }
}

export default Stats;
