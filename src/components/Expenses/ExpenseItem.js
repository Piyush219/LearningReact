import './ExpenseItem.css'
import Card from '../UI/Card.js';
import ExpenseDate from './ExpenseDate';
// import ExpenseDetails from './ExpenseDetails';
const ExpenseItem = (props) => {
    const clickHandler = () => {
      console.log('Clicked!!!')
    }
    const clickHandlerForDelete = () =>{
      console.log('Expense Deleted !!')
    }
  return (
    <Card className="expense-item">
      <ExpenseDate date= {props.date}/>
      <div className =" expense-item__description">
        <h2>{props.title}</h2>
        {/* <h2>{props.location}</h2> */}
        <div className = "expense-item__price">${props.amount}</div>
      </div>
      <button onClick ={clickHandler}>Change Title</button>
      <button onClick = {clickHandlerForDelete}>Delete Expense</button>
      {/* <ExpenseDetails title = {props.title} amount = {props.amount} location = {props.location} /> */}
    </Card>
  );
}

export default ExpenseItem;
