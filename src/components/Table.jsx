function Table({ expenses, onDelete }) {
    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th className="fw-medium">Description</th>
                    <th className="fw-medium">Amount</th>
                    <th className="fw-medium">Category</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {expenses.map(expense => (
                    <tr key={expense.id}>
                        <td className="align-middle text-capitalize">{expense.description}</td>
                        <td className="align-middle">{expense.amount}</td>
                        <td className="align-middle text-capitalize">{expense.category}</td>
                        <td className="text-center">
                            <button className="btn btn-danger" onClick={() => onDelete(expense.id, expense.category)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td className="fw-medium">Total</td>
                    <td className="fw-medium text-nowrap">{expenses.reduce((total, expense) => expense.amount + total, 0).toFixed(2)} LKR</td>
                    <td></td>
                    <td></td>
                </tr>
            </tfoot>
        </table>
    )
}

export default Table