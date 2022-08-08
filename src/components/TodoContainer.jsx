import React, { Component } from 'react'

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
    <ul>
         {this.state.todos.map((todo) => (
        <li> {todo.title} </li>
     ))}
    </ul>
    )
  }
}

export default TodoContainer
