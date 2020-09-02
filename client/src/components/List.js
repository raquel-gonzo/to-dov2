import React, { useEffect, useState } from 'react';
import DeleteBtn from './DeleteBtn';

const List = () => {
    const [list, setList] = useState([]); 
    return(
        <div>
            <ul>
            {list.map((task, index) => {
                return <li key={index}>{task} <input type="checkbox"/>
                
                </li>
            })}
        </ul>
        </div>
    )
}

export default List;