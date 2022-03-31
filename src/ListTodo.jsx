import React from "react";
import "./ListToDo.scss";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";
class ListTodo extends React.Component {
  state = {
    listToDo: [
      { id: "todo1", title: "Doing Hw" },
      { id: "todo2", title: "make video" },
      { id: "todo3", title: "coding" },
    ],
  };
  addNewTodo = (todo) => {
    this.setState({
      listToDo: [...this.state.listToDo, todo],
    });
    toast.success("Wow so easy!");
  };
  render() {
    let { listToDo } = this.state;
    return (
      <div className="list-todo-container">
        <AddTodo addNewTodo={this.addNewTodo} />
        <div className="list-todo-content">
          {listToDo &&
            listToDo.length > 0 &&
            listToDo.map((item, index) => {
              return (
                <div className="todo-child" key={item.id}>
                  <span>
                    {index + 1}- {item.title}
                  </span>
                  <button className="edit">Edit</button>
                  <button className=" delete">Delete</button>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default ListTodo;
