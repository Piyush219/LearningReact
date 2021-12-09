import React, { useState } from "react";
// useState is a react hook
import "./ExpenseItem.css";
import Card from "../UI/Card.js";
import ExpenseDate from "./ExpenseDate";
// import ExpenseDetails from './ExpenseDetails';
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title); // These must be called directly inside the function, not outside not nested
  const [amount, setAmount] = useState(props.amount);
  
  const clickHandler = () => {
    setTitle('Updated')
    //console.log('checking' + title)
  };
  const clickHandlerForChangeExpense = () => {
    setAmount('100')
    console.log("Expense Changed !!");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className=" expense-item__description">
        <h2>{title}</h2>
        {/* <h2>{props.location}</h2> */}
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={clickHandlerForChangeExpense}>Change Expense</button>
      {/* <ExpenseDetails title = {props.title} amount = {props.amount} location = {props.location} /> */}
    </Card>
  );
};

export default ExpenseItem;
