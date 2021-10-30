import Counters from "./components/counters.jsx";
import Nav from "./components/nav.jsx";
import { Component } from "react";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({
      counters,
    });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value += 1;
    if (index >= 0) {
      this.setState({
        counters,
      });
    }
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value -= 1;
    if (index >= 0) {
      this.setState({
        counters,
      });
    }
  };

  handleReset = () => {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <Nav
          totalCounters={
            this.state.counters.filter((counter) => counter.value).length
          }
        />
        <main style={{ maxWidth: "400px" }}>
          <Counters
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onReset={this.handleReset}
            counters={this.state.counters}
          />
        </main>
      </div>
    );
  }
}

export default App;
