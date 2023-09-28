// ctrl + p: tìm tên file trong dự án.
import React, { Component, Fragment } from "react";
import FormDangKy from "./form-dang-ky/form-dang-ky";
import ListSanPham from "./list-san-pham/list-san-pham";

export default class ReactForm extends Component {
  render() {
    return (
      <div className="container">
        {/* Thẻ fragment giúp chúng ta bao bọc lại 2 component cùng cấp để render lên giao diện, mà không tạo ra những thẻ dư thừa */}
        <FormDangKy />
        <ListSanPham />
      </div>
    );
  }
}
