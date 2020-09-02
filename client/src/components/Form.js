import React, { useState } from 'react'

const Form = () => {
    const [task, setTask] = useState("")
    const [list, setList] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();
        setList([...list, task]);
    }

    const handleChange = (e) => {
        setTask(e.target.value)
    }
    return(
        <div>
        <form>
            <label>Add a task: </label>
            <input type="text" 
            name="task" 
            id="task" 
            placeholder="water plants, pack lunch, etc."
            onChange={ handleChange}
            />
            <input type="submit" value="Add" onClick={submitHandler} />
        </form>

        <ul>
            {list.map((task, index) => {
                return <li key={index}>{task} <input type="checkbox"/>
                
                </li>
            })}
        </ul>
    </div>
    )
}

export default Form;