import React, { Component } from "react";

class ActionButton extends Component {
  render() {
    return (
      <button
        className={`btn btn-${this.props.btnType} ${this.props
          .additionalClass || ""}`}
      >
        {this.props.icon ? (
          <i className={`mr-1 fas fa-${this.props.icon}`} />
        ) : null}
        {this.props.text}
      </button>
    );
  }
}

export default ActionButton;
