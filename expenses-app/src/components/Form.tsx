export const Form = () => {
    return (
        <form className="form">
            <input type="text" placeholder="Expense title" name="title" />
            <input type="number" placeholder="Amount" name="amount" />
            <select name="category">
                <option value="">Select category</option>
                <option>Food</option>
                <option>Transport</option>
                <option>Fun</option>
            </select>
            <button>Add Expense</button>
        </form>
    )
}