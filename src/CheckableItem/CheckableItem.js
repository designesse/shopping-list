import React, { Component } from 'react';

class CheckableItem extends Component {
  render() {
    return (
      <div className="App-checkableItem border">
        { this.props.item.name }
      </div>
    );
  }
}

export default CheckableItem;
