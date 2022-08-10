import React, {useState, useEffect } from "react";
import Header from "./Header";
import InputTodo from "./InputTodo";
import TodoList from "./TodoList";

const TodoContainer = () => {
 const [todos, setTodos] = useState(getInitialTodos())
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
  function getInitialTodos() {
    // getting stored items
    const temp = localStorage.getItem("todos")
    const savedTodos = JSON.parse(temp)
    return savedTodos || []
  }
  useEffect(() => {
    // storing todos items
    const todoStorage = JSON.stringify(todos)
    localStorage.setItem("todos", todoStorage)
  }, [todos])


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
