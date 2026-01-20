import { useState } from 'react'
import './App.css'
import { ExpenseCard } from './components/ExpenseCard'

type TExpenseType = "food" | "transport" | "fun"

export interface IExpense {
  title: string,
  amount: number,
  category: TExpenseType
}

interface IData {
  title: string,
  amount: string,
  category: TExpenseType
}

export const App = () => {
  // let data = {}
  // const setData = (el) => {
  //   data = el
  // }
  const [data, setData] = useState<IData>({
    title: "",
    amount: "",
    category: 
  })
  const [expenses, setExpenses] = useState<IExpense[]>([{
    title: "Burgers",
    amount: 10.52,
    category: "food"
  },
  {
    title: "Netflix",
    amount: 19.99,
    category: "fun"
  }])

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      {/* Input Form */}

      <div className="total">Total: $42.50</div>
      {/* Expense List */}
      {expenses.map((el) => <ExpenseCard necessary={el.category === "food"} {...el} />)}
    </div>
  )
}








