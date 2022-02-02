import { AddExpense } from "./AddExpense";
import { ListExpenses } from "./ListExpenses";

export const expenses = {
  hook: "$LAYOUT_ROUTE_COMPONENTS",
  handler: [
    {
      props: {
        path: "/expenses",
        exact: true,
        element: <ListExpenses />
      }
    },
    {
      props: {
        path: "/expenses/add",
        exact: true,
        element: <AddExpense />
      }
    }
  ]
};
