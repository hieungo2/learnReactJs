import React from "react";
import "./ListToDo.scss";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";
import { confirm } from "react-confirm-box";
class ListTodo extends React.Component {
  state = {
    listToDo: [
      { id: "todo1", title: "Doing Homework" },
      { id: "todo2", title: "Making video" },
      { id: "todo3", title: "Coding" },
    ],
    editTodo: {},
  };

  optionsWithLabelChange = {
    closeOnOverlayClick: false,
    labels: {
      confirmable: "Confirm",
      cancellable: "Cancel"
    }
  };

  addNewTodo = (todo) => {
    this.setState({
      listToDo: [...this.state.listToDo, todo],
    });
    toast.success("Added success!");
  };

  handleDeleteTodo = (todo) => {
    let currentTodo = this.state.listToDo;
    currentTodo = currentTodo.filter((item) => item.id !== todo.id);
    this.setState({
      listToDo: currentTodo,
    });
    toast.success("Successfully delete!");
  };

  confirmDelete = async (todo, options) => {
    const result = await confirm("Are you sure?", options);
    if (result) {
      this.handleDeleteTodo(todo);
      return;
    }
    toast.error("You cancel delete!");
  }

  handleEditTodo = (todo) => {
    let { editTodo, listToDo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;

    //save
    if (isEmptyObj === false && editTodo.id === todo.id) {
      let listTodoCopy = [...listToDo];

      let objIndex = listTodoCopy.findIndex((item) => item.id === todo.id);
      listTodoCopy[objIndex].title = editTodo.title;

      this.setState({
        listToDo: listTodoCopy,
        editTodo: {},
      });
      toast.success("Successfully edit!");

      return;
    }

    this.setState({
      editTodo: todo,
    });
  };

  handleOnChangeEditTodo = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = event.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };

  render() {
    let { listToDo, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    console.log("check :", isEmptyObj);
    return (
      <div className="list-todo-container">
        <AddTodo addNewTodo={this.addNewTodo} />
        <div className="list-todo-content">
          {listToDo &&
            listToDo.length > 0 &&
            listToDo.map((item, index) => {
              return (
                <div className="todo-child" key={item.id}>
                  {isEmptyObj === true ? (
                    <span>
                      {index + 1}-{item.title}
                    </span>
                  ) : (
                    <>
                      {editTodo.id === item.id ? (
                        <span>
                          {index + 1}-
                          <input
                            value={editTodo.title}
                            onChange={(event) =>
                              this.handleOnChangeEditTodo(event)
                            }
                          />
                        </span>
                      ) : (
                        <span>
                          {index + 1}-{item.title}
                        </span>
                      )}
                    </>
                  )}
                  {/* <span> {index + 1}- {item.title} </span>
                  <input value={item.title} /> */}
                  <button
                    className="edit"
                    onClick={() => this.handleEditTodo(item)}
                  >
                    {isEmptyObj === false && editTodo.id === item.id
                      ? "Save"
                      : "Edit"}
                  </button>
                  <button
                    className=" delete"
                    onClick={() => this.confirmDelete(item, this.optionsWithLabelChange)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default ListTodo;
