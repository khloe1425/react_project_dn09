import { ReactFormConst } from "./react-form.const";

const stateDefault = {
  listProduct: [], // 0x111111111
}; // 0xaaaaaaaa

// ...: spread operator

export const reactFormReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case ReactFormConst.Submit:
      console.log("payload", action.payload);

      // thêm payload vào listProduct
      const newListProduct = [...state.listProduct]; // tạo địa chỉ ô nhớ mới
      //   0x22222222222
      newListProduct.push(action.payload);

      state.listProduct = newListProduct; // 0x222222222

      return { ...state }; // 0xbbbbbbbbb
    /**
     * {
     *   listProduct: [], // 0x111111111
     *
     * } 0xbbbbbbbbb
     */
    case ReactFormConst.Delete: {
      // filter lọc ra những phần tử thỏa mãn điều kiện
      const newListProduct = state.listProduct.filter(
        (p) => p.id !== action.payload
      );

      state.listProduct = newListProduct;

      return { ...state };
    }
    case ReactFormConst.Edit:
      return state;
    default:
      return state;
  }
};
