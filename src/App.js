import "./App.css";
import {Navbar} from "./Navbar";
import {Home} from "./Home"
import { Login } from "./Login";
import {Route,Routes} from "react-router-dom"
import Food from "./servicespage/food"
import Travel from "./servicespage/travel"
import Medical from "./servicespage/medical"
import Worship from "./servicespage/worship"
import Foodfil from "./servicespage/foodfil";

function App() {
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inte">
    <Navbar/>
    <Routes>
      <Route path="signup" element={<Login/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="food" element={<Food/>}/>
      <Route path="worship" element={<Worship/>}/>
      <Route path="travel" element={<Travel/>}/>
      <Route path="medical" element={<Medical/>}/>
      <Route path="food/filters" element={<Foodfil/>}/>


      
    </Routes>

    </div>  );
}

export default App;
