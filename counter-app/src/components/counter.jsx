import React, { Component } from "react";

class Counter extends Component {
  // Update Phase
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);

    /*if (prevProps.counter.value !== this.props.counter.value) {
          //Ajax call or get new data fromt the server
        } */
  }

  // Unmount phase
  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  //Rendering Classes Dynamically
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    // Destructuring
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }

  render() {
    console.log("Counter - Rendered");
    return (
      <div>
        <span
          // Inline style
          style={{
            fontSize: 10,
            fontWeight: "bold",
          }}
          className={this.getBadgeClasses()}
        >
          {/* Embedding Expressions */}
          {this.formatCount()}
        </span>
        <button
          // Handling Events
          // Passing Arguments with Events
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          // Raising and Handling Events
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
