import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaPlusCircle } from 'react-icons/fa';

const InputTodo = (props) => {
  const [inputText, setInputText] = useState({
    title: '',
  });
  const onChange = (e) => {
    setInputText((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    const { addTodoProps } = props;
    e.preventDefault();
    if (inputText.title.trim()) {
      addTodoProps(inputText.title);
      setInputText({
        title: '',
      });
    } else {
      // eslint-disable-next-line no-alert
      alert('Please write item');
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
        <button
          type="button"
          className="input-submit"
          style={{ color: 'darkcyan', fontSize: '20px', marginTop: '2px' }}
        >
          <FaPlusCircle />
        </button>
      </form>
    </>
  );
};

export default InputTodo;

InputTodo.propTypes = {
  addTodoProps: PropTypes.func.isRequired,
};
