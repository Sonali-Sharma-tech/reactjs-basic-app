import logo from './logo.svg';
import './App.css';
import {Counter} from './state/Counter.js';
import {WelcomeMessage} from './props/WelcomeMessage.js';

function App() {
   const callProp = (msg) => {
    return msg;
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <WelcomeMessage myprop1={'John'} myprop2={'Doe'}/> */} 
        {/* <WelcomeMessage> John Doe </WelcomeMessage> */}
        <WelcomeMessage myprop={callProp}/>
        <Counter/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>
    </div>
  );
}

export default App;
