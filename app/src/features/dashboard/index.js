import { Dashboard } from "./Dashboard";
import { DashboardTitle } from "./DashboardTitle";
import { Settings } from "./Settings";

export const dashboard = ({ registerAction }) => {
  registerAction({
    hook: "$LAYOUT_ROUTES",
    handler: [
      {
        path: "/",
        exact: true,
        element: <Dashboard />
      },
      {
        path: "/settings",
        exact: true,
        element: <Settings />
      }
    ]
  });
};
