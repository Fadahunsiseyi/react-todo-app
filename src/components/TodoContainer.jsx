import React, { Component } from 'react'
import TodoList from './TodoList';

export class TodoContainer extends Component {
    state = {
        todos: [
          {
            id: 1,
            title: "Setup development environment",
            completed: true
          },
          {
            id: 2,
            title: "Develop website and add content",
            completed: false
          },
          {
            id: 3,
            title: "Deploy to live server",
            completed: false
          }
        ]
       };
  render() {
    return (
     <TodoList  todos={this.state.todos}/>
    )
  }
}

export default TodoContainer
