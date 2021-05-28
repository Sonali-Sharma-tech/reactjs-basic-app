
import { useState} from 'react';

const HandleEvent = (props) => {
  return (<><h5>Component inside Functional Component {props.value}</h5></>);
}

export const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() =>setCount(count+1)}>Click me</button>
            {/* <button onClick={handleEvent} value="HandleEvent">Click Event</button> */}
            <HandleEvent value={'Counter'} />
        </div>
    )
}


// ReactDOM.render(<Counter/>, document.getElementById('app'));