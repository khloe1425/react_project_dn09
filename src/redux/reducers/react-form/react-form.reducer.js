import { ReactFormConst } from "./react-form.const";

const stateDefault = {
  listProduct: [],
};

export const reactFormReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case ReactFormConst.Submit:
      console.log("payload", action.payload);

      // thêm payload vào listProduct
      state.listProduct.push(action.payload);

      return state;
    case ReactFormConst.Delete:
      return state;
    case ReactFormConst.Edit:
      return state;
    default:
      return state;
  }
};
