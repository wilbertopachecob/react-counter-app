import { Component } from "react";
class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">
            Total active counters:{" "}
            <span className="badge badge-pill badge-secondary">
              {this.props.totalCounters}
            </span>
          </span>
        </div>
      </nav>
    );
  }
}

export default Nav;
