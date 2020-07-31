import React from 'react';


function Counter(props) {
    return (
        <div className="list-group-item">
            Index:({props.index})
            {"    "}
            <button className="btn btn-success" onClick={() => props.plusOne(props.index, true)}>+1</button>
            {"    "}
            <span className="h2"> Counter: {props.count}</span>
            {"    "}
            <button className="btn btn-success" onClick={() => props.plusOne(props.index, false)}>-1</button>
            {"    "}
            <button onClick={() => props.resetCounter(props.index)}>Reset to zero</button>
            {"    "}
            <button className="btn btn-danger ml-2 mr-2" onClick={() => props.destroyCounter(props.index)}> Delete this
                counter
            </button>
        </div>

    );
}

export default Counter;
