import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import {useState} from 'react'

const NewExpense = (props) => {
  const[isEditing, setIsEditing] = useState(false)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    props.onAddExpense(expenseData);
    setIsEditing(false) 
  };
  const startEditingHandler = () => {
    setIsEditing(true)
  }
  const stopEditingHandler = () => {
    setIsEditing(false)
  }
  return <div className="new-expense">
    {!isEditing && <button onClick={startEditingHandler}>Add New Expenses</button>}
    {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
  </div>;
};

export default NewExpense;
