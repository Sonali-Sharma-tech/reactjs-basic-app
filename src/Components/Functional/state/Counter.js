import { useState} from 'react';

const handleEvent = (event) => {
  console.log(event.target.value);
}

export const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() =>setCount(count+1)}>Click me</button>
            <button onClick={handleEvent} value="HandleEvent">Click Event</button>
        </div>
    )
}


// ReactDOM.render(<Counter/>, document.getElementById('app'));