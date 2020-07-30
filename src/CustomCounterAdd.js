import React, {useState} from "react";

const ShowInput = props => {
    if (props.Button) {
        return (<div>
            <legend>Enter magnitude of change (min=1, max=5)</legend>
            <input onChange={props.checkEvent}/>
        </div>);
    } else {
        return <button onClick={props.changeButton}>Add Custom Counter</button>
    }
    return null

}

function CustomCounterAdd(props) {
    const [Button, setButton] = useState(false)
    const checkEvent = (event) => {
        if (event.target.value >= 1 && event.target.value <= 5) {
            props.CreateCustomCounter(event.target.value)
            setButton(!Button)
        }
    }

    const changeButton = () => {
        setButton(!Button)
    }

    return (
        <div>
            <ShowInput Button={Button} checkEvent={checkEvent} changeButton={changeButton} setter={setButton}/>

        </div>
    )

}

export default CustomCounterAdd