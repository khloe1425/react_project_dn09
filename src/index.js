import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HeaderRCC from './Components/HeaderRCC';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log(<div></div>); 
//! render() chỉ cho phép 1 obj jsx
root.render(
   // <div>Dự án react dn09</div>
   // <HeaderRCC/>
   // <CardProduct/>
   // <HeaderRCC></HeaderRCC>
   <App/>
);


/**
 * JS
 * div: thẻ html
 * 
 * document.getElementById('root').innerHTML = "<div>Hello</div>";
 * => string
 * 
 * Reactjs
 * div : đối tượng JSX
 * render(): xử lý obj JSX
 */