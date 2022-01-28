import React, { useState } from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';

const QUERY_USERS = gql`
  query getUsers {
    users {
      id
      name
    }
  }
`

const MUTATION_ADD_EXPENSE = gql`
    mutation addExpense (
      $userId: Int!
      $amount: Int!
      $notes: String
    ) {
      insert_expenses_one(object: {
        user_id: $userId,
        amount: $amount,
        notes: $notes
      }) {
        id
      }
    }
`


export default function ExpensesInsert() {

  const resUsers = useQuery(QUERY_USERS)

  const [addExpense, { data, loading, error }] = useMutation(MUTATION_ADD_EXPENSE)

  const initialState = {
    userId: 0,
    amount: '',
    notes: '',
  }

  const [formState, setFormState] = useState(initialState)

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  const handleSubmit = event => {

    event.preventDefault();

    addExpense({
      variables: formState,
    });

    setFormState(initialState)

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <span>User</span>
          <select required value={formState.userId} onChange={(e) => setFormState({ ...formState, userId: parseInt(e.target.value, 10) })}>
            <option value="">Select</option>
            {resUsers.data && <>
              {resUsers.data.users.map(user => <option value={user.id} key={user.id}>{user.name}</option>)}
            </>}
          </select>
        </label>
        <label>
          <span>Amount</span>
          <input value={formState.amount} onChange={(e) => setFormState({ ...formState, amount: parseInt(e.target.value, 10) })} type="number" step={1} />
        </label>
        <label>
          <span>Notes</span>
          <textarea onChange={(e) => setFormState({ ...formState, notes: e.target.value })} value={formState.notes}></textarea>
        </label>
        <div>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  )
}
