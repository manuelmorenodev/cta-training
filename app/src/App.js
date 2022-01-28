import { gql, useQuery } from '@apollo/client';
import { HelloWorld } from './HelloWorld';

const QUERY = gql`
  query getUsers {
    users {
      name
    }
  }
`

function App() {

  const res = useQuery(QUERY)

  return (
    <div>
        {res.data && <ul>
          {res.data.users.map(user => <li key={user.name}>{user.name}</li>)}
          </ul>}
    </div>
  );
}

export default App;
