import React from 'react'

const TodoItems = (props) => {
    return (
        <>
       
        <div class="card w-50 my-4">
  <div class="card-body">
    <h6 class="card-title">Todo - {props.index+1}</h6>
    <h4 class="card-text">{props.text}</h4>
    <button type="button" class="btn btn-danger" onClick={()=>{
        props.delete(props.id)
    }}>Delete</button>
  </div>
</div>
      
      </>
    );
}
export default TodoItems