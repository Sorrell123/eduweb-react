import React, { Component } from "react";

class CourseMedia extends Component {
  render() {
    return <img src={this.props.image} alt="cover" className="mx-3" />;
  }
}

export default CourseMedia;
