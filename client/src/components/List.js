import React, { useEffect, useState } from 'react';
import DeleteBtn from './DeleteBtn';

const List = (props) => {
    return(
        <div>
            <ul>
            {props.list.map((task, index) => {
                return <li key={index}>{task} <input type="checkbox"/>
                
                </li>
            })}
        </ul>
        </div>
    )
}

export default List;