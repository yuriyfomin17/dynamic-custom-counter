import React, {useState} from 'react';
import Counter from "./Counter";
import CustomCounter from "./CustomCounter";
import CustomCounterAdd from "./CustomCounterAdd";


function App() {
    const [counter, setCounters] = useState([])
    const [NumberOfCustomCounters, setCustomCounters] = useState([])
    const r = Math.round(Math.random() * 10)
    const addCounter = () => {
        setCounters([...counter, r])
    }

    const plusOne = (index, Flag) => {
        let newCounter = counter.slice()
        if (Flag) {
            newCounter[index] = newCounter[index] + 1;
        } else {
            newCounter[index] = newCounter[index] - 1;
        }
        setCounters(newCounter)
    }
    const resetCounter = (index) => {
        let newCounter = counter.slice()
        newCounter[index] = 0;
        setCounters(newCounter)
    }
    const destroyCounter = (index) => {
        let newCounter = counter.slice()
        newCounter.splice(index, 1)
        setCounters(newCounter)
    }
    const DeleteAll = () => {
        setCounters([])
    }
    const ResetAll = () => {
        const newCounter = counter.map((element) => 0);
        setCounters(newCounter)
    }
    const CreateCustomCounter = (value) => {
        console.log(value)

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
                    <button onClick={addCounter}>Add counter</button>
                    <button onClick={DeleteAll}> Delete all counters</button>
                    <button onClick={ResetAll}> Reset all to zero</button>
                    {counter.map((el, index) => <Counter
                            count={el}
                            key={index}
                            index={index}
                            plusOne={plusOne}
                            resetCounter={resetCounter}
                            destroyCounter={destroyCounter}
                        />
                    )}

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

