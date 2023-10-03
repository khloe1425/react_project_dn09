import React, { Component } from "react";
import { flushSync } from "react-dom";
import { connect } from "react-redux";
import { submitCreator } from "../../../redux/reducers/react-form/react-form.action";
/**
 * chiều thứ 1: nhập vào input và set lại state
 * chiều thứ 2: từ state đưa lại vào ô input
 */
class FormDangKy extends Component {
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
      id: "", // phải là số
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

    const { value } = this.state; // cũ

    for (let prop in value) {
      switch (prop) {
        case "id":
        case "productId": {
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
        case "price":
          // nếu như không có lỗi nào thì reset về string rỗng.

          // Điều kiện nào có ưu tiên lớn nhất thì chúng ta sẽ sắp xếp từ dưới lên trên.
          newError[prop] = "";

          // 3. có giá trị từ 5-> 100;
          if (!(Number(value[prop]) <= 100 && Number(value[prop]) >= 5)) {
            newError[prop] = "Price phải nằm trong khoảng từ 5 đến 100";
          }

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
        case "image": {
          newError[prop] = "";

          // 2. Phải là đường link url
          const REGEX_URL =
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
          if (!REGEX_URL.test(value[prop])) {
            newError[prop] = "Đường dẫn không hợp lệ.";
          }

          // 1. không được bỏ trống
          if (value[prop].length === 0) {
            newError[prop] = "không được bỏ trống";
          }
          break;
        }
        case "productType":
          newError[prop] = "";

          if (value[prop].length === 0) {
            newError[prop] = "không được bỏ trống";
          }
          break;
        case "productDesc":
          // Không bắt buộc người dùng nhập vào.
          break;
        default:
          break;
      }
    }

    this.setState({
      error: newError,
    });

    return newError;
  };

  handleChange = (event) => {
    // target: chính là thẻ input của chúng ta
    const { target } = event;
    const { value, name } = target;
    // const value = event.target.value <==> document.getById('').value

    // flushSync: giúp set state ngay lập tức, chuyển this.setState về cơ chế đồng bộ
    console.log("before ::: set state");

    // cập nhật state value ngay lập tức trước khi gọi hàm handleValidate
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

    this.handleValidate();
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

    this.handleValidate();
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      touch: {
        id: true,
        productId: true,
        price: true,
        image: true,
        productType: true,
        productDesc: true,
      },
    });

    const newError = this.handleValidate();

    // kiểm tra nếu có 1 message error nào thì không cho submit
    const ready = Object.values(newError).every((i) => i.length === 0);
    if (ready === false) return;

    // gửi lên redux
    const action = submitCreator(this.state.value);
    this.props.dispatch(action);
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
                // đưa giá trị vào ô input
                value={this.state.id}
                // lấy giá trị từ input ra
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

              {this.state.touch.productId && this.state.error.productId && (
                <p className="text-danger">{this.state.error.productId}</p>
              )}
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

              {this.state.touch.price && this.state.error.price && (
                <p className="text-danger">{this.state.error.price}</p>
              )}
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
                value={this.state.value.image}
                name="image"
                type="text"
                className="form-control"
                id="image"
              />

              {this.state.touch.image && this.state.error.image && (
                <p className="text-danger">{this.state.error.image}</p>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="product_type" className="form-label">
                Product type
              </label>
              <select
                name="productType"
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                value={this.state.value.productType}
                className="custom-select"
              >
                <option selected>Open this select menu</option>
                <option value="1">Phone</option>
                <option value="2">Tivi</option>
                <option value="3">Laptop</option>
              </select>

              {this.state.touch.productType && this.state.error.productType && (
                <p className="text-danger">{this.state.error.productType}</p>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="product_description" className="form-label">
                Product description
              </label>
              <input
                name="productDesc"
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                value={this.state.value.productDesc}
                className="form-control"
              />
              {this.state.touch.productDesc && this.state.error.productDesc && (
                <p className="text-danger">{this.state.error.productDesc}</p>
              )}
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

export default connect()(FormDangKy);
