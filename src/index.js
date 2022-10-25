import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Explorer from './pages/Explorer.js'
import Staking from './pages/Staking';
import Rewards from './pages/Rewards';
import Sweep from './pages/Sweep'
import Info from './pages/Info'
import Info1 from './pages/Info1'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/explorer" element={<Explorer />} />
        <Route path="/staking" element={<Staking />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/Sweep" element={<Sweep />} />
        <Route path="/info" element={<Info />} />
        <Route path="/info1" element={<Info1 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

