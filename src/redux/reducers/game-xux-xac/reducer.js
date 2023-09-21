import { GameXucXac } from "./const";

const STATE_DEFAULT = {
  banChon: "tai",
  soBanThang: 0,
  soBanChoi: 0,
  mangXucXac: [
    "./img/game-xuc-xac/1.png",
    "./img/game-xuc-xac/2.png",
    "./img/game-xuc-xac/3.png",
  ],
};
// 0x11111111
/**
 * re-render khi giá trị state thay đổi,
 *
 * Đối với state là array hoặc object thì dùng spread operator
 */
export const gameXucXacReducer = (state = STATE_DEFAULT, action) => {
  switch (action.type) {
    case GameXucXac.BanChon:
      state.banChon = action.payload;

      return {
        ...state,
      };
    case GameXucXac.PlayGame: {
      state.soBanChoi += 1;

      const newMangXucXac = [];
      let tongDiem = 0;
      for (let i = 0; i < 3; i++) {
        // 1 -> 6
        const diem = Math.floor(Math.random() * 6 + 1);
        const hinhAnh = `./img/game-xuc-xac/${diem}.png`;

        tongDiem += diem;
        newMangXucXac.push(hinhAnh);
      }

      state.mangXucXac = newMangXucXac;

      /**
       * Xiu: 3 - 10
       * Tai: 11 - 18
       */

      if (
        (state.banChon === "tai" && tongDiem >= 11) ||
        (state.banChon === "xiu" && tongDiem <= 10)
      ) {
        state.soBanThang += 1;
      }

      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
