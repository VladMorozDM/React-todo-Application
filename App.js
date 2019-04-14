import React, {Component} from 'react';
import ReactDom from 'react-dom';

import ToDoItem from './components/ToDoItem'    
import todosData from './todosData' 
import './style.css'

 class App extends Component {
   constructor(){
     super();
     this.state = {
       data: todosData
     }
    this.handleChange = this.handleChange.bind(this)
   }
   handleChange(id){
     this.setState( prevState => {
       const newState = prevState.data.map( item => {
         if(item.id === id) item.completed = !item.completed
         return item
       })
      return {
        data: newState
      }
     })
   }
   render(){
    const todoComponents = this.state.data.map(item => (
      <ToDoItem  key = {item.id} details = {item} handleChange={this.handleChange}/>
    ))
    return ( 
          <div className="todo-list">
              {todoComponents}
              
          </div>
    )
  }
}

export default App