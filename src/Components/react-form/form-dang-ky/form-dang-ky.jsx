import React, { Component } from "react";
import { flushSync } from "react-dom";
/**
 * chiều thứ 1: nhập vào input và set lại state
 * chiều thứ 2: từ state đưa lại vào ô input
 */
let a = 10;
a = 20;
export default class FormDangKy extends Component {
  state = {
    value: {
      id: "", // phải là số, không được bỏ trống
      productId: "", // phải là số, không được bỏ trống
      price: "", // phải là số, giá trị từ 5 -> 100
      image: "", // phải là url
      productType: "",
      productDesc: "",
    }, // alt + arrow down

    // lưu thêm giá trị error của các trường nhập vào

    error: {
      id: "Phải là số", // phải là số
      productId: "", // phải là số
      price: "", // phải là số, giá trị từ 5 -> 100
      image: "", // phải là url
      productType: "",
      productDesc: "",
    },

    touch: {
      id: false,
      productId: false,
      price: false,
      image: false,
      productType: false,
      productDesc: false,
    },
  };

  handleValidate = () => {
    // -> biến object thành array
    // Object.keys(this.state.value);
    // Object.values(this.state.value);
    // Object.entries(this.state.value);
    const newError = { ...this.state.error };

    const { value } = this.state;

    for (let prop in value) {
      switch (prop) {
        case "id": {
          // nếu như không có lỗi nào thì reset về string rỗng.
          newError[prop] = "";

          // 2. phải là số
          const REGEX_NUMBER = /^\d+$/;
          if (!REGEX_NUMBER.test(value[prop])) {
            newError[prop] = "phải là số";
          }

          // 1. không được bỏ trống
          if (value[prop].length === 0) {
            newError[prop] = "không được bỏ trống";
          }

          break;
        }
        case "productId": {
          break;
        }
        default:
          break;
      }
    }

    this.setState({
      error: newError,
    });
  };

  handleChange = (event) => {
    // target: chính là thẻ input của chúng ta
    const { target } = event;
    const { value, name } = target;
    // const value = event.target.value <==> document.getById('').value

    // flushSync: giúp set state ngay lập tức, chuyển this.setState về cơ chế đồng bộ
    console.log("before ::: set state");

    flushSync(() => {
      this.setState({
        // merge tất cả các state lại với nhau, không cần copy lại những state giá trị cũ
        value: {
          ...this.state.value,
          // dynamic property es6
          [name]: value,
        },
      });
    });

    console.log("after ::: set state");

    this.handleValidate();
    console.log("after ::: handleValidate");
  };

  handleBlur = (event) => {
    // const {
    //   target: { name },
    // } = event;
    const { name } = event.target;
    this.setState({
      touch: {
        ...this.state.touch,
        [name]: true,
      },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    alert(JSON.stringify(this.state));
  };

  render() {
    // console.log(this.state);
    console.log("render");
    return (
      <form
        onSubmit={this.handleSubmit}
        className="mt-4 p-4"
        style={{
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
      >
        <div className="row">
          <div className="col-6">
            <div className="mb-3">
              <label htmlFor="id" className="form-label">
                Id
              </label>
              <input
                onBlur={this.handleBlur}
                value={this.state.id}
                onChange={this.handleChange}
                name="id"
                className="form-control"
                id="id"
              />
              {/* Hiển thị lỗi khi người dùng đã truy cập vào và có message lỗi */}
              {this.state.touch.id && this.state.error.id && (
                <p className="text-danger">{this.state.error.id}</p>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="product_id" className="form-label">
                Product Id
              </label>
              <input
                onBlur={this.handleBlur}
                value={this.state.productId}
                name="productId"
                onChange={this.handleChange}
                className="form-control"
                id="product_id"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                value={this.state.price}
                name="price"
                type="text"
                className="form-control"
                id="price"
              />
            </div>
          </div>
          <div className="col-6">
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Image
              </label>
              <input
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                name="image"
                type="text"
                className="form-control"
                id="image"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="product_type" className="form-label">
                Product type
              </label>
              <select className="custom-select">
                <option selected>Open this select menu</option>
                <option value="1">Phone</option>
                <option value="2">Tivi</option>
                <option value="3">Laptop</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="product_description" className="form-label">
                Product description
              </label>
              <input
                type="email"
                className="form-control"
                id="product_description"
              />
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}
