import React, { Component } from 'react'

export class TodoItem extends Component {
  render() {
    return (
      <li>
       {this.props.todo.title}
      </li>
    )
  }
}

export default TodoItem
