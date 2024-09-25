import { useState } from "react"

import Form from "../components/Form"
import Table from "../components/Table"
import Filter from "../components/Filter"

function ExpenseTracker() {

    const [expensesList, setExpenseList] = useState([])
    const [category, setCategory] = useState("")
    const [categories, setCategories] = useState([])
    const [id, setId] = useState(0)

    const onSubmit = (formData) => {
        setId(prevId => prevId + 1)
        setExpenseList(prevExpensesList => [...prevExpensesList, { ...formData, id: id, amount: parseFloat(formData.amount) }])
        setCategories(prevGo => [...prevGo, formData.category])
    }

    const onSelect = (value) => {
        setCategory(value)
    }

    const visibleExpensesList = category ? expensesList.filter(expenseList => expenseList.category === category) : expensesList;

    const onDelete = (id, categoryValue) => {
        setExpenseList(prevExpensesList => prevExpensesList.filter(expense => expense.id !== id))
        setCategories(prevCategories => prevCategories.filter(category => category !== categoryValue))
    }

    return (
        <>
            <h1 className="mb-2">Expenses Tracker</h1>
            <Form handleFormSubmit={onSubmit} />
            {expensesList.length !== 0 && <h2 className="mt-4 mb-3">Expenses List</h2>}
            {expensesList.length !== 0 && <Filter onSelect={onSelect} categories={categories} />}
            {expensesList.length !== 0 && visibleExpensesList.length !== 0 && <Table expenses={visibleExpensesList} onDelete={onDelete} />}
        </>
    )
}

export default ExpenseTracker