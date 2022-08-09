import React, { Component } from "react";

export class InputTodo extends Component {
    state = {
        title: '',
      }
      onChange=(e)=> {
        console.log('I am changing',e)
        this.setState({
            [e.target.name]: e.target.value
        })
      }
  render() {
    return (
      <div>
        <form>
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
