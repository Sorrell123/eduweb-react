import React, { Component } from "react";
import ActionButton from "./actionButton";

class CourseActions extends Component {
  render() {
    return (
      <div className="btn-group btn-group-sm">
        <ActionButton btnType="secondary" text="Szczegóły kursu" />
        <ActionButton
          btnType="primary"
          text="Dodaj do ulubionych"
          icon="star"
        />
      </div>
    );
  }
}

export default CourseActions;
