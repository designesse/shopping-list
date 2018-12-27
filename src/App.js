import React, { Component } from 'react';
import './App.css';
import TypeBox from './TypeBox/TypeBox';
import AddEditTypeBox from './AddEditTypeBox/AddEditTypeBox';

class App extends Component {
  constructor(props) {
    super(props);

    var lists = JSON.parse(localStorage.getItem('lists')) ? JSON.parse(localStorage.getItem('lists')) : [];

    this.state = {
      'lists': lists,
      'newType': ''
    }

    this.addTypeList = this.addTypeList.bind(this);
  }

  addTypeList(type) {
    var lists = this.state.lists;
    lists.push({'type': type, 'items': []});
    this.setState({'lists': lists, 'newType': ''});
    localStorage.setItem('lists', JSON.stringify(lists));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="center"><span className="border-bottom pad-hor">Shopping List</span></h1>
          <div id="dashboard">
            { this.state.lists.map((list, i) =>
              <TypeBox key={i}list={list} />
            )}
            <AddEditTypeBox addTypeList={this.addTypeList} newType={this.state.newType} />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
