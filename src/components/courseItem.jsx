import React, { Component } from "react";
import CourseMedia from "./courseMedia";
import CourseDetails from "./courseDetails";
import CourseContent from "./courseContent";

class CourseItem extends Component {
  render() {
    return (
      <div className="media mt-3">
        {/* Course media column */}
        <div className="media-left">
          <CourseMedia image={this.props.data.image} />
        </div>

        {/* Course content column */}
        <div className="media-body">
          {/* Course content column */}
          <CourseContent
            title={this.props.data.title}
            is_new={this.props.data.is_new}
            description={this.props.data.description}
            is_promo={this.props.data.is_promo}
          />
        </div>

        {/* Course details column */}
        <div className="media-right">
          <CourseDetails
            author={this.props.data.author}
            duration={this.props.data.duration}
          />
        </div>
      </div>
    );
  }
}

export default CourseItem;
