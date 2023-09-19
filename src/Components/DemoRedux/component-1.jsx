import React, { Component } from "react";
import Component2 from "./component-2";

export default class Component1 extends Component {
  state = {
    count: 10,
  };
  num = 100;

  render() {
    return (
      <div>
        <Component2 count={this.num} />
      </div>
    );
  }
}
