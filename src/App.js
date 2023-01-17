import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Join from "./pages/Join";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </div>
  );
}

export default App;
