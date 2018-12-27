import React, { Component } from "react";
import CourseMedia from "./courseMedia";
import CourseContent from "./courseContent";

class CourseItem extends Component {
  render() {
    const Details = this.props.Details;
    return (
      <div className="row">
        <div className="media col mt-3">
          {/* Course img column */}
          <CourseMedia image={this.props.data.image} />
          <div className="media-body">
            {/* Course content column */}
            <CourseContent
              title={this.props.data.title}
              is_new={this.props.data.is_new}
              description={this.props.data.description}
            />
            {this.props.children}
          </div>
        </div>
        {/* Course details column */}
        {Details ? (
          <aside className="col-3 mt-3">
            <Details
              author={this.props.author}
              duration={this.props.duration}
            />
          </aside>
        ) : null}
      </div>
    );
  }
}

export default CourseItem;
