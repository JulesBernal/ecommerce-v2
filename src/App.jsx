import './App.scss';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Splash from './components/Splash';
import Shop from './components/Shop';
import Contact from './components/Contact'
import React, {useState} from 'react'
import Toggle from './components/Toggle';
import { set } from 'react-hook-form';
function App() {
  const [toggled,setToggled] = useState("");
  document.body.style.backgroundImage = toggled ? "none" : 'url("./fruits/paperBG.webp")';
  return (
    <main className="App">
    <Router>
      <Toggle data={[toggled,setToggled]} />
      <Header data={toggled}/>
      <article>
      <Routes>
        <Route path='/' element={<Splash key={toggled}/>}/>
        <Route path='/shop' element={<Shop sheep={toggled}/>}/>
        <Route path='/contact' element={<Contact key={toggled}/>}/>
      </Routes>
      </article>
      <Footer data={toggled}/>
    </Router>
    </main>
  );
}

export default App;
