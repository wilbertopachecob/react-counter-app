import React, { Component } from "react";

class valueer extends Component {
  formatvalue() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  render() {
    return (
      <div className="mt-2">
        <span style={{ width: "50px" }} className={this.getBadgeClasses()}>
          {this.formatvalue()}
        </span>
        <button
          className="btn btn-secondary btn-sm ml-2"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm ml-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default valueer;
