import React, { Component } from "react";

// jsx: js + html

/**
 * Style:
 *  1. inline style: cần truyền là một object
 *  2. style global:
 *  3. module style:
 */
export default class StyleComponent extends Component {
  render() {
    const style = {
      color: "red",
      // Đối với những thuộc tính có dấu gạch ngang (-) => chuyển về dạng camelCase
      fontSize: "40px",
      fontWeight: 600,
    };

    return (
      <div>
        {/* ctrl + / */}
        {/* 1. inline style */}
        <h1 style={style}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, saepe!
        </h1>

        <p style={{ color: "blue" }}>Lorem ipsum dolor sit amet.</p>
      </div>
    );
  }
}
