import { BrowserRouter,Routes, Route, } from "react-router-dom";
import "./App.css";
import Home from "./Pages/home";
import Hotels from "./Components/Hotels";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/hotels" element={<Hotels/>}/>
    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
