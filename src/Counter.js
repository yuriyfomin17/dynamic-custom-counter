import React from 'react';


function Counter(props) {
    return (
        <center>
            <div>
                Index:({props.index})
                {"    "}
                <button onClick={() => props.plusOne(props.index, true)}>+1</button>
                {"    "}
                Counter: {props.count}
                {"    "}
                <button onClick={() => props.plusOne(props.index, false)}>-1</button>
                {"    "}
                <button onClick={() => props.resetCounter(props.index)}>Reset to zero</button>
                {"    "}
                <button onClick={() => props.destroyCounter(props.index)}> Delete this counter</button>
            </div>
        </center>
    );
}

export default Counter;
