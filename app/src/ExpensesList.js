import { gql, useQuery } from '@apollo/client';
import React from 'react';

export default function ExpensesList() {

    const QUERY_EXPENSES = gql`
        query MyQuery {
            expenses {
                id
                amount
                notes
                user {
                    name
                }
            }
        }
    `

    const resExpenses = useQuery(QUERY_EXPENSES, {
        pollInterval: 1000,
    })

    return (
        <ul>
            {resExpenses.data && resExpenses.data.expenses.map(expense => (
                <li key={expense.id}>{expense.user.name} | {expense.amount} | {expense.notes}</li>
            ))}
        </ul>
    );
}
