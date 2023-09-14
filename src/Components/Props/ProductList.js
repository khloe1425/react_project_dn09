import React, { Component } from 'react'
import ProductItem from './ProductItem';

export default class ProductList extends Component {
    

    hienThiDSMap = () => {
        let {xemChiTietProps,mangPhoneProps} = this.props;
        return mangPhoneProps.map((phone) => {

            //! trả về mảng mới chưa trả ra khỏi phương thức hienThiDSMap
            return <div className='col-4' key={`phone${phone.maSP}`}>
                <ProductItem xemChiTietProps={xemChiTietProps} phoneProps={phone} />

            </div>

        })

    }

    render() {
        // console.log(this.props);
        // console.log(this.props.mangPhoneProps);
        return (
            <div className='row'>
                {/* Binding dữ liệu trả về từ 1 hàm lên trên UI */}
                {/* {this.hienThiDS()} */}
                {this.hienThiDSMap()}
            </div>
        )
    }
}
