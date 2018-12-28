import React, { Component } from 'react';

class CheckableItem extends Component {
  render() {
    return (
      <div className="App-checkableItem border">
        { this.props.item.name }<input className="right" type="submit" value="x" onClick={() => this.props.displayOverlay(true, this.props.type, this.props.item.name) } />
      </div>
    );
  }
}

export default CheckableItem;
