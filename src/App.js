import React, { Component } from 'react';
import './App.css';
import TodoItems from './components/TodoItems/TodoItems';
import AddItem from './components/AddItem/AddItem'

class App extends Component {
  state = {
    items: [
      { id: 1, name: "Mekko", age: 22 },
      
      { id: 2, name: "Mark", age: 23 },
      
      { id: 3, name: "Wahba" , age: 44},
    ]
  }
  deleteItem = (id) => {
    // let items = this.state.items;
    // let i = items.findIndex(item => item.id === id)
    // items.splice(i, 1)
    // this.setState({items})

    let items = this.state.items.filter(item => {
      return item.id !== id
    })
    this.setState({items})
    //console.log(id)
  }
  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({items})
  }
  render() {
    return (
      <div className="App container">
        <h1 className="text-center">Todo List</h1>
        <TodoItems items={this.state.items} deleteItem={this.deleteItem} />
        <AddItem addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
