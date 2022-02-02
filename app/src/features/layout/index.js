import * as hooks from "./hooks";
import { Layout } from "./Layout";

export const layout = ({ registerAction, registerHook }) => {
  registerHook(hooks);

  registerAction({
    hook: "$REACT_ROOT_COMPONENT",
    handler: {
      component: Layout
    }
  });

  registerAction({
    hook: "$INIT_FEATURES",
    handler: ({ createHook }) => {
      console.log("hello world");
      const data = createHook(hooks.LAYOUT_ROUTES).map(($) => $[0]);
      console.log(data);
    }
  });
};
