import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'

const ExpenseList = (props) => {
    if(props.items.length === 0){
        return <h2 className='expenses-list__fallback'>Found no expenses</h2>
    }
    else if(props.items.length === 1){
        return (
            <ul className='expenses-List'>
                {props.items.map((expense) =>(
                <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            ))}
              <h2 className='expenses-list__fallback'>Only Single Expense Here. Please Add More...</h2>
            </ul>
        )
    }

    return (
        <ul className='expenses-List'>
            {/* if(props.items.length === 1){
                <h2>Only Single Expesne here</h2>
            } */}
            {props.items.map((expense) =>(
                <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            ))}
        </ul>
    )
}

export default ExpenseList;