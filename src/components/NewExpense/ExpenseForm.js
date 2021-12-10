//import ExpenseItem from "./ExpenseItem";
import React, { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState(" ");
  const [enteredDate, setEnteredDate] = useState(" ");
  const [enteredAmount, setEnteredAmount] = useState(" ");

// const [userInput, setUserInput] =useState({
//     enteredTitle: ' ',
//     enteredAmount: ' ',
//     enteredDate: ' ',
// })

  const titleChangeHandler = (event) => {
      setEnteredTitle(event.target.value);
//     setUserInput({
//         ...userInput,
//        enteredTitle: event.target.value });
    // setUserInput((prevState) =>{           // This will automatically receive the previous state by React
    //     return {...prevState, enteredTitle: event.target.value};
    // })
 };


  const amountChangeHandler = (event) => {
    // setUserInput({
    //     ...userInput,
    //    enteredAmount: event.target.value });
    setEnteredAmount(event.target.value)
  };

  const dateChangeHandler = (event) => {
    // setUserInput({
    //     ...userInput,
    //    enteredDate: event.target.value });
    setEnteredDate(event.target.value)
  };

  const submitHandler =(event) =>{
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };

    // console.log(expenseData)
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Expense Title:</label>
          <input
            type="text"
            //placeholder="Expense Title"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Expense Amount:</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            //placeholder="Expense Amount"
           value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Expense Date:</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
           value={enteredDate}
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type ="button" onClick={props.onClickCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
