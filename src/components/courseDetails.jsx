import React, { Component } from "react";
import CartButton from "./cartButton";

class CourseActions extends Component {
  render() {
    return (
      <React.Fragment>
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
        <CartButton additionalClass="btn-block" in_cart={false} />
      </React.Fragment>
    );
  }
}

export default CourseActions;
