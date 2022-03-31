import React, { Component } from "react";
import { toast } from "react-toastify";

export class AddTodo extends Component {
  state = {
    title: "",
  };
  handleOnChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleOnClickButton = (event) => {
    if (!this.state.title) {
      toast.error("It's not True. Typing again");
      return;
    }
    let todo = {
      id: Math.floor(Math.random() * 1000),
      title: this.state.title,
    };
    this.props.addNewTodo(todo);
    this.setState({
      title: "",
    });
  };
  render() {
    let { title } = this.state;
    return (
      <div className="add-todo">
        <input
          type={"text"}
          value={title}
          onChange={(event) => this.handleOnChangeTitle(event)}
        />
        <button
          type="button"
          className="add"
          onClick={(event) => this.handleOnClickButton(event)}
        >
          ADD
        </button>
      </div>
    );
  }
}

export default AddTodo;
