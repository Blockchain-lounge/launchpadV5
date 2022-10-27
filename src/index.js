import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MoralisProvider } from "react-moralis";
import Explorer from './pages/Explorer.js'
import Staking from './pages/Staking';
import Rewards from './pages/Rewards';
import Swap from './pages/Swap'
import Info from './pages/Info'
import Info1 from './pages/Info1'


const root = ReactDOM.createRoot(document.getElementById("root"));
const serverUrl = process.env.REACT_APP_MORALIS_SERVER_URL;
const appId = process.env.REACT_APP_MORALIS_APP_ID;

root.render(
  <React.StrictMode>
    <MoralisProvider serverUrl="https://hdzl2ub3gi9l.grandmoralis.com:2053/server" appId="hi1PPcg5QWC4twpwY499hSYuGhiXPC2cF7lLK9hL">
      {/* <MoralisProvider serverUrl={serverUrl} appId={appId}> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/explorer" element={<Explorer />} />
          <Route path="/staking" element={<Staking />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/Swap" element={<Swap />} />
          <Route path="/private-sale" element={<Info />} />
          <Route path="/public-sale" element={<Info1 />} />
        </Routes>
      </BrowserRouter>
    </MoralisProvider>
  </React.StrictMode >,
);

