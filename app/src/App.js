import { gql, useQuery } from '@apollo/client';
import ExpensesInsert from './ExpensesInsert';
import ExpensesList from './ExpensesList';

// const QUERY = gql`
//   query getUsers {
//     users {
//       name
//     }
//   }
// `

function App() {

  // const res = useQuery(QUERY)

  return (
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <ExpensesInsert />
      <ExpensesList />
    </div>
  );
}

export default App;
