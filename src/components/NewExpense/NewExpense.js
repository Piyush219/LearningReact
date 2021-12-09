import React from "react";
// import Expenses from "../Expenses/Expenses";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {

  const saveExpenseDataHandller = (enteredExpenseData) =>{
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    //console.log(expenseData)
    props.onAddExpense(expenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData = {saveExpenseDataHandller}/>
    </div>
  );
};

export default NewExpense;
