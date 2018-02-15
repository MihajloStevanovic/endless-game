import React, { Component } from 'react';

class Inventory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  drop(ev) {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("text");
      ev.target.appendChild(document.getElementById(data));
  }

  allowDrop(ev) {
    ev.preventDefault();
  }
  render() {
    return (
      <div className="inventory-list">
        <ul>
          <li id="div1" onDrop={this.drop.bind(this)} onDragOver={this.allowDrop.bind(this)}><img id="drag1" alt="alt" src="https://www.w3schools.com/html/img_w3slogo.gif" draggable="true" onDragStart={this.drag.bind(this)} /></li>
          <li id="div2" onDrop={this.drop.bind(this)} onDragOver={this.allowDrop.bind(this)}></li>
          <li id="div3" onDrop={this.drop.bind(this)} onDragOver={this.allowDrop.bind(this)}></li>
          <li id="div4" onDrop={this.drop.bind(this)} onDragOver={this.allowDrop.bind(this)}><img id="drag2" alt="alt" src="https://www.w3schools.com/html/img_w3slogo.jpg" draggable="true" onDragStart={this.drag.bind(this)} /></li>
          <li id="div5" onDrop={this.drop.bind(this)} onDragOver={this.allowDrop.bind(this)}></li>
          <li id="div6" onDrop={this.drop.bind(this)} onDragOver={this.allowDrop.bind(this)}></li>
          <li id="div7" onDrop={this.drop.bind(this)} onDragOver={this.allowDrop.bind(this)}></li>
          <li id="div8" onDrop={this.drop.bind(this)} onDragOver={this.allowDrop.bind(this)}><img id="drag3" alt="alt" src="https://www.w3schools.com/html/img_w3slogo.png" draggable="true" onDragStart={this.drag.bind(this)} /></li>
          <li id="div9" onDrop={this.drop.bind(this)} onDragOver={this.allowDrop.bind(this)}></li>
          <li id="div10" onDrop={this.drop.bind(this)} onDragOver={this.allowDrop.bind(this)}></li>
        </ul>
      </div>
    );
  }
}

export default Inventory;
