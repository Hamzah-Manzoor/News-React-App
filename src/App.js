import News from "./components/News";
import Details from "./components/Details";
import Categories from "./components/Categories";
import Navbar from "./components/Navbar";
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
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
            <Route exact path="/details" element={<Details/>} />
            <Route exact path="/categories" element={<Categories/>} />
            
          </Routes>
        </div>
      
      </div>
    </Router>
  );
}

export default App;
