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

// App : component chính, component cha, chứa các component con
function App() {
  return (
    <div className="App container">
      <ChangeColorBox />
      {/* <CountRedux /> */}

      {/* <Component1 /> */}
      {/* <BTGioHang/> */}

      {/* <XemChiTietSP/> */}
    </div>
  );
}

export default App;
