import React, { Component } from "react";
import "./AddItem.css";
class AddItem extends Component {
  state = {
    name: "",
    age: "",
  };
  handleChange = (e) => {
    this.setState({
      // using the id to get the name or age
      [e.target.id]: e.target.value,
    });
  };
  //  Input Valdiation
  handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.name.value === "" || e.target.age.value === "") {
      alert("Enter correct name and age");
    } else {
      //console.log(this.state)

      this.props.addItem(this.state);
      this.setState({
        name: "",
        age: "",
      });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholer="Enter name..."
            id="name"
            onChange={this.handleChange}
            value={this.state.name}
          />

          <input
            type="number"
            placeholer="Enter age..."
            id="age"
            onChange={this.handleChange}
            value={this.state.age}
          />

          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}
export default AddItem;
