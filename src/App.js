import logo from "./logo.svg";
import "./App.css";
import HeaderRCC from "./Components/HeaderRCC";
import CardProduct from "./Components/CardProduct";
import HomeComponent from "./Components/BTComponent/HomeComponent";
import CardComponent from "./Components/DataBinding/CardComponent";
import StyleComponent from "./Components/Style/StyleComponent";
import StyleComponent2 from "./Components/Style/StyleComponent2";
import StateComponent from "./Components/StateComponent/StateComponent";
import FontSize from "./Components/StateComponent/FontSize";
import ChangeColorHouse from "./Components/StateComponent/ChangeColorHouse";
import XemChiTietSP from "./Components/Props/XemChiTietSP";
import BTGioHang from "./Components/BTGioHang/BTGioHang";
import Component1 from "./Components/DemoRedux/component-1";

// index: là file chỉ mục, luôn được tìm kiếm đầu tiên
import CountRedux from "./Components/DemoRedux/count-redux";
import ChangeColorBox from "./Components/DemoRedux/change-color-box/change-color-box";

/**
 * Tại vì GameXucXac có import file global css ảnh hướng đến toàn bộ dự án
 */
// import GameXucXac from "./Components/DemoRedux/game-xuc-xac/game-xuc-xac";
import ReactForm from "./Components/react-form/react-form";
import LifeCycle from "./Components/life-cycle";
/**
 * shift + alt + o: format (remove) lại những file import
 */

// App : component chính, component cha, chứa các component con
function App() {
  return (
    <div>
      {/* <LifeCycle /> */}
      <ReactForm />
      {/* <GameXucXac /> */}
      {/* <ChangeColorBox /> */}
      {/* <CountRedux /> */}

      {/* <Component1 /> */}
      {/* <BTGioHang/> */}

      {/* <XemChiTietSP/> */}
    </div>
  );
}

export default App;
