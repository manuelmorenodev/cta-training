import { runHookApp } from "@forrestjs/hooks";
import reactRoot from "@forrestjs/react-root";
import reactRouter from "@forrestjs/react-router";
import { dashboard } from "./features/dashboard";
import { layout } from "./features/layout";
import { expenses } from "./features/expenses";

runHookApp({
  services: [reactRoot, reactRouter],
  features: [layout, dashboard, expenses]
});
