import React, { Component } from "react";

class CourseContent extends Component {
  render() {
    return (
      <React.Fragment>
        <h3>
          {this.props.title}
          {this.props.is_new ? (
            <span className="badge badge-info ml-2">Nowy!</span>
          ) : null}
        </h3>
        <p>{this.props.description}</p>
      </React.Fragment>
    );
  }
}

export default CourseContent;
