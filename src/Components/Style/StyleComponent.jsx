import React, { Component } from "react";

import "./style.css";

// import default: đặt tên tùy ý - style,css,....
import css from "./style.module.css";

// export name
import { mergeClassName } from "../../utils";

// jsx: js + html

/**
 * Style:
 *  1. inline style: cần truyền là một object
 *  2. style global: cần phải import file css vào, ảnh hưởng toàn bộ dự án.
 *  3. module style: style component này không bị ảnh hưởng đến component khác. đặt tên hơi dài.
 */
export default class StyleComponent extends Component {
  render() {
    // những giá trị của style chuyển về string
    const style = {
      color: "red",
      // Đối với những thuộc tính có dấu gạch ngang (-) => chuyển về dạng camelCase
      fontSize: "40px",
      fontWeight: 600,
    };

    console.log(css);

    return (
      <div>
        {/* ctrl + / */}
        {/* 1. inline style */}
        {/* <h1 style={style}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, saepe!
        </h1>

        <p style={{ color: "blue" }}>Lorem ipsum dolor sit amet.</p> */}

        {/* 2. style global */}
        <h1 className={"heading"}>Lorem ipsum dolor sit amet.</h1>

        {/* 3. Cách sử dụng của module css */}
        <h2 className={css["title"]}>Lorem ipsum dolor sit amet.</h2>

        {/* css.heading => style_heading__R5AFF */}
        <h3 className={css.heading}>Lorem, ipsum.</h3>

        <h4 className={css["title-heading"]}>Lorem, ipsum.</h4>

        <h5 className={css.TitleHeading}>Lorem h5.</h5>
        <h6 className={`${css["TitleHeading"]} ${css["heading"]}`}>
          Lorem h6.
        </h6>

        {/* --------- */}
        <h6
          className={mergeClassName(
            css["TitleHeading"],
            css["heading"],
            css["color"]
            //...
          )}
        >
          Lorem h6-2.
        </h6>
      </div>
    );
  }
}
