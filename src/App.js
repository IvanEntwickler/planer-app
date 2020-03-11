import React from 'react';
import './App.css';
import TodoInput from './todo-input/todo-input.component';
import TodoMaps from './todo-maps/todo-maps.component';

class Todolist extends React.Component{
  constructor(){
    super();
    this.state ={
      currentItem:{text:'', key:''},
      todoItems:[],
    }
  }

  removeItem = key => {
    
    const filteredItems = this.state.todoItems.filter(item => {
      return item.key !== key
    })
    this.setState({
      todoItems: filteredItems
    })
  }

  inputElement = React.createRef()

  handleChange = event =>{
    const itemText = event.target.value
    const currentItem ={
      text: itemText, key: Date.now()}
      this.setState({currentItem})
    }

  handleSubmit = event =>{
    event.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== ''){
      console.log(newItem)
      const todoItems = [...this.state.todoItems, newItem]
      this.setState({
        todoItems: todoItems,
         currentItem: 
         {text:'', key:''}
        })
    }
  }



  render(){
    const{todoItems, currentItem}=this.state;
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Todolist Planer</h1>
        <TodoInput 
        onhandleSubmit={this.handleSubmit} 
        onhandleChange={this.handleChange}
        inputElement={this.inputElement}
        currentItem={currentItem}
        />
        <TodoMaps 
        entries={todoItems} 
        item={currentItem} 
        removeItem={this.removeItem}/>
        
      </header>
    </div>
  );
}
}

export default Todolist;
