import React from "react";

const Alert = (props) => {
  return (
   
     props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.msg}</strong>
      </div>
   
  );
};
export default Alert;
