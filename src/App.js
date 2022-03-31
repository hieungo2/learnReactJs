import logo from "./logo.svg";
import "./App.css";
// eslint-disable-next-line no-unused-vars
import React from "react";
// import UserComponent from "./userComponent";
import ListTodo from "./ListTodo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello ReactJS</p>

        {/* <UserComponent></UserComponent> */}

        <ListTodo />
      </header>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
    </div>
  );
}

export default App;
