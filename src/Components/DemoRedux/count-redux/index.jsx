import React, { Component } from "react";

// Kết nối với redux
import { connect } from "react-redux";

class CountRedux extends Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <p>Count: {this.props.countState}</p>
        <button
          onClick={() => {
            this.props.tangGiamCount(1);
          }}
          className="btn btn-success mx-2"
        >
          +
        </button>
        <button
          onClick={() => {
            this.props.tangGiamCount(-1);
          }}
          className="btn btn-success mx-2"
        >
          -
        </button>
      </div>
    );
  }
}
/**
 * mapStateToProps: Lên trên redux lấy state về
 *
 * chuyển state từ redux về dạng props của component
 * @param {*} rReducers: store tổng, tất cả các state
 * @returns: ý nghĩa: <CountRedux countState={rootReducer.countReducer} abc={10}/>
 *
 * truyền nó vào [[tham số thứ nhất]] của lần [[gọi hàm đầu]] của connect
 */
const mapStateToProps = (rootReducer) => {
  //   console.log({ rReducers });

  //* returns: bắt buộc phải có
  return {
    countState: rootReducer.countReducer,
  };
};

/**
 *
 * @param {*} dispatch: hàm dùng gửi dữ liệu lên redux để cập nhật lại state
 * @returns: chuyển những thuộc tính trong return về props của component
 *
 * Truyền vào [[- tham số thứ 2 -]] của lần gọi hàm thứ nhất của connect
 *

 */

/**
 * ex:
 * 1. Component chúng ta chỉ xử lý sự kiện, không có lấy state từ trên redux về
 * - connect(null, mapDispatchToProps)
 *
 * 2. Component chúng ta chỉ lấy state, không có xử lý sự kiện
 *  - connect(mapStateToProps, null)
 *  - connect(mapStateToProps)
 */

const mapDispatchToProps = (dispatch) => {
  return {
    tangGiamCount: (soLuong) => {
      console.log({ soLuong });
      // 1.
      const action = {
        type: "TANG_GIAM_COUNT", // Mô tả hành động
        payload: soLuong, // tệp đính kèm
      };
      // 2.
      dispatch(action);

      ///- Lựa chọn 2:
      //   dispatch({
      //     type: "TANG_GIAM_COUNT",
      //     payload: soLuong,
      //   });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CountRedux);
/**
 * export default component: CountRedux + Kết nối với redux
 */

// const abc = (def) => {
//   // def === rootReducer
//   console.log(def);
// };

// const _connect = (mapStateToProps) => {
//   mapStateToProps(rootReducer);

//   return () => {};
// };

// _connect(abc)();
