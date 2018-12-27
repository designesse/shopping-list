import React, { Component } from 'react';
import CheckableItem from '../CheckableItem/CheckableItem';
import AddEditItem from '../AddEditItem/AddEditItem';

class TypeBox extends Component {
  render() {
    return (
      <div className="App-TypeBox box">
        <h2>{ this.props.list['type'] }</h2>
        { this.props.list['items'].map((item, i) =>
          <CheckableItem key={i} item={item} />
        )}
        <AddEditItem type={this.props.type} addTypeItem={this.props.addTypeItem} />
      </div>
    );
  }
}

export default TypeBox;
