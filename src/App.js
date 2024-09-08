import "./App.css";
import {Navbar} from "./Navbar";
import {Home} from "./Home"
import { Login } from "./Login";
import {Route,Routes} from "react-router-dom"
import Food from "./servicespage/food"
import Traverse from "./Homes/traverse"
import Medical from "./servicespage/medical"
import  Worship  from "./servicespage/worship"
import Foodfil from "./servicespage/foodfil";
import Food1 from "./Homes/food1";
import { Order } from "./servicespage/Order";
import { Travel } from "./servicespage/Travel";
import { Rough } from "./datas/Rough";
import Foodfilter from "./servicespage/foodfilter";


function App() {
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inte">
    <Navbar/>
    <Routes>
      <Route path="signup" element={<Login/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="food" element={<Food/>}/>
      <Route path="worship" element={<Worship/>}/>
      <Route path="Traverse" element={<Traverse/>}/>
      <Route path="medical" element={<Medical/>}/>
      <Route path="food/filters" element={<Foodfilter/>}/>
      <Route path="food1" element={<Food1/>}/>
      <Route path="Order" element={<Order/>}/>
      <Route path="Travel" element={<Travel/>}/>
      <Route path="rough" element={<Rough/>}/>
    </Routes>

    </div>  );
}

export default App;
