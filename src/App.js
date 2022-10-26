import { useMoralis } from "react-moralis";
import { useEffect } from "react";
import Layout from "./layout/Layout";
import Launch from "./components/sections/Launch";

function App() {

  const year = new Date().getFullYear()
  const connectorId = window.localStorage.getItem("connectorId");
  const chainId = process.env.REACT_APP_CHAIN_ID;
  const { isWeb3Enabled, isAuthenticated, isWeb3EnableLoading, isInitialized, enableWeb3 } = useMoralis();
  useEffect(() => {
    async function bootWeb3() {
      if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) {
        await enableWeb3({ provider: connectorId, chainId: chainId });
      }
    }
    bootWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInitialized, isAuthenticated]);
  return (
    <Layout>
      <Launch />
    </Layout>
  );
}

export default App;
