import { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  render() {
    const { counters } = this.state;
    return (
      <div>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            value={counter.value}
            selected={true}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
