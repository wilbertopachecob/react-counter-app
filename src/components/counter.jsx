import React, { Component } from "react";

class valueer extends Component {
  formatvalue() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  render() {
    return (
      <div className="row p-2">
        <div className="col-2">
          <span className={this.getBadgeClasses()}>{this.formatvalue()}</span>
        </div>
        <div className="col">
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => this.props.onIncrement(this.props.counter)}
          >
            <i className="fa fa-plus" aria-hidden="true"></i>
          </button>

          <button
            className="btn btn-secondary btn-sm mx-2"
            onClick={() => this.props.onDecrement(this.props.counter)}
            disabled={!this.props.counter.value}
          >
            <i className="fa fa-minus" aria-hidden="true"></i>
          </button>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => this.props.onDelete(this.props.counter.id)}
          >
            <i className="fa fa-trash" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default valueer;
