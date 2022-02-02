import * as hooks from "./hooks";
import { Layout } from "./Layout";
import { Title } from "./Title";

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
    handler: ({ createHook, setContext, getConfig }) => {
      // Collect routes from any feature:
      const routes = createHook
        .sync(hooks.LAYOUT_ROUTE_COMPONENTS)
        .reduce((acc, curr) => [...acc, ...curr[0]], []);

      const menuItems = createHook
        .sync(hooks.LAYOUT_MENU_COMPONENT)
        .reduce((acc, curr) => [...acc, ...curr[0]], []);

      const { value: title } = createHook.waterfall(hooks.LAYOUT_TITLE, {
        component: Title,
        props: {
          value: getConfig("layout.title.value", "config(layout.title.value)")
        }
      });

      // Export routes to the ForrestJS App context:
      setContext("layout.routes.items", routes);
      setContext("layout.menu.items", menuItems);
      setContext("layout.routes.title", title);
    }
  });
};
