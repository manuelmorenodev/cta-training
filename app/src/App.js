import { gql, useQuery } from '@apollo/client';
import ExpensesInsert from './ExpensesInsert';

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
    // <div>
    //     {res.data && <ul>
    //       {res.data.users.map(user => <li key={user.name}>{user.name}</li>)}
    //       </ul>}
    // </div>
    <ExpensesInsert />
  );
}

export default App;
