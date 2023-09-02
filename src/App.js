

import News from "./components/News";
import Articles from "./components/Article";
import Navbar from "./components/Navbar";
import Business from "./components/Business";
import Entertainment from "./components/Entertainment";
import Health from "./components/Health";
import Science from "./components/Science";
import Sports from "./components/Sports";
import Technology from "./components/Technology";
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="app h-max max-w-full bg-slate-900 text-white flex flex-col">

        <div className="navbar w-full">
          <Navbar/>
        </div>

        <div className="dynamic-area w-full">
          <Routes>
            
            <Route exact path="/" element={<News/>} />
            <Route exact path="/articles" element={<Articles/>} />
            <Route exact path="/business" element={<Business/>} />
            <Route exact path="/entertainment" element={<Entertainment/>} />
            <Route exact path="/health" element={<Health/>} />
            <Route exact path="/science" element={<Science/>} />
            <Route exact path="/sports" element={<Sports/>} />
            <Route exact path="/technology" element={<Technology/>} />
            
          </Routes>
        </div>
      
      </div>
    </Router>
  );
}

export default App;
