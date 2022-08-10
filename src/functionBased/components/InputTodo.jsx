import React, { useState } from "react";

const InputTodo = (props) => {
  const [inputText, setInputText] = useState({
    title: '',
  });
  const onChange = (e) => {
   setInputText(prev => {
   return {
    ...prev,
    [e.target.name]: e.target.value,
   }
   })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted')
    if (inputText.title.trim()) {
      props.addTodoProps(inputText.title);
      setInputText({
        title: ''
      });
    } else {
      alert("Please write item");
    }
  };
  return (
    <>
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Todo..."
        value={inputText.title}
        name="title"
        onChange={onChange}
      />
      <button className="input-submit">Submit</button>
    </form>
     </>
  );
};

export default InputTodo;
