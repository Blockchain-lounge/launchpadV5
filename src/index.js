import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from './pages/App';
import { MoralisProvider } from "react-moralis";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
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
    <MoralisProvider serverUrl={serverUrl} appId={appId}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<App />} />
          <Route path="/explorer" element={<Explorer />} />
          <Route path="/staking" element={<Staking />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/Swap" element={<Swap />} />
          <Route path="/private-sale" element={<Info sale={2} />} />
          <Route path="/public-sale" element={<Info1 />} />
        </Routes>
      </BrowserRouter>
    </MoralisProvider>
  </React.StrictMode>
);
