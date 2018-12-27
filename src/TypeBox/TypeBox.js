import React, { Component } from 'react';
import CheckableItem from '../CheckableItem/CheckableItem';

class TypeBox extends Component {
  render() {
    return (
      <div className="App-TypeBox box">
        <h2>{ this.props.list['type'] }</h2>
        { this.props.list['items'].map((item, i) =>
          <CheckableItem key={i} item={item} />
        )}
      </div>
    );
  }
}

export default TypeBox;
