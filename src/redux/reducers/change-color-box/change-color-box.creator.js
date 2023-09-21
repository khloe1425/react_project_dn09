import { ChangeColorBoxConst } from "./change-color-box.const";

export const changeColorCreator = (payload) => {
  return {
    type: ChangeColorBoxConst.CHANGE_COLOR,
    payload,
  };
};
