import React, { Component } from "react";
import { connect } from "react-redux";
import {
  deleteCreator,
  editCreator,
} from "../../../redux/reducers/react-form/react-form.action";
class ListSanPham extends Component {
  render() {
    console.log("listProduct", this.props.listProduct);
    return (
      <table className="table mt-4">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Product id</th>
            <th scope="col">Price</th>
            <th scope="col">Image</th>
            <th scope="col">Product type</th>
            <th scope="col">Product description</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {this.props.listProduct.map((p) => {
            return (
              <tr>
                <th scope="row">{p.id}</th>
                <td>{p.productId}</td>
                <td>${p.price}</td>
                <td>
                  <img
                    alt=""
                    src={p.image}
                    style={{
                      width: 50,
                      height: 50,
                    }}
                  />
                </td>
                <td>{p.productType}</td>
                <td>{p.productDesc}</td>
                <td>
                  <button
                    onClick={() => {
                      this.props.dispatch(editCreator(p));
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      this.props.dispatch(deleteCreator(p.id));
                    }}
                    className="mx-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    listProduct: rootReducer.reactFormReducer.listProduct,
  };
};

export default connect(mapStateToProps)(ListSanPham);
