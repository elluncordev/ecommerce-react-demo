import { NavLink } from "react-router-dom";

export const NavLinkItem = ({ to, children }) => {
  const isSelectItem = ({ isActive }) =>
    isActive ? "text-green-700" : undefined;
  return (
    <NavLink to={to} className={isSelectItem}>
      {children}
    </NavLink>
  );
};
