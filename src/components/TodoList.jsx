import React, { Component } from 'react'
import TodoItem from './TodoItem'

export class TodoList extends Component {
  render() {
    return (
     <ul>
        {this.props.todos.map((todo) => (
             <TodoItem key={todo.id} todo={todo} />
        ))}
     </ul>
    )
  }
}

export default TodoList
