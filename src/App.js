import { BrowserRouter,Routes, Route, } from "react-router-dom";
import "./App.css";
import Home from "./Pages/home";
import Hotels from "./Components/Hotels";
import HotelsProfile from "./Components/Hotels/HotelsProfile";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/hotels" element={<Hotels/>}/>
      <Route path="/hotels/:id" element={<HotelsProfile/>}/>
    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
