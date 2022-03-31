import React from "react";
// import React, { Component } from 'react';

// const ChildComponent = (props) => {
//   let { arrJobs } = props;
//   console.log(" check child props: ", props);
//   return (
//     <>
//       <div className="job-lists">
//         {arrJobs.map((item, index) => {
//           if (item.salary > 1000) {
//             return (
//               <div key={item.id}>
//                 {item.title}-{item.salary}$
//               </div>
//             );
//           }
//         })}
//       </div>
//     </>
//   );
// };
class ChildComponent extends React.Component {
  state = {
    showJobs: false,
  };
  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };
  handleOnClickDelete = (job) => {
    console.log(">>> handleOnClick: ", job);
    this.props.deleteAJob(job);
  };
  render() {
    let { arrJobs } = this.props;
    let { showJobs } = this.state;
    // let check = showJobs === true ? "showJobs =true" : "showJobs=false";
    // console.log(">>check condition: ", check);
    return (
      <>
        {showJobs === false ? (
          <div>
            <button onClick={() => this.handleShowHide()}>Show</button>
          </div>
        ) : (
          <>
            <div className="job-lists">
              {arrJobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary}$<></>
                    <span onClick={() => this.handleOnClickDelete(item)}>
                      x
                    </span>
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default ChildComponent;
