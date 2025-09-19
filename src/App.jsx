import { Outlet } from "react-router-dom";
import  Navbar  from "./components/navbar/Navbar";
import Footar from "./components/footar/Footar";

function App() {
  return (
    <>
     <Navbar />
     <div className="w-full overflow-x-hidden mt-20">
      <Outlet />
      </div>
      <Footar />
    </>
  )
}

export default App