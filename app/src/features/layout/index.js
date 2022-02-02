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
};
