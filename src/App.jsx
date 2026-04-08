import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PostSupply from "./pages/PostSupply";
import PostDemand from "./pages/PostDemand";
import Match from "./pages/Match";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/post-supply" element={<PostSupply />} />
        <Route path="/post-demand" element={<PostDemand />} />
        <Route path="/match" element={<Match />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;