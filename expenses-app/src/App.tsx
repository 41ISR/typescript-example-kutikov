import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react'
import './App.css'
import { ExpenseCard } from './components/ExpenseCard'
import { Form } from './components/Form'

type TExpenseType = "food" | "transport" | "fun" | ""

export interface IExpense {
  title: string,
  amount: number,
  category: TExpenseType
}

export interface IData {
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
    category: "",
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
  const handleFormChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {name, value} = e.target

    setData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const expense: IExpense = {
      title: data.title,
      amount: +data.amount,
      category: data.category
    }
    setExpenses(prev => [...prev, expense])
  }

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      {/* Input Form */}
      <Form handleFormChange={handleFormChange} data={data} />
      <div className="total">Total: $42.50</div>
      {/* Expense List */}
      {expenses.map((el) => <ExpenseCard necessary={el.category === "food"} {...el} />)}
    </div>
  )
}
