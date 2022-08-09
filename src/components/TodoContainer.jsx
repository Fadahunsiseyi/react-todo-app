import React, { Component } from "react";
import Header from "./Header";
import InputTodo from "./InputTodo";
import TodoList from "./TodoList";

export class TodoContainer extends Component {
  state = {
    todos: [
      // {
      //   id: Date.now(),
      //   title: "Setup development environment",
      //   completed: true,
      // },
      // {
      //   id: Date.now(),
      //   title: "Develop website and add content",
      //   completed: false,
      // },
      // {
      //   id: Date.now(),
      //   title: "Deploy to live server",
      //   completed: false,
      // },
    ],
  };
  handleChange = (id) => {
    console.log('clicked',id)
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
  deleteTodo = (id) => {
    console.log('deleteTodo',id)
    this.setState(prev => ({
      todos: [
        ...prev.todos.filter(todo => {
          return todo.id !== id;
        })
      ]
    }))
  }
  addTodoItem=(title)=>{
    const newTodo = {
      id: Date.now(),
      title: title,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }
  render() {
    return (
      <>
        <Header />
        <InputTodo addTodoProps={this.addTodoItem} />
        <TodoList
         todos={this.state.todos}
         handleChangeProps={this.handleChange}
         deleteTodoProps={this.deleteTodo}
          />
      </>
    );
  }
}

export default TodoContainer;
