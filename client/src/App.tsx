import Web3Provider from "./components/Web3Context";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <h1>Send Coin</h1>
      <hr />
      <Web3Provider>
        <Dashboard />
      </Web3Provider>
    </div>
  );
}

export default App;
