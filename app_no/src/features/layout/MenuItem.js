import { Link } from "react-router-dom";

export const MenuItem = (props, children) => {
  return (
    <li>
      <Link {...props}>{children}</Link>
    </li>
  );
};
