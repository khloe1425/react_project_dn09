import React, { Component } from "react";
import "./index.css";

import { connect } from "react-redux";
import {
  banChonCreator,
  playGameCreator,
} from "../../../redux/reducers/game-xux-xac/creator";

class GameXucXac extends Component {
  render() {
    console.log(this.props);
    const { banChon, soBanChoi, soBanThang, mangXucXac } = this.props;
    return (
      <div className="game-xuc-xac">
        <div className="game-xx-container">
          <h1>Game Đổ xúc xắc</h1>

          <div className="d-flex justify-content-between">
            <button
              onClick={() => {
                const action = banChonCreator("tai");
                this.props.dispatch(action);
              }}
              className="btn-xx"
            >
              Tài
            </button>
            <div>
              {mangXucXac.map((img, index) => {
                return <img key={index} src={img} alt="xuc xac" />;
              })}
            </div>
            <button
              onClick={() => {
                this.props.dispatch(banChonCreator("xiu"));
              }}
              className="btn-xx"
            >
              Xỉu
            </button>
          </div>

          <div className="ket-qua">
            <p>
              Bạn chọn: <span>{banChon === "tai" ? "Tài" : "Xỉu"}</span>
            </p>
            <p>
              Số bàn thắng: <span>{soBanThang}</span>
            </p>
            <p>
              Tổng số bàn chơi: <span>{soBanChoi}</span>
            </p>
          </div>

          <button
            onClick={() => {
              this.props.dispatch(playGameCreator());
            }}
            className="play-game btn btn-success"
          >
            Play game
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  // return rootReducer.gameXucXacReducer ( X )

  return { ...rootReducer.gameXucXacReducer };
};

/**
 * Có 2 cách dùng để cập nhật lại state trên Redux, chỉ chọn 1 trong 2.
 *
 * 1. Dùng trực tiếp: khi connect với redux đã truyền mặc định props dispatch cho component
 * 2. Dùng gián tiếp: tạo function mapDispatchToProps
 */

export default connect(mapStateToProps)(GameXucXac);
