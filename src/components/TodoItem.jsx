import React from 'react'

const TodoItem = (props) => {
    console.log(props)
  return (
       <li>
       {props.todo.title}
      </li>
  )
}

export default TodoItem
