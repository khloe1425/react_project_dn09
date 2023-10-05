import React, { Component, PureComponent } from "react";
/**
 * vòng đời của 1 component sẽ có 3 giai đoạn:
 * - mounting: Khi component được đưa lên trên dom, giao diện lần đầu tiên.
 * - updating: Khi component re-render.
 * - un-mounting: Khi component bị xóa khỏi dom, giao diện.
 */

export default class LifeCycle extends Component {
  state = {
    show: true,
    count: 0,
    like: 1,
  };

  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps [[ Cha ]]");

    // tự động merge lại state cho chúng ta
    // nếu có return thì sẽ cập nhật lại state
    return {
      // ...this.state,
      like: 100,
    };
    // return null; không set lại state
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount [[ Cha ]]");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate [[ Cha ]]");
    return true;
  }
  componentDidUpdate() {
    console.log("componentDidUpdate [[ Cha ]]");
  }
  render() {
    console.log("render [[ Cha ]]", this.state);
    return (
      <div
        style={{
          backgroundColor: "green",
          color: "black",
          padding: 50,
        }}
      >
        <h1>Cha</h1>

        <button
          onClick={() => {
            this.setState({
              like: this.state.like + 1,
            });
          }}
        >
          Like: {this.state.like}
        </button>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count: {this.state.count}
        </button>

        <Child count={this.state.count} />
      </div>
    );
  }
}

// updating: component cha re-render , set lại state.

// PureComponent: chỉ re-render khi props thay đổi.
class Child extends PureComponent {
  // theo dõi cập nhật state hay props của component
  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps [[ Con ]]");

    return null;
  }

  componentDidMount() {
    console.log("componentDidMount [[ Con ]]");
  }

  // shouldComponentUpdate(newProps, newState) {
  //   return this.props.count !== newProps.count;
  // }

  componentDidUpdate() {
    console.log("componentDidUpdate [[ Con ]]");
  }

  render() {
    console.log("render [[ Con ]]");
    return (
      <div
        style={{
          backgroundColor: "blue",
          color: "black",
          padding: 50,
        }}
      >
        <h1>Con</h1>
        <h1>{this.props.count}</h1>
      </div>
    );
  }
}

class A extends Component {
  state = {
    count: 1,
  };
  // theo dõi cập nhật state hay props của component
  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps [[ AAA ]]");
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount [[ AAA ]]");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate [[ AAA ]]");
    return true;
  }
  componentDidUpdate() {
    console.log("componentDidUpdate [[ AAA ]]");
  }

  render() {
    console.log("render ::: AAA");
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
    // console.log("getDerivedStateFromProps ::: B");
    return null;
  }

  componentDidMount() {
    // console.log("componentDidMount ::: B");
  }

  componentWillUnmount() {
    // console.log("componentWillUnmount ::: B");
  }

  render() {
    // console.log("render ::: B");

    return (
      <>
        <h1>b</h1>
      </>
    );
  }
}
