import "./Scss/App.css";

import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";

import { AppProvider } from "./AppContext";

function App() {
  return (
    <div className="App-Container">
      <AppProvider>
        <Header />
        <HomePage />
      </AppProvider>
    </div>
  );
}

export default App;
