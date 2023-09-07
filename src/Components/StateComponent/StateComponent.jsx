import React, { Component } from "react";

// jsx => js + html
/**
 * Lý do sử dụng:
 * - lưu giữ trạng thái của một component
 * - Có sự tương tác với người dùng mà làm thay đổi giao diện (UI)
 *
 * Khai báo state component
 * - đặt trong thuộc tính state
 *
 * 1. Cách khởi tạo
 * 2. Cách cập nhật lại state
 */
export default class StateComponent extends Component {
  state = {
    isLogin: false,
  };

  handleLogin = () => {
    // this.state.isLogin = true;

    // console.log(this.state);

    // this.render();

    // set lại 1 state của component chúng ta sử dụng method setState được kế thừa từ class Component của react
    this.setState({
      isLogin: true,
    });
    // sau khi set lại state thì react nó sẽ tự động cập nhật lại giao diện mới cho chúng ta.
    // re-render component
  };

  renderLogin() {
    if (this.state.isLogin) {
      return <p>Nguyen Van A</p>;
    }

    return (
      <button
        onClick={this.handleLogin}
        className="btn btn-outline-success my-2 my-sm-0 mx-2"
      >
        Login
      </button>
    );
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>

            {/* Render với điều kiện: toán tử ba ngôi

            render trực tiếp tại html
            - không sử dụng được if else, for, while, ...
            */}

            {/* Cách 1: */}
            {/* {this.state.isLogin ? (
              <p>Nguyen Van A</p>
            ) : (
              <button className="btn btn-outline-success my-2 my-sm-0 mx-2">
                Login
              </button>
            )} */}

            {/* Cách 2:  */}
            {this.renderLogin()}

            <button className="btn btn-outline-success my-2 my-sm-0">
              Logout
            </button>
          </div>
        </nav>
      </div>
    );
  }
}
