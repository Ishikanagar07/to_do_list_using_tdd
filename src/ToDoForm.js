import React, {useState} from "react";
import './App.css'

function ToDoForm({onAdd}){

    const [inputText, setInputText] = useState("");

    const handleChange = (event) => {
        setInputText(event.target.value);
    }

    const handleAdd = () => {
        onAdd(inputText);
        setInputText("");
    }

    return(
        <div>
            <input type="text" data-testid="toDoItem" onChange={handleChange} value={inputText} />
            <button data-testid="addButton" onClick={handleAdd}>Add</button>
        </div>
    )
}

export default ToDoForm;