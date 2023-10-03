import React, { Component } from "react";
/**
 * vòng đời của 1 component sẽ có 3 giai đoạn:
 * - mounting: Khi component được đưa lên trên dom, giao diện lần đầu tiên.
 * - updating: Khi component re-render.
 * - un-mounting: Khi component bị xóa khỏi dom, giao diện.
 */

export default class LifeCycle extends Component {
  state = {
    show: true,
  };
  render() {
    return (
      <div>
        {this.state.show ? <A /> : <B />}
        <button
          onClick={() => {
            this.setState({
              show: !this.state.show,
            });
          }}
        >
          Click
        </button>
      </div>
    );
  }
}

class A extends Component {
  state = {
    count: 1,
  };
  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps ::: A");
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount ::: A");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount ::: A");
  }

  render() {
    console.log("render ::: A");
    return (
      <>
        <h1>a</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          {this.state.count}
        </button>
      </>
    );
  }
}

class B extends Component {
  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps ::: B");
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount ::: B");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount ::: B");
  }

  render() {
    console.log("render ::: B");

    return (
      <>
        <h1>b</h1>
      </>
    );
  }
}
