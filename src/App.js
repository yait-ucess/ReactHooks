import logo from './logo.svg';
import './App.css';
import UseEffect from "./components/UseEffect";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Basic1 /> */}
        {/* <Basic2 name="successful man" /> */}
        <UseEffect />
      </header>
    </div>
  );
}

export default App;