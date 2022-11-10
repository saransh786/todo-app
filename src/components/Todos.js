import React, { useState } from "react";
import TodoItems from "./TodoItems";

const Todos = (props) => {
    const [text , setText] = useState('')
    const [items , setItems] = useState([])
    const handleChange = (event) => {
        const inputValue=event.target.value
        setText(inputValue)
    }
    const handleCLick = () => {
        setItems((olditems) => {
            return [...olditems , text]
        })
        setText('')
        props.showAlert('New Todo Added','success')
    }
    const handleDelete = (id) => {
        setItems((olditems)=>{
            return olditems.filter((val , index)=>{
                return index!==id
            })
        })
        props.showAlert('Todo Deleted','danger')
    }
  return (
    <div className="container">
      <div className="input-group mb-3 my-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          <strong>Add Todo Here</strong>
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          onChange={handleChange}
          value={text}
        />
      </div>
      <button type="button" class="btn btn-primary btn-lg" onClick={handleCLick}>Add</button>
      
        {items.map((itemVal , index)=>{
            return <TodoItems text={itemVal} index={index} key={index} id={index} delete={handleDelete}/>
        })}
      
     
    </div>
  );
};
export default Todos;
