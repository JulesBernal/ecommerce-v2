import './App.scss';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Splash from './components/Splash';
import Shop from './components/Shop';
import Contact from './components/Contact'
import React, {useState} from 'react'
import Toggle from './components/Toggle';
import Cart from './components/Cart';
function App() {
  const [toggled,setToggled] = useState("");
  const [shopCart,setShopCart] = useState("");
  const [total,setTotal] = useState(0);
  // const something  = () = shopCart ? shopCart.map((fruit) => { setTotal(total + parseFloat(fruit.price))}) : '0';
  document.body.style.backgroundColor='#a72f58';
  document.body.style.textAlign='center';
  document.body.style.backgroundImage = toggled ? "none" : 'url("./fruits/paperBG.webp")';
  return (
    <main className="App">
    <Router>
      <Header data={toggled}/>
      <article>
      <Routes>
        <Route path='/' element={<Splash sheep={toggled}/>}/>
        <Route path='/shop' element={<Shop sheep={toggled} cat={[shopCart,setShopCart]}/>}/>
        <Route path='/cart' element={<Cart sheep={toggled} data={shopCart} val={total}/>}/>
        <Route path='/contact' element={<Contact sheep={toggled}/>}/>
      </Routes>
      </article>
      <Footer data={toggled}/>
      <Toggle data={[toggled,setToggled]} />
    </Router>
    </main>
  );
}

export default App;
