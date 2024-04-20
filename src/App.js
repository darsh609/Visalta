import "./App.css";
import {Navbar} from "./Navbar";
import {Home} from "./Home"
import { Login } from "./Login";
import {Route,Routes} from "react-router-dom"
function App() {
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inte">
    <Navbar/>
    <Routes>
      <Route path="signup" element={<Login/>}/>
      <Route path="/" element={<Home/>}/>

      
    </Routes>

    </div>  );
}

export default App;
