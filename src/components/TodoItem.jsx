import React, { Component } from "react";
import styles from "./TodoItem.module.css"

export class TodoItem extends Component {
  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    }
    const { completed, id, title } = this.props.todo
    return (
      <div>
        <li className={styles.item}>
          <input
          className={styles.checkbox}
            type="checkbox"
            checked={completed}
            onChange={() => this.props.handleChangeProps(id)}
          />
          <button
            onClick={() => this.props.deleteTodoProps(id)}
          >
            Delete
          </button>
          <span style={completed ? completedStyle : null} >
          {title}
          </span>
        </li>
      </div>
    );
  }
}

export default TodoItem;
