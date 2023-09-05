import React, { Component } from 'react'

export default class CardComponent extends Component {


    //Thuộc tính của class (dùng trong class)
    moTa = "Khách hàng 1";

    //tạo được arrow cho phương thức trong react
    showInfo = () => {
        alert(this.moTa);
        console.log(this.moTa)
    }

    showInfo2 = (name) => {
        alert(name);
    }


    //Phương thức render
    render() {

        //biến của phương thức (biến cục bộ - chỉ dùng được trong render() )
        let fullName = "Nguyễn Thị Khách Hàng";

        return (
            <div className="card" style={{ width: '18rem' }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{fullName}</h5>
                    <p className="card-text">{this.moTa}</p>
                    <button onClick={this.showInfo} className='btn btn-success'>Show Info</button>
                    <button onClick={() => { 
                        this.showInfo2(fullName);//chay khi click
                     }} className='btn btn-success'>Show Info</button>
                </div>
            </div>

        )
    }
}
/**
 *ES6:  `${fullName}`
*! React: không sử dụng dom (vì UI là jsx) => data binding để đưa dữ liệu lên UI {tenbien}
* Phương thức:
*! ES6: arrow function hạn chế dùng cho phương thức
 */

// document.getElementById("idbutton").onclick = showInfo
//document.getElementById("idbutton").onclick = showInfo2(fullname)
/*document.getElementById("idbutton").onclick = function(){
    showInfo2(fullname); //đang chờ chạy khi click
}
*/