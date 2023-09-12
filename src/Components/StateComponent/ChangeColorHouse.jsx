import React, { Component } from "react";

export default class ChangeColorHouse extends Component {
  // 1. Xác định state, khởi tạo state.
  state = {
    bgColor: "blue",
  };

  handleChangeBg = (color) => {
    console.log(color);
    // this.setState({
    //   bgColor: color,
    // });
  };

  // khi goị function thì trả về lại một function: curry function
  handleCurry = (color) => {
    console.log("chay ngay lap tuc");
    return () => {
      console.log("chay khi onclick");

      this.setState({
        bgColor: color,
      });
    };


  };

  //! render chạy 1 lần khi load trang
  //! Muốn gọi lại hàm render => load giá trị mới vừa thay đổi lên UI => gọi thông qua quy định của State
  render() {
    return (
      <div>
        <div
          className="house"
          style={{
            width: 100,
            height: 100,
            // 2. binding state lên giao diện.
            backgroundColor: this.state.bgColor,
          }}
        />

        <div className="mt-2">
          <button
            // 3. Gắn sự kiện

            // 1. Nhận biết được button nào đang được click : handleChangeBg
            // 2. nhận vào 1 function
            onClick={this.handleCurry("red")}
            className="btn btn-danger"
          >
            Red
          </button>
          <button
            onClick={() => this.handleChangeBg("green")}
            className="btn btn-success mx-2"
          >
            Green
          </button>
          <button
            onClick={() => this.handleChangeBg("blue")}
            className="btn btn-primary mx-2"
          >
            Blue
          </button>
          <button
            onClick={() => this.handleChangeBg("yellow")}
            className="btn btn-warning"
          >
            Yellow
          </button>
        </div>
      </div>
    );
  }
}


/**
 * ES6
 * 
 */
// login(){
//   //Đăng nhập thành công 
//   hienThiUserName() ; gọi lại hàm
// }

// //render();
// hienThiUserName(){

// }