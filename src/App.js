import ExpenseItem from './comonents/ExpenseComponent/NewExpenceComponent';
import NewExpence from './comonents/NewExpence/NewExpence'

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Expence 1',
      amount: 64.12,
      date: new Date(2021, 5 , 20)
    },
    {
      id: 'e2',
      title: 'Expence 2',
      amount: 12.12,
      date: new Date(2021,4,15)
    },
    {
      id: 'e3',
      title: 'Expence 3',
      amount: 1532.12,
      date: new Date(2021,6,15)
    }
  ];

  return (
    <div className="container">
      <center><h2>Expences Creation app</h2></center>
      <NewExpence/>
      <ExpenseItem expenses={expenses}/>
    </div>
  );
}

export default App;
