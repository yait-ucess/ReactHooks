import logo from './logo.svg';
import './App.css';
// import UseEffect from './components/UseEffect';
// import TimerContainer from './components/TimerContainer';
// import ApiFetch from './components/ApiFetch';
import AppContext from './contexts/AppContext';
import B from './components/B';

function App() {
  return (
    <AppContext.Provider value={'value from App.js'}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <Basic1 /> */}
          {/* <Basic2 name="successful man" /> */}
          {/* <UseEffect /> */}
          {/* <TimerContainer /> */}
          {/* <ApiFetch /> */}
          <B />
        </header>
      </div>
    </AppContext.Provider>
  );
}

export default App;