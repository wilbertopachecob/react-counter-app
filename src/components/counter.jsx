import React, { Component } from "react";

class Counter extends Component {
  state = { count: 0 };

  handleIncrement() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  handleDecrement() {
    const count = this.state.count === 0 ? 0 : this.state.count - 1;
    this.setState({
      count,
    });
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm ml-2"
          onClick={() => this.handleIncrement()}
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm ml-2"
          onClick={() => this.handleDecrement()}
        >
          Decrement
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
