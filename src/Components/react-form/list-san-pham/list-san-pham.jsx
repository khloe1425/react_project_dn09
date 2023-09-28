import React, { Component } from "react";

export default class ListSanPham extends Component {
  render() {
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
          <tr>
            <th scope="row">1</th>
            <td>123</td>
            <td>$123</td>
            <td>
              <img
                alt=""
                src="https://i.pravatar.cc?img=1"
                style={{
                  width: 50,
                  height: 50,
                }}
              />
            </td>
            <td>Laptop</td>
            <td>Lorem ipsum dolor</td>
            <td>
              <button>Edit</button>
              <button className="mx-2">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
