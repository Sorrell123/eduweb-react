import React, { Component } from "react";
import CourseLabel from "./courseLabel";
import CourseActions from "./courseActions";

class CourseContent extends Component {
  render() {
    return (
      <React.Fragment>
        <h3>
          {this.props.title}
          {this.props.is_new ? (
            <span className="badge badge-info mx-2">Nowy!</span>
          ) : null}
        </h3>
        <p>{this.props.description}</p>
        <CourseLabel is_promo={this.props.is_promo} />
        <CourseActions />
      </React.Fragment>
    );
  }
}

export default CourseContent;
