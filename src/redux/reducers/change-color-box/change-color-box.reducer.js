import { ChangeColorBoxConst } from "./change-color-box.const";

export const changeColorBoxReducer = (state = "green", action) => {
  switch (action.type) {
    case ChangeColorBoxConst.CHANGE_COLOR:
      state = action.payload;
      return state;
    default:
      return state;
  }
};
