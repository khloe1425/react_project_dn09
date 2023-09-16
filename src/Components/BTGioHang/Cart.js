import React, { Component } from 'react'

export default class Cart extends Component {

  // hàm chỉ hiển thị dư liệu từ state không có gọi setState thì ko cần xet 2 đk
  showCart = () => {
    let {productCart, deleteCart, updateSoLuong} = this.props;



    return productCart.map((proCart) => {
      let { id, name, price, soLuong, image } = proCart;
      return <tr key={`cart${id}`}>
        <td>{id}</td>
        <td>
          <img style={{ width: "50px" }} src={image} alt="" />
        </td>
        <td>
          {name}
        </td>
        <td>
          <button  onClick={() => { 
                updateSoLuong(id, 1);
           }}   
           className='btn btn-success'>+</button>
          <span style={{ padding: "10px" }}>{soLuong}</span>
          <button onClick={() => { 
                updateSoLuong(id, -1);
           }}   
          className='btn btn-success'>-</button>
        </td>
        <td>
          {price}
        </td>
        {/* các data có thể tính toán từ data có sẵn không cần lưu trữ vào đối tượng */}
        <td>
          {price * soLuong}
        </td>
        <td>
          <button onClick={() => { 
              deleteCart(id);
              
           }} className='btn btn-danger'>Xóa</button>
        </td>
      </tr>
    })
  }



  render() {
    return (
      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Giỏ hàng</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">

              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Mã</th>
                    <th scope="col">Hình</th>
                    <th scope="col">Tên</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col">Đơn giá</th>
                    <th scope="col">Thành tiền</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {this.showCart()}
                </tbody>
              </table>


            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
