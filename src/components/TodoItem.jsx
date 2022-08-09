import React, { Component } from "react";
import styles from "./TodoItem.module.css";

export class TodoItem extends Component {
  state = {
    editing: false,
  };

  handleEditing = () => {
    console.log("edit mode activated");
    this.setState({
      editing: true,
    });
  };
  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    };
    const { completed, id, title } = this.props.todo;
    let viewMode = {};
    let editMode = {};

    if (this.state.editing) {
      viewMode.display = "none";
    } else {
      editMode.display = "none";
    }
    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing}>
          <input
            className={styles.checkbox}
            type="checkbox"
            checked={completed}
            onChange={() => this.props.handleChangeProps(id)}
          />
          <button onClick={() => this.props.deleteTodoProps(id)}>Delete</button>
          <span style={completed ? completedStyle : null}>{title}</span>
        </div>
        <input type="text" className={styles.textInput} />
      </li>
    );
  }
}

export default TodoItem;
