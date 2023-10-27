import { NavLink } from "react-router-dom";

export const NavLinkItem = ({ to, children }) => {
  const isSelectItem = ({ isActive }) =>
    isActive ? "text-orange-500 text-xl font-bebas" : "text-xl font-bebas";
  return (
    <NavLink to={to} className={isSelectItem}>
      {children}
    </NavLink>
  );
};
