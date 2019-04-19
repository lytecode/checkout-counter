import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value
  };

  handleIncrement = () => this.setState({ value: this.state.value + 1 });

  handleDecrement = () =>
    this.setState({ value: this.state.value <= 0 ? 0 : this.state.value - 1 });

  render() {
    return (
      <div>
        <span className={this.getBadgeColor()}>{this.formatValue()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-success btn-sm"
        >
          Increment
        </button>
        <button
          onClick={this.handleDecrement}
          className="btn btn-secondary btn-sm m-2"
        >
          Decrease
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeColor() {
    let classes = "badge m-2 badge-";
    return (classes += this.state.value === 0 ? "warning" : "primary");
  }

  formatValue() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
