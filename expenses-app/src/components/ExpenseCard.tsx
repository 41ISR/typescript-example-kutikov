import type { IExpense } from "../App"

interface IExpenseCardProps extends IExpense {
    necessary?: boolean
}

export const ExpenseCard = ({ title, category, amount, necessary }: IExpenseCardProps) => {
    return (
        <div className={`expense${necessary ? " expense--necessary" : ""}`}>
            <div>
                {title}
                <div className="category">{category}</div>
            </div>
            <div className="amount">${amount}</div>
        </div>
    )
}