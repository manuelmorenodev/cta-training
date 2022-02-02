import { Dashboard } from "./Dashboard";
import { DashboardTitle } from "./DashboardTitle";
import { Settings } from "./Settings";

export const dashboard = ({ registerAction }) => {
  registerAction({
    hook: "$LAYOUT_ROUTE_COMPONENTS",
    handler: [
      {
        props: {
          path: "/",
          exact: true,
          element: <Dashboard />
        }
      },
      {
        props: {
          path: "/settings",
          exact: true,
          element: <Settings />
        }
      }
    ]
  });

  registerAction({
    hook: "$LAYOUT_MENU_COMPONENT",
    handler: [
      {
        props: {
          to: "/",
          children: "Dashboard"
        }
      },
      {
        props: {
          to: "/settings",
          children: "Settings"
        }
      }
    ]
  });
};
