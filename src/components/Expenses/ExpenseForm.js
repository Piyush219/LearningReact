//import ExpenseItem from "./ExpenseItem";

function ExpenseForm(props) {
    const titleChangeHandler = (event) =>{
        console.log(event.target.value)
    }
    return (
        <form>
            <label>Expense Title:</label>
            <input type="text" placeholder="Expense Title" onChange ={titleChangeHandler}></input>{"\n"}
            <label>Expense Amount:</label>
            <input type="text" placeholder="Expense Amount" ></input>{"\n"}
            <label>Expense Date:</label>
            <input type="text" placeholder="Expense Date"></input>{"\n"}
            <button>Submit</button>
        </form>
    )
    
}

export default ExpenseForm;