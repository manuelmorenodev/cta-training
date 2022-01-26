Today:

```gql
query getUsers {
  users {
    id
    name
    expenses_aggregate {
      aggregate {
        sum {
          amount
        }
        max {
          amount
        }
        min {
          amount
        }
      }
    }
  }
  expenses {
    id
    notes
    amount
    created_at
    user {
      name
      id
    }
  }
}

mutation addUser {
  insert_users_one(object: {name: "antonio"}) {
    id
    name
  }
}

mutation deleteUser {
  delete_users_by_pk(id: 1) {
    id
    name
  }
}
```


Get specific 

```gql
query getUsers (
  $userId: Int!
){
  users_by_pk(id: $userId) {
    id
    name
    allExpenses: expenses {
      id
      amount
      notes
    }
    topExpenses: expenses (
      order_by: {
        amount: desc_nulls_last
      }
      limit: 1
    ) {
      id
      amount
    }
    expenses_aggregate {
      aggregate {
        sum {
          amount
        }
      }
    }
  }
}
```


Variables:
 
```gql
{
  "userId": 3
}
```

Fetch user data from session:

```gql
x-hasura-role: user
x-hasura-user-id: 2
```

```gql
query MyQuery {
  users {
    id
    name
    all_expenses: expenses {
      id
      amount
      notes
    }
    topExpenses: expenses (
      order_by: {
        amount: desc_nulls_last
      }
      limit: 1
    ) {
      id
      amount
    }
    expenses_aggregate {
      aggregate {
        sum {
          amount
        }
      }
    }
  }
}

```