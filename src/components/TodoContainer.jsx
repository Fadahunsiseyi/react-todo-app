import React, { Component } from "react";
import Header from "./Header";
import InputTodo from "./InputTodo";
import TodoList from "./TodoList";

export class TodoContainer extends Component {
  state = {
    todos: [],
  };
  handleChange = (id) => {
    console.log("clicked", id);
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };
  deleteTodo = (id) => {
    console.log("deleteTodo", id);
    this.setState((prev) => ({
      todos: [
        ...prev.todos.filter((todo) => {
          return todo.id !== id;
        }),
      ],
    }));
  };
  addTodoItem = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };
  setUpdate = (updatedTitle, id) => {
     this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          todo.title = updatedTitle
        }
        return todo
      })
     })
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(response => response.json())
      .then(data => this.setState({todos: data}));
  }
  render() {
    return (
      <div className="container">
        <div className='inner'>
          <Header />
          <InputTodo addTodoProps={this.addTodoItem} />
          <TodoList
            todos={this.state.todos}
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.deleteTodo}
            setUpdate={this.setUpdate}
          />
        </div>
      </div>
    );
  }
}

export default TodoContainer;
