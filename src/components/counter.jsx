import React, { Component } from "react";

class valueer extends Component {
  state = { value: this.props.value };

  handleIncrement() {
    this.setState({
      value: this.state.value + 1,
    });
  }

  // handleDecrement() {
  //   const value = this.state.value === 0 ? 0 : this.state.value - 1;
  //   this.setState({
  //     value,
  //   });
  // }

  formatvalue() {
    const { value } = this.state;
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
          onClick={() => this.handleIncrement()}
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm ml-2"
          onClick={() => this.props.onDelete(this.props.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default valueer;
