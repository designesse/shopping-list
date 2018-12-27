import React, { Component } from 'react';

class AddEditItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'isItemEmptyWarning': true,
      'item': '',
    }

    this.updateItem = this.updateItem.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateItem(event) {
    this.setState({'item': event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.item.length === 0) {
      this.setState({isItemEmptyWarning: true});
    }
    else {
      this.props.addTypeItem(this.props.type, this.state.item);
      this.setState({'item': ''});  
    }
  }

  render() {
    return (
      <div className="App-AddEditItem">
        <form onSubmit={this.handleSubmit}>
          <div className="overflow-hid">
            <textarea className="fourth-3 h-70px left" type="text" name="type" rows={2} maxLength="30" onChange={this.updateItem} value={this.state.item} placeholder={this.state.isItemEmptyWarning ? "Enter item" : ""}></textarea>
            <button className="add fourth-1 h-70px right" type="submit" value="submit">+</button>
          </div>
          <div className="bold ex">30 characters max</div>
        </form>  
      </div>
    );
  }
}

export default AddEditItem;
