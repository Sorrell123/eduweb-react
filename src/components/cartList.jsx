import React, { Component } from "react";
import CourseItem from "./courseItem";
import CartDetails from "./cartDetails";

class CartList extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.data.courses_data.slice(0, 1).map(item => (
          <CourseItem key={item.id} data={item} Details={CartDetails} />
        ))}
      </React.Fragment>
    );
  }
}

export default CartList;
