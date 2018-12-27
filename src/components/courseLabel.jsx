import React, { Component } from "react";

class CourseLabel extends Component {
  render() {
    return this.props.is_promo ? <b>Promocja!!</b> : null;
  }
}

export default CourseLabel;
