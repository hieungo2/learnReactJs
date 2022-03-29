import React from "react";
// import React, { Component } from 'react';
import ChildComponent from "./ChildComponent.js";
import AddComponent from "./AddComponent.js";

class UserComponent extends React.Component {
  state = {
    arrJobs: [
      { id: "job1", title: "fresher", salary: "500" },
      { id: "job2", title: "fresher1", salary: "2300" },
      { id: "job3", title: "fresher2", salary: "5000" },
    ],
  };
  addNewJob = (job) => {
    console.log("check job from parent: ", job);
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });
  };
  render() {
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />
        <ChildComponent arrJobs={this.state.arrJobs} />
      </>
    );
  }
}
export default UserComponent;
