import React, { Component } from 'react';
import './DisplayOverlay.css';

class DisplayOverlay extends Component {
  constructor(props) {
    super(props);

    var category = 'item';
    var name = this.props.item;
    if (this.props.item==='') {
      category = 'list';
      name = this.props.type;
    }  

    this.state = {
      'category': category,
      'name': name,
    }

    this.delete = this.delete.bind(this);
  }
  
  delete() {
    this.props.item==='' ? this.props.deleteType() : this.props.deleteItem(); 
  }

  render() {
    return (
      <div className="App-DisplayOverlay">
        <div className="message-box">
          <div>Do you want to delete the { this.state.category + ' "' + this.state.name + '" ' } ?</div>
          <div className="overflow-hid"><button className="button-text left" onClick={() => this.props.displayOverlay(false)}>Cancel</button><button className="button-text right" onClick={() => this.delete()}>Delete</button></div>  
        </div>
      </div>
    );
  }
}

export default DisplayOverlay;
