import React, { Component } from "react";

export class InputTodo extends Component {
    state = {
        title: '',
      }
      onChange=(e)=> {
        console.log('I am changing')
        this.setState({
            [e.target.name]: e.target.value
        })
      }
      handleSubmit=(e)=> {
        e.preventDefault()
      if(this.state.title.trim()) {
        this.props.addTodoProps(this.state.title)
        this.setState({
            title: ''
        })
      }
      else {
        alert("Please write item")
    }
      }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
           type="text"
            placeholder="Add Todo..."
             value={this.state.title}
             onChange={this.onChange}
             name='title'
            />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default InputTodo;
