import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  // Single Source of Truth
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  // Mounting Phase

  constructor(props) {
    super(props);
    console.log("App - Constructor");
    // this.state = this.props.something;
  }

  componentDidMount() {
    // Ajax call & can set data here.
    console.log("App - Mounted");
  }

  // Raising and Handling Events
  handleDelete = (counterId) => {
    // Updating the State
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    // this.setState({ counters: counters }); Since key and value are same we can simplify the code as...
    this.setState({ counters });
  };

  // Single Source of Truth
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  // Binding Event Handlers
  handleIncrement = (counter) => {
    // Spread operator
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    // Updating the State
    this.setState({ counters });
  };

  render() {
    console.log("App - Rendered");
    // return JSX
    // Babel will take this JSX and convert to plan JS code that browser can understand.
    return (
      <>
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          {/* Passing Data to Components */}
          {/* This is controlled component. */}
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </>
    );
  }
}

export default App;
