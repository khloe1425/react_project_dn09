import React, { Component } from "react";
import Component3 from "./component-3";
import Component4 from "./component-4";

export default class Component2 extends Component {
  render() {
    return (
      <div>
        <Component3 />
        <Component4 count={this.props.count} />
      </div>
    );
  }
}
