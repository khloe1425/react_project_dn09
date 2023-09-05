import logo from './logo.svg';
import './App.css';
import HeaderRCC from './Components/HeaderRCC';
import CardProduct from './Components/CardProduct';
import HomeComponent from './Components/BTComponent/HomeComponent';
import CardComponent from './Components/DataBinding/CardComponent';

// App : component chính, component cha, chứa các component con
function App() {
  return (
    <div className="App container">
      
      <CardComponent/>
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
