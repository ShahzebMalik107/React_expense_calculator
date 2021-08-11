import './ExpenseItem.css'

function ExpenseItem(props) {

    // const expenseDate = new Date().getDate()+" / "+(new Date().getMonth()+1)+" / " +new Date().getFullYear();
    // const expenseTitle = "Car Insurance";
    // const expenseAmount = 294.67;
    return (
        <div className="expense-item">
            <div>
                {props.date}
            </div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">
                    ${props.amount}
                </div>
            </div>
        </div>
    );
}

export default ExpenseItem;