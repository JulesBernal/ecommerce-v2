import './App.scss';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Splash from './components/Splash';
import Shop from './components/Shop';
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
    <Router>
      <Header />
      <div>
      <Routes>
        <Route path='/' element={<Splash/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </div>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
