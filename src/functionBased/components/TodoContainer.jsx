import React, {useState } from "react";
import Header from "./Header";
import InputTodo from "./InputTodo";
import TodoList from "./TodoList";

const TodoContainer = () => {
 const [todos, setTodos] = useState([])
 const handleChange = id => {
  setTodos(prevState =>
    prevState.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        }
      }
      return todo
    })
  )
}

 const deleteTodo = (id) => {
    console.log("deleteTodo", id);
    setTodos([
      ...todos.filter(todo => {
        return todo.id !== id
      }),
    ])
  };
 const addTodoItem = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title,
      completed: false,
    };
    setTodos(
      [...todos, newTodo],
    );
  };
 const setUpdate = (updatedTitle, id) => {
     setTodos(
      todos.map(todo => {
        if(todo.id === id) {
          todo.title = updatedTitle
        }
        return todo
      })
     )
  }
//  componentDidUpdate(prevState, prevProps) {
//   if(prevState.todos !== this.state.todos) {
//     const todoStorage = JSON.stringify(this.state.todos)
//     localStorage.setItem('todos', todoStorage)
//   }
//  }
//  componentDidMount() {
//   const todoStorage = JSON.parse(localStorage.getItem('todos'))
//   if(todoStorage) {
//     this.setState({
//       todos: todoStorage
//     })
//   }
//  }


    return (
      <div className="container">
        <div className='inner'>
          <Header />
          <InputTodo addTodoProps={addTodoItem} />
          <TodoList
            todos={todos}
            handleChangeProps={handleChange}
            deleteTodoProps={deleteTodo}
            setUpdate={setUpdate}
          />
        </div>
      </div>
    );
}

export default TodoContainer;
