import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import { useState } from "react";
import ExpensesChart from './ExpensesChart'


const Expenses = (props) => {
  const [filterItem, setFilterItem] = useState("2020");

  const chosenFilter = (selectedYear) => {
    setFilterItem(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterItem;
  });



  return (
    <Card className="expenses">
      <ExpensesFilter selected={filterItem} onChangeFilter={chosenFilter} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
