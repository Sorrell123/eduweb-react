import React, { Component } from "react";
import CourseItem from "./components/courseItem";
import courses_data from "./data/courses_data";

class App extends Component {
  state = {
    courses_data,
    perpage: 3,
    count: 4
  };

  render() {
    return (
      <section className="container">
        <div className="row">
          {this.state.courses_data.slice(0,this.state.count).map(data => (
            <CourseItem 
            key={data.id}
            data={data}
            />
          ))}
        </div>
        <div className="row">
            <button 
              className="btn btn-info btn-block my-4" 
              onClick={this.handleMore}>
                Więcej
            </button>
        </div>
      </section> 
    );
  }

  handleMore = () => {
    let perpage = this.state.perpage, count = this.state.count;
    count += perpage

    this.setState({count});
  }
}

export default App;
