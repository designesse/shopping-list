import React, { Component } from 'react';

class AddEditTypeBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'isTypeEmptyWarning': true,
      'type': '',
    }

    this.updateType = this.updateType.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateType(event) {
    this.setState({'type': event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.type.length === 0) {
      this.setState({isTypeEmptyWarning: true});
    }
    else {
      this.props.addTypeList(this.state.type);
      this.setState({'type': ''});  
    }
  }

  render() {
    return (
      <div className="App-AddEditTypeBox box">
        <form onSubmit={this.handleSubmit}>
          <h2><textarea type="text" name="type" rows={2} maxLength="30" onChange={this.updateType} value={this.state.type} placeholder={this.state.isTypeEmptyWarning ? "Enter type of shopping list" : ""}></textarea></h2>
          <button className="add whole" type="submit" value="submit">+ Add</button>
          <span className="ex">ex: Grocery, Thirft Store, Birthday Party ... - <span className="bold">max 30 characters</span></span>
        </form>  
      </div>
    );
  }
}

export default AddEditTypeBox;
