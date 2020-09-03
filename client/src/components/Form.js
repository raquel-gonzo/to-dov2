import React, { useState } from 'react'

const Form = (props) => {
    const [task, setTask] = useState("")

    const handleChange = (e) => {
        setTask(e.target.value)
    }
    return(
        <div>
        <form onSubmit={(e) => props.submitHandler(e, task)}  >
            <label>Add a task: </label>
            <input type="text" 
            name="task" 
            id="task" 
            placeholder="water plants, pack lunch, etc."
            onChange={ handleChange}
            />
            <input type="submit" value="Add"  />
        </form>
    </div>
    )
}

export default Form;