import './App.css';
import { Navbarr} from './navbar.js';
import { Routes, Route } from "react-router-dom";
import { Home1, Error404 } from "./page1_Home.js";
import { Characters } from "./page2_Carac.js";
import { Movies } from "./page3_Movie.js";


function App() {
  return (
    <div>
      <Navbarr/>
      <p></p>
      <Routes>        
        <Route path="/" element={<Home1/>}/>
        <Route path="/home" element={<Home1/>}/>
        <Route path="/characters" element={<Characters/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="*" element={<Error404/>}/>
      </Routes>
    </div>
  );
}

export default App;
