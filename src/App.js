import './App.scss';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Splash from './components/Splash';
import Shop from './components/Shop';
import Contact from './components/Contact'
import React from 'react';
function App() {
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/shoplow")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);
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
