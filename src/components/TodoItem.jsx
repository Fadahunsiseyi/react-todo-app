import React, { Component } from 'react'

export class TodoItem extends Component {
  render() {
    return (
      <div>
        <li>
      <input type='checkbox' checked={this.props.todo.checked} onChange={() => this.props.handleChangeProps()} /> {this.props.todo.title}
      </li>
      </div>
    )
  }
}

export default TodoItem
