import React from 'react';


function CustomCounter(props) {
    const PositiveNumOfButtons = [...Array(props.NumberOfButtons).keys()].map((el)=>el+1);
    const NegativeNumButtons = PositiveNumOfButtons.map((el) => (el * -1));
    return (
        <center>
            <div>
                Index:({props.index})
                {"    "}
                {PositiveNumOfButtons.map((el, index) => <button
                    onClick={() => props.ChangeCustomCounter(props.index, el)}
                    key={index}>{el}</button>
                )}
                {"    "}
                {props.valueToChange}
                {NegativeNumButtons.map((el, index) => <button
                    onClick={() => props.ChangeCustomCounter(props.index, el)}
                    key={index}>{el}</button>
                )}
                {"    "}
                <button onClick={() => props.ResetCustomCounter(props.index)}> Reset to zero</button>
                {"    "}
                <button onClick={() => props.destroyCustomCounter(props.index)}> Delete this counter</button>
                {"    "}
            </div>
        </center>
    );
}

export default CustomCounter;
