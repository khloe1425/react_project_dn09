import React, { Component } from "react";

// import "./style.css";

export default class FontSize extends Component {
  state = {
    fSize: 50,
  };

  handleInc = () => {
    // Giá trị truyền vào method set state là một object và thuộc tính truyền vào là state mà mình mong muốn cập nhật lại

    // gắn trực tiếp lại giá trị của state: ( X ) không dùng
    // this.state.fSize += 5;

    this.setState({
      fSize: this.state.fSize + 5,
    });
  };
  handleDesc = () => {
    this.setState({
      fSize: this.state.fSize - 5,
    });
  };

  render() {
    return (
      <div>
        <p
          style={{
            fontSize: this.state.fSize, // 50 => '50px'
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, vel!
        </p>

        <div>
          <button onClick={this.handleInc} className="btn btn-success mx-2">
            +
          </button>
          <button onClick={this.handleDesc} className="btn btn-success mx-2">
            -
          </button>
        </div>
      </div>
    );
  }
}
