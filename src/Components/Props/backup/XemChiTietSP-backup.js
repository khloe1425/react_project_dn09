import React, { Component } from 'react'

export default class XemChiTietSP extends Component {

    //thuộc tính
    mangPhone = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/phone/vsphone.jpg" },
        {
            "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB"
            , "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/phone/meizuphone.jpg"
        },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/phone/applephone.jpg" }
    ]


    //? 1. Khai báo giá trị ban đầu cho state () => load lần đầu
    // UI đổi đang cần dữ liệu của 1 đối tượng phone
    state = {
        phone: this.mangPhone[0],
        
    }

    //Phương thức hiển thị danh sách đt => gọi khi load component
    hienThiDS = () => {
        // div col-4: đối tượng jsx
        // chứa các đối tượng div col-4
        let content = [];

        // chỉ tạo biến obj khi có nhiều thuộc style
        let styleImg = {
            width: "200px",
            height: "200px",
            borderRadius: "5px"
        }

        // map: return của map trả về 1 mảng mới
        this.mangPhone.map((phone) => {
            //Bóc tách thuộc tính => giúp dùng nhanh thuộc tính mà không cần dùng cú pháp phone.hinhAnh
            let { hinhAnh, tenSP, maSP } = phone;

            //key: gần giống id của obj giúp react phân biệt giữa các đối tượng cùng loại
            let divObj = <div className='col-4' key={`phone${maSP}`}>
                <div className="card">
                    <img style={{ width: "100%", height: "400px" }} src={hinhAnh} className="card-img-top" alt="..." />
                    {/* <img style={styleImg} src={hinhAnh} className="card-img-top" alt="..." /> */}
                    <div className="card-body">
                        <h5 className="card-title">{tenSP}</h5>
                        <button className="btn btn-primary">Xem chi tiết</button>
                    </div>
                </div>
            </div>

            content.push(divObj);
        })

        // console.log(content);

        return content;

    }

    hienThiDSMap = () => {

        // map: lệnh return của map không dừng vòng lặp (chỉ dừng khi hết mảng) =>  trả về 1 mảng mới
        //!return : trả kết quả ra khỏi hàm hienThiDSMap
        return this.mangPhone.map((phone) => {

            let { hinhAnh, tenSP, maSP } = phone;

            //! trả về mảng mới chưa trả ra khỏi phương thức hienThiDSMap
            return <div className='col-4' key={`phone${maSP}`}>
                <div className="card">
                    <img style={{ width: "100%", height: "400px" }} src={hinhAnh} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{tenSP}</h5>
                        <button onClick={() => {
                            this.xemChiTiet(phone);
                        }}
                            className="btn btn-primary">Xem chi tiết</button>
                    </div>
                </div>
            </div>

        })



    }


    //Xem chi tiết => đổi dữ liệu phone của state, render lại UI (tự react thay đổi UI để hiển thị dữ liệu mới cho người dùng)
    xemChiTiet = (newPhone) => {
        console.log(newPhone);
        // this.render(); //! react ko cho gọi lại trực tiếp render()


        //1. gán giá trị mới cho state 
        //2. kiểm trả giá trị của state có đổi không => nếu đổi, thì gọi lại hàm render để đưa dữ liệu mới lên UI
        //! đối tương state mới phải có thuộc trùng tên với state ban đầu
        let newState = {
            phone: newPhone
        }
        this.setState(newState);

        // this.setState({
        //     phone: newPhone
        // });

    }

    render() {
        // this.hienThiDS();
        //return về UI
        let { tenSP, hinhAnh, manHinh, heDieuHanh, cameraTruoc, cameraSau, ram, rom } = this.state.phone;

        return (
            <div>
                <div className='row'>
                    {/* Binding dữ liệu trả về từ 1 hàm lên trên UI */}
                    {/* {this.hienThiDS()} */}
                    {this.hienThiDSMap()}

                </div>
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
            </div>
        )
    }



}


/**
 * ES6
 */
// function hienThiTable() {
//     content = ""; // string các thẻ tr
//     mangSV.map((sv) => {
//         content += "<tr>sv</tr>"
//      });

//      document.getElementById("tableID").innerHTML = content
// }