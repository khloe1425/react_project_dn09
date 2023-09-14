import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        let { hinhAnh, tenSP } = this.props.phoneProps; //lấy từ đối tượng phone

        let {xemChiTietProps, phoneProps} = this.props;// lấy từ props
        return (
            <div className="card">
                <img style={{ width: "100%", height: "400px" }} src={hinhAnh} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{tenSP}</h5>
                    <button onClick={() => {
                        xemChiTietProps(phoneProps);
                    }}
                        className="btn btn-primary">Xem chi tiết</button>
                </div>
            </div>
        )
    }
}
