import React from "react";
import classes from "./Input.module.css";

function Input(props) {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* To pass all the configurable data to this input element as props. Here we are distributing all the properties. We give input int MealForm.js */}
      <input {...props.input} />
    </div>
  );
}

export default Input;
