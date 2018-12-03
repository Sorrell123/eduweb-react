import React, { Component } from "react";

class CourseLabel extends Component {
  render() {
    return this.props.is_promo ? (
      <b className="mr-2">Kurs jest w Promocji!!</b>
    ) : null;
  }
}

export default CourseLabel;
