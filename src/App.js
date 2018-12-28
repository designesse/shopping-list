import React, { Component } from 'react';
import './App.css';
import TypeBox from './TypeBox/TypeBox';
import AddEditTypeBox from './AddEditTypeBox/AddEditTypeBox';
import DisplayOverlay from './DisplayOverlay/DisplayOverlay';

class App extends Component {
  constructor(props) {
    super(props);

    var lists = JSON.parse(localStorage.getItem('lists')) ? JSON.parse(localStorage.getItem('lists')) : [];

    this.state = {
      'lists': lists,
      'newType': '',
      'isDisplayOverlay': false,
      'toDeleteType': '',
      'toDeleteItem': ''
    }

    this.addTypeList = this.addTypeList.bind(this);
    this.addTypeItem = this.addTypeItem.bind(this);
    this.deleteType = this.deleteType.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.displayOverlay = this.displayOverlay.bind(this);
  }

  addTypeList(type) {
    var lists = this.state.lists;
    lists.push({'type': type, 'items': []});
    this.setState({'lists': lists, 'newType': ''});
    localStorage.setItem('lists', JSON.stringify(lists));
  }

  addTypeItem(type, item) {
    var lists = this.state.lists;
    for (var i=0; i<lists.length; i++) {
      if (lists[i]['type'] === type) {
        var items = lists[i]['items'];
        items.push({'name': item});
        lists[i]['items'] = items;
        this.setState({'lists': lists});
        localStorage.setItem('lists', JSON.stringify(lists));
        break;
      }
    }
  }

  deleteType() {
    var lists = this.state.lists;
    var type = this.state.toDeleteType;
    for (var i=0; i<lists.length; i++) {
      if (lists[i]['type'] === type) {
        lists.splice(i, 1);
        this.setState({'lists': lists});
        localStorage.setItem('lists', JSON.stringify(lists));
        break;
      }
    }
    this.setState({'isDisplayOverlay': false});
  }

  deleteItem() {
    var lists = this.state.lists;
    var type = this.state.toDeleteType;
    var item = this.state.toDeleteItem;
    for (var i=0; i<lists.length; i++) {
      if (lists[i]['type'] === type) {
        var items = lists[i]['items'];
        for (var j=0; j<items.length; j++) {
          if (items[j]['name'] === item ) {
            items.splice(j, 1);
            this.setState({'lists': lists});
            localStorage.setItem('lists', JSON.stringify(lists));
            break;
          }
        }
      }
    }
    this.setState({'isDisplayOverlay': false, 'toDeleteItem': ''});
  }

  displayOverlay(isDisplayOverlay, type, item ='') {
    this.setState({'isDisplayOverlay': isDisplayOverlay});
    this.setState({'toDeleteType': type});
    this.setState({'toDeleteItem': item});
  }

  render() {
    return (
      <div className="App">
        <div className={ this.state.isDisplayOverlay ? 'disabled':'' } >
          <header className="App-header">
            <h1 className="center"><span className="border-bottom pad-hor">Shopping List</span></h1>
            <div id="dashboard">
              { this.state.lists.map((list, i) =>
                <TypeBox key={i}list={list} type={list['type']} addTypeItem={this.addTypeItem} displayOverlay={this.displayOverlay} />
              )}
              <AddEditTypeBox addTypeList={this.addTypeList} newType={this.state.newType} />
            </div>
          </header>
        </div>
        { this.state.isDisplayOverlay && <DisplayOverlay displayOverlay={this.displayOverlay} deleteType={this.deleteType} deleteItem={this.deleteItem} type={this.state.toDeleteType} item={this.state.toDeleteItem} /> }
      </div>
    );
  }
}

export default App;
