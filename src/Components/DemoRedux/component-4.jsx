import React, { Component } from "react";
import Component5 from "./component-5";
import Component6 from "./component-6";

export default class Component4 extends Component {
  // state
  render() {
    return (
      <div>
        <button>Tang Count</button>
        {/* <Component5 /> */}
        {/* <Component6 count={this.props.count} /> */}
      </div>
    );
  }
}
