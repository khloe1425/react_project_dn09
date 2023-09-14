import React, { Component } from 'react'
import ProductList from './ProductList';
import TableDetail from './TableDetail';

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


    //Cha thỏa cả 2 điều kiện xét => state khai báo ở cha
    state = {
        phone: this.mangPhone[0],
        
    }

    //! Di chuyển hàm hiển thi từ cha sang con để con gọi ra
    //Cha thỏa cả 2 điều kiện xét => hàm gọi setState khai báo ở cha
    xemChiTiet = (newPhone) => {
        let newState = {
            phone: newPhone
        }
        this.setState(newState);

    }

    render() {
      
        return (
            <div>

              {/*TODO: import component ProductList */}

                {/* Props: truyền data (biến, hàm)
                Chỉ truyền giữa cha con liền kề, và đi từ cha xuống con không truyền ngược lại */}

                <ProductList  xemChiTietProps={this.xemChiTiet}   mangPhoneProps={this.mangPhone} numberProduct={5}/>

               <TableDetail phone={this.state.phone}/>

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