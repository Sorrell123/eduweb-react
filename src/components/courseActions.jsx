import React, { Component } from "react";

class CourseActions extends Component {
  render() {
    return (
      <div className="btn-group align-self-end">
        <button className="btn btn-secondary">Szczegóły kursu</button>
        <button className="btn btn-primary">Dodaj do ulubioncyh</button>
        <button className="btn btn-success">Dodaj do koszyka</button>
      </div>
    );
  }
}

export default CourseActions;
