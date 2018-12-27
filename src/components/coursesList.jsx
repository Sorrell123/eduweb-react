import React, { Component } from "react";
import CourseItem from "./courseItem";
import CourseLabel from "./courseLabel";
import CourseActions from "./courseActions";
import CourseDetails from "./courseDetails";

class CoursesList extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.data.courses_data
          .slice(0, this.props.data.count)
          .map(item => (
            <CourseItem key={item.id} data={item} Details={CourseDetails}>
              <div
                className={`btn-toolbar justify-content-${
                  item.is_promo ? "between" : "end"
                }`}
              >
                <CourseLabel is_promo={item.is_promo} />
                <CourseActions />
              </div>
            </CourseItem>
          ))}
      </React.Fragment>
    );
  }
}

export default CoursesList;
