import React, { Component } from "react";
import Header from "./Header";
import TodoList from "./TodoList";

export class TodoContainer extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Setup development environment",
        completed: true,
      },
      {
        id: 2,
        title: "Develop website and add content",
        completed: false,
      },
      {
        id: 3,
        title: "Deploy to live server",
        completed: false,
      },
    ],
  };
  handleChange = (id) => {
    console.log('clicked',id)
    // this.setState({
    //   todos: this.state.todos.map((todo) => {
    //     if(todo.id === id) {
    //       todo.completed = !todo.completed
    //     }
    //     return todo
    //   })
    // })
    this.setState(prevState => ({
      todos: prevState.todos.map((todo) => {
        if(todo.id === id) {
         return {
          ...todo,
          completed: !todo.completed
         }
        }
        return todo
      })
    }))
  }
  render() {
    return (
      <>
        <Header />
        <TodoList todos={this.state.todos} handleChangeProps={this.handleChange} />
      </>
    );
  }
}

export default TodoContainer;
