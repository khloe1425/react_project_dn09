import { combineReducers, createStore } from "redux";
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
  changeColorBoxReducer: (state = "green", action) => {
    switch (action.type) {
      case "CHANGE_COLOR":
        state = action.payload;
        return state;
      default:
        return state;
    }
  },
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
