import React from 'react';
import './App.css';

function ToDoList({data}){
    return(
        <div>
            <ul>
                {data.map((item) => <li key={item}>{item}</li>)}
            </ul>
        </div>
    )
}

export default ToDoList;