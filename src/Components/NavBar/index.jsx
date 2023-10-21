import { Link } from "react-router-dom";
import { NavLinkItem } from "../NavBarItem";

export const Navbar = () => {
  return (
    <header className="w-full h-auto flex flex-col">
      <nav>
        <div className=" flex flex-row items-center justify-between">
          <h1 className="font-bold text-3xl text-green-700/60">
            <Link to="/">TECNO SHOPI</Link>
          </h1>
          <input
            className="w-96 h-10 outline-0 border-none px-4 py-2 rounded-full bg-gray-100"
            type="text"
            placeholder="Search products"
          />
          <ul className="flex flex-row gap-2">
            <li>
              <NavLinkItem to="/oders">Carrito</NavLinkItem>
            </li>
            <li>
              <NavLinkItem to="/sign-in">Sign In</NavLinkItem>
            </li>
            <li>
              <NavLinkItem to="/account">Account</NavLinkItem>
            </li>
          </ul>
        </div>
        <div>
          <ul className="mt-4 p-3 flex flex-row gap-4 border-b-2">
            <li>
              <NavLinkItem to="/clothes">Clothes</NavLinkItem>
            </li>
            <li>
              <NavLinkItem to="/electronics">Electronics</NavLinkItem>
            </li>
            <li>
              <NavLinkItem to="/toys">Toys</NavLinkItem>
            </li>
            <li>
              <NavLinkItem to="/others">Others</NavLinkItem>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
