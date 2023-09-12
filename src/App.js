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

// App : component chính, component cha, chứa các component con
function App() {
  return (
    <div className="App container">
      <XemChiTietSP/>
      {/* <ChangeColorHouse /> */}
      {/* <FontSize /> */}
      {/* <StateComponent /> */}
      {/* <StyleComponent /> */}
      {/* <StyleComponent2 /> */}

      {/* <CardComponent/> */}
      {/* <HeaderRCC />
      <div className="row">

        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />

      </div> */}
      {/* <HomeComponent/> */}
    </div>
  );
}

export default App;
