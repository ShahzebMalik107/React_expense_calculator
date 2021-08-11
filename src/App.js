import ExpenseItem from './comonents/ExpenseItem';


function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Expence 1',
      amount: 64.12,
      date: new Date(20,7,2021)
    },
    {
      id: 'e2',
      title: 'Expence 2',
      amount: 12.12,
      date: new Date(20,8,2021)
    },
    {
      id: 'e3',
      title: 'Expence 3',
      amount: 1532.12,
      date: new Date(29,7,2021)
    }
  ]

  return (
    <div className="container">
      <center><h2>Expences Creation app</h2></center>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} ></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} ></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} ></ExpenseItem>
    </div>
  );
}

export default App;
