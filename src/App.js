import './App.css';
import {Counter} from './Components/Functional/state/Counter.js';
import {ParentToChild} from './Components/Functional/props/passing-props-from-parent-to-child/ParentToChild.js';

// passing functions as props
function App() {
   const callProp = (msg) => {
    return msg;
  }
  return (
    <div className="App">
      <header className="App-header">
       <h1>React app Using its Basic Concepts</h1>
        {/* <ParentToChild myprop1={'John'} myprop2={'Doe'}/> {} */}
        {/* <ParentToChild> John Doe </ParentToChild> */}
        <ParentToChild myprop={callProp}/>
        <Counter/>
       

      </header>
    </div>
  );
}

export default App;
