import React, {useState} from 'react';
import Counter from "./Counter";
import CustomCounter from "./CustomCounter";
import CustomCounterAdd from "./CustomCounterAdd";


function App() {
    /* Variable counter created via hook useState. Also function setCounters is created which allows to change Counter
     * useState is hook which allows to change counter without writing a class. counter is an array */
    const [counter, setCounters] = useState([])
    /*Same here NumberOfCustomCounters is created via hook useState and function setCustomCounters changes
    NumberOfCustomCounters  */
    const [NumberOfCustomCounters, setCustomCounters] = useState([])
    /* Random number is created by using Math.random which produces pseudo random number is range [0,1)
     * To get the range [0,10) it needs to be multiplied by 10 and rounded by method Math.round*/
    const r = Math.round(Math.random() * 10)
    const addCounter = () => {
        setCounters([...counter, r])
    }
    /* Function plusOne changes the value of particular counter. index of element in array is passed to it
     * As well as boolean value. Index is passed to change particular element of an array of counters
     * While boolean value is used to indicate whether value of counter should be decreased or increased*/
    const plusOne = (index, Flag) => {
        /* Array.slice is utilized to create a copy of an array counter. Since we have not specified which par
         * should be copied. Hence, all parts of array counter is copied */
        let newCounter = counter.slice()
        if (Flag) {
            newCounter[index] = newCounter[index] + 1;
        } else {
            newCounter[index] = newCounter[index] - 1;
        }
        setCounters(newCounter)
    }
    /*Function to set the value of counter to zero */
    const resetCounter = (index) => {
        let newCounter = counter.slice()
        newCounter[index] = 0;
        setCounters(newCounter)
    }
    /*Function to delete particular counter*/
    const destroyCounter = (index) => {
        let newCounter = counter.slice()
        /*Method array splice is utilized to delete particular element. Specifically,
         *Splice require index which is the starting point for deleting elements
         *and deleteCount is the number of elements to be deleted */
        newCounter.splice(index, 1)
        setCounters(newCounter)
    }
    /*Function to delete all counters by setting counter to empty array via hook. i.e. function setCounters
    * created via hook useState*/
    const DeleteAll = () => {
        setCounters([])
    }
    const ResetAll = () => {
        /* method map is used to create new array by calling a function on every element
         * of the old array . In our case function equates every element to zero */
        const newCounter = counter.map(() => 0);
        setCounters(newCounter)
    }
    const CreateCustomCounter = (value) => {
        console.log(value)
        /*Turning out of the array NumberOfCustomCounters to add ne element via [...NumberOfCustomCounters, new element] */
        setCustomCounters([...NumberOfCustomCounters, [Number(value), r]])
    }
    const DestroyCustomCounter = (index) => {
        let newCustomCounter = NumberOfCustomCounters.slice()
        newCustomCounter.splice(index, 1)
        setCustomCounters(newCustomCounter)

    }
    const ResetCustomCounterToZero = (index) => {
        let newCustomCounter = NumberOfCustomCounters.slice()
        newCustomCounter[index][1] = 0;
        setCustomCounters(newCustomCounter)
    }
    const DeleteAllCustomCounters = () => {
        setCustomCounters([])
    }
    const ChangeCustomCounterValue = (index, update) => {
        let newCustomCounter = NumberOfCustomCounters.slice()
        newCustomCounter[index][1] = newCustomCounter[index][1] + update;
        setCustomCounters(newCustomCounter)
    }
    const ResetAllCustomCounters = () => {
        const newCustomCounter = NumberOfCustomCounters.slice()
        newCustomCounter.map((el) => el[1] = 0)
        setCustomCounters(newCustomCounter)
    }

    return (
        <center>
            <fieldset>
                <legend>Default Counter</legend>
                <div className="App">
                    <button className="btn-primary" onClick={addCounter}>Add counter</button>
                    <button className="btn-primary" onClick={DeleteAll}> Delete all counters</button>
                    <button className="btn-primary" onClick={ResetAll}> Reset all to zero</button>
                    <ul className="list-group">
                        {counter.map((el, index) => <Counter
                                count={el}
                                key={index}
                                index={index}
                                plusOne={plusOne}
                                resetCounter={resetCounter}
                                destroyCounter={destroyCounter}
                            />
                        )}
                    </ul>

                </div>
            </fieldset>
            <br/>
            <br/>
            <br/>
            <fieldset>
                <legend>Custom Counter</legend>
                <div>
                    <button onClick={DeleteAllCustomCounters}> Delete all custom counters</button>
                    <button onClick={ResetAllCustomCounters}> Reset all custom counters to zero</button>
                    {NumberOfCustomCounters.map((el, index) => <CustomCounter
                            NumberOfButtons={el[0]}
                            valueToChange={el[1]}
                            key={index}
                            index={index}
                            ResetCustomCounter={ResetCustomCounterToZero}
                            destroyCustomCounter={DestroyCustomCounter}
                            ChangeCustomCounter={ChangeCustomCounterValue}
                        />
                    )}
                    <br/>
                    <br/>
                    <br/>
                    <CustomCounterAdd CreateCustomCounter={CreateCustomCounter}/>
                </div>


            </fieldset>
        </center>
    );
}


export default App;

