import logo from './logo.svg';
import './App.css';
// import UseEffect from './components/UseEffect';
// import TimerContainer from './components/TimerContainer';
import ApiFetch from './components/ApiFetch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Basic1 /> */}
        {/* <Basic2 name="successful man" /> */}
        {/* <UseEffect /> */}
        {/* <TimerContainer /> */}
        <ApiFetch />
      </header>
    </div>
  );
}

export default App;