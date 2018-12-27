import React, { Component } from "react";
import CoursesList from "./components/coursesList";
import CartList from "./components/cartList";
import courses_data from "./data/courses_data";

class App extends Component {
  state = {
    courses_data,
    perpage: 3,
    count: 4
  };

  render() {
    return (
      <React.Fragment>
        <section className="container">
          <h2 className="title mx-2">Koszyk</h2>
          <hr />
          <CartList data={this.state} />
        </section>
        <section className="container">
          <h2 className="title mx-2">Lista kursów</h2>
          <hr />
          <CoursesList data={this.state} />
          <div className="row">
            <button
              className="btn btn-info btn-block my-4"
              onClick={this.handleMore}
            >
              Więcej
            </button>
          </div>
        </section>
      </React.Fragment>
    );
  }

  handleMore = () => {
    let perpage = this.state.perpage,
      count = this.state.count;

    count += perpage;

    this.setState({ count });
  };
}

export default App;
