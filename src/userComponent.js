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
    let currentJobs = this.state.arrJobs;
    currentJobs.push(job);
    this.setState({
      arrJobs: currentJobs,
      // arrJobs: [...this.state.arrJobs, job],
    });
  };
  deleteAJob = (job) => {
    let currentJobs = this.state.arrJobs;
    currentJobs = currentJobs.filter((item) => item.id !== job.id);
    this.setState({
      arrJobs: currentJobs,
    });
  };
  render() {
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />
        <ChildComponent
          arrJobs={this.state.arrJobs}
          deleteAJob={this.deleteAJob}
        />
      </>
    );
  }
}
export default UserComponent;
