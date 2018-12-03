import React, { Component } from "react";

class CourseActions extends Component {
  render() {
    return (
      <table className="table">
        <tbody>
          <tr>
            <th>Autor</th>
            <td>{this.props.author}</td>
          </tr>
          <tr>
            <th>Czas Trwania</th>
            <td>{this.props.duration}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default CourseActions;
