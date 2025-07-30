import { Outlet } from "react-router-dom";
import  Navbar  from "./components/navbar/Navbar";
import Footar from "./components/footar/Footar";

function App() {
  return (
    <>
     <Navbar />
      <Outlet />
      <Footar />
    </>
  )
}

export default App