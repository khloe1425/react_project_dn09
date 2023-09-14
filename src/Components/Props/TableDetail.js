import React, { Component } from 'react'

export default class TableDetail extends Component {
    render() {
      
        let { tenSP, hinhAnh, manHinh, heDieuHanh, cameraTruoc, cameraSau, ram, rom } = this.props.phone;

        return (
            <div className="row mt-5">
                <div className="col-4">
                    <h3>{tenSP}</h3>
                    <img className='img-fluid' src={hinhAnh} alt="" />
                </div>
                <div className="col-8">
                    <h4>Thông số kỹ thuật</h4>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>Màn hình</td>
                                <td>{manHinh}</td>
                            </tr>
                            <tr>
                                <td>Hệ điều hành</td>
                                <td>{heDieuHanh}</td>
                            </tr>
                            <tr>
                                <td>Camera trước</td>
                                <td>{cameraTruoc}</td>
                            </tr>
                            <tr>
                                <td>Camera sau</td>
                                <td>{cameraSau}</td>
                            </tr>
                            <tr>
                                <td>Ram</td>
                                <td>{ram}</td>
                            </tr>
                            <tr>
                                <td>Rom</td>
                                <td>{rom}</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        )
    }
}
