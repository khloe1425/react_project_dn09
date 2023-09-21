import { combineReducers, createStore } from "redux";
import { changeColorBoxReducer } from "./reducers/change-color-box/change-color-box.reducer";
import { gameXucXacReducer } from "./reducers/game-xux-xac/reducer";
/**
 * Reducer: nơi quản lý state, và logic
 * state = 10; 10 giá trị default của state
 * reducer bắt buộc có return;
 *
 * khi dispatch thì nó sẽ chạy tất cả các hàm reducer của các bạn.
 * Chúng ta muốn xử lý xét lại state nào thì vào reducer đó xử lý.
 */

const rootReducer = combineReducers({
  countReducer: (state = 10, action) => {
    // 'countReducer/...'
    if (action.type === "TANG_GIAM_COUNT") {
      state += action.payload;
    }

    return state;
  },
  changeColorBoxReducer,
  gameXucXacReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
