import React, { Component } from "react";
import CourseItem from "./courseItem";

class CoursesList extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {this.props.items.map(item => (
          <CourseItem key={item.id} data={item} />
        ))}
      </React.Fragment>
    );
  }
}

export default CoursesList;
