import React, { Component } from 'react';

import './index.scss';

class CounterUp extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0
    };
  }

  increase = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  };

  decrease = () => {
    const { counter } = this.state;
    this.setState({ counter: counter - 1 });
  };

  reset = () => {
    this.setState({ counter: 0 });
  };

  render() {
    const { counter } = this.state;
    return (
      <div className="card">
        <div className="card-body">
          <h2 className="title">Counter Up App</h2>
          <div className="card-content">
            <button type="button" className="btn btn--gray" onClick={this.decrease}>
              -
            </button>
            <span className="counter">{counter}</span>
            <button type="button" className="btn btn--red" onClick={this.increase}>
              +
            </button>
          </div>
          <div>
            <button type="button" className="btn btn--gradient" onClick={this.reset}>
              Reset
            </button>
          </div>
        </div>
        <div className="circle circle--small" />
        <div className="circle circle--big" />
      </div>
    );
  }
}

export default CounterUp;
