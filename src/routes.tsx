import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Login } from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Cases from "./pages/Cases";
import Profile from "./pages/Profile";

export function RoutesFile() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />ß
        <Route path="/register" element={<Register />} />
        <Route path="/cases" element={<Cases />} />
      </Routes>
    </Router>
  );
}
