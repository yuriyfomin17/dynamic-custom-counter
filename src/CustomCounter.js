import React from 'react';


function CustomCounter(props) {
    /* Here new array PositiveNumOfButtons is created via turning out of an array. Specifically,
     * Array methods is used to create an array of length props.NumberOfButtons where each element is undefined.
     * However, we use array.keys to create array of 0, 1, 2 ...props.NumberOfButtons-1 array. Then via map function we
     * we access  each element and add on1 to get 1, 2, 3 ...props.NumberOfButtons. Note method array.map creates new array */
    const PositiveNumOfButtons = [...Array(props.NumberOfButtons).keys()].map((el) => el + 1);
    /* Now we iterate over PositiveNumOfButtons to create negative buttons. i.e. via map method we multiply each element
     * of PositiveNumOfButtons by - 1   */
    const NegativeNumButtons = PositiveNumOfButtons.map((el) => (el * -1));
    /* Here we iterate over PositiveNumOfButtons via map to call react component  button
     * which in turn if clicked would call function in App.js given via props */
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
