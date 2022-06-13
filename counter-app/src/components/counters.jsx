import React, { Component } from "react";
import Counter from "../components/counter";

class Counters extends Component {
  render() {
    // Composing Components

    // Destructuring
    const { onReset, onIncrement, onDelete, counters } = this.props;

    console.log("Counters - Rendered");
    return (
      <>
        {/* Rendering Lists  */}
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            // Note: This counter component is rasing the delete event & here we are bubbling up that event to the parent. We are not handling that event here.
            onDelete={onDelete}
            onIncrement={onIncrement}
          />
        ))}
        <button
          // Handling Events
          onClick={onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
      </>
    );
  }
}

export default Counters;
