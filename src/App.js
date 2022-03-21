import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import LostAccount from "./Components/Lost/LostAccount";
import DashboardHome from "./Components/Dashboard/DashboardHome";
import DashboardBenef from "./Components/Dashboard/DashboardBenef";
import DashboardContato from "./Components/Dashboard/DashboardContato";
import DashboardParc from "./Components/Dashboard/DashboardParc";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home/*" element={<Home />} />
          <Route path="/lost/" element={<LostAccount />} />
          <Route path="/dashboard/*" element={<DashboardHome />} />
          <Route path="/dashboard/benef/" element={<DashboardBenef />} />
          <Route path="/dashboard/contato/" element={<DashboardContato />} />
          <Route path="/dashboard/parc/" element={<DashboardParc />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
