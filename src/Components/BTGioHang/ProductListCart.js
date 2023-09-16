import React, { Component } from 'react'
import ProductItemCart from './ProductItemCart';

export default class ProductListCart extends Component {
  

  showProductList = () => {
    let {productList,addToCart} = this.props;

    //trả mảng mới ra khỏi hàm showProductList
    return productList.map((product) => {
        let { id } = product;

        // trả về mảng mới chứa các obj thẻ col-3
        return <div className="col-3 mt-3" key={`shoes${id}`}>
            <ProductItemCart addToCart={addToCart} product={product} />
        </div>
    })
}

  
  render() {
    console.log(this.props);

    return (
      <div className="row">
        {/* Gọi hàm hiển thị danh sách */}
        {this.showProductList()}
      </div>
    )
  }
}
