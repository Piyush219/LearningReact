import React, {useState} from "react";
// import Expenses from "../Expenses/Expenses";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false)


  const saveExpenseDataHandller = (enteredExpenseData) =>{
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    //console.log(expenseData)
    props.onAddExpense(expenseData);
    setIsEditing(false)
  }


  const startEditingHandler = () => {
    setIsEditing(true);
  }
  const stopEditingHanlder =() =>{
    setIsEditing(false)
  }

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}      
      {isEditing && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandller} onClickCancel ={stopEditingHanlder}/>}
    </div>
  );
};

export default NewExpense;
