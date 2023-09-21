import React, { Component } from "react";

// kết nối tới redux
import { connect } from "react-redux";
import { ChangeColorBoxConst } from "../../../redux/reducers/change-color-box/change-color-box.const";
import { changeColorCreator } from "../../../redux/reducers/change-color-box/change-color-box.creator";
class ChangeColorBox extends Component {
  render() {
    const { changeColor } = this.props;
    return (
      <div>
        <div
          className="house"
          style={{
            width: 100,
            height: 100,
            // 2. binding state lên giao diện.
            backgroundColor: this.props.bgcBox,
          }}
        />

        <div className="mt-2">
          <button
            onClick={() => {
              changeColor("red");
            }}
            className="btn btn-danger"
          >
            Red
          </button>
          <button
            onClick={() => {
              changeColor("green");
            }}
            className="btn btn-success mx-2"
          >
            Green
          </button>
          <button
            onClick={() => {
              changeColor("blue");
            }}
            className="btn btn-primary mx-2"
          >
            Blue
          </button>
          <button
            onClick={() => {
              changeColor("yellow");
            }}
            className="btn btn-warning"
          >
            Yellow
          </button>
        </div>
      </div>
    );
  }
}
// Sau khi gọi hàm connect thì sẽ trả về cho rootReducer cho mapStateToProps
const mapStateToProps = (rootReducer) => {
  console.log({ rootReducer });
  return {
    bgcBox: rootReducer.changeColorBoxReducer,
  };
};

// Sau khi gọi hàm connect thì sẽ trả về cho dispatch cho mapDispatchToProps
// dispatch: dùng để gửi action lên redux

const mapDispatchToProps = (dispatch) => {
  return {
    changeColor: (color) => {
      console.log({ color });
      // 1. action
      const action = changeColorCreator(color);
      // 2. dispatch
      dispatch(action);
    },
  };
};
// kết nối component + redux
export default connect(mapStateToProps, mapDispatchToProps)(ChangeColorBox);
