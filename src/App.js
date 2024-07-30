import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './CommonComponents/Header';
import Footer from './CommonComponents/Footer';
import ProductDescription from './Pages/ProductsPage';
import { useEffect, useState } from 'react';
import ProductsPage from './Pages/ProductsPage';
import ProductDescriptionPage from './Pages/ProductDescriptionPage';

function App() {
  const[changeColor,setChangeColor]=useState("text-white")
  // useEffect(()=>{

  // },changeColor)
  console.log("dsdsd",changeColor)
  return (
    <div className="App">
        <BrowserRouter>
            <Header changeColor={changeColor}/>
            {/* <Footer/> */}
          <Routes>
              <Route path="/" element={<Home setChangeColor={setChangeColor} changeColor={changeColor}/>}/>
              <Route path="/product" element={<ProductsPage setChangeColor={setChangeColor} changeColor={changeColor}/>}/>
              <Route path="/productDescription" element={<ProductDescriptionPage setChangeColor={setChangeColor} changeColor={changeColor}/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
