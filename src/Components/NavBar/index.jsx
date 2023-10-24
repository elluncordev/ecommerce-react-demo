import { useContext } from "react";
import { Link } from "react-router-dom";

import { ShoppingContext } from "../../Context";
import { NavLinkItem } from "../NavBarItem";
import { ShoppingBagSvg } from "../../assets/ShoppingBagSvg.jsx";
import { UserAccountSvg } from "../../assets/UserAccountSvg.jsx";

export const Navbar = () => {
  const { countProduct } = useContext(ShoppingContext);
  return (
    <header className="flex flex-col m-5">
      <nav>
        <div className=" flex flex-row items-center justify-between">
          <h1 className="font-bold text-3xl text-green-600">
            <Link to="/">TECNO SHOPI</Link>
          </h1>
          <input
            className="w-96 h-10 outline-0 border-none px-4 py-2 rounded-full bg-gray-100"
            type="text"
            placeholder="Search products"
          />
          <ul className="flex flex-row gap-7 items-center">
            <li className="relative">
              <span className="absolute w-5 h-5 text-xs -top-2 -right-4 bg-orange-300 p-1 rounded-full flex items-center justify-center">
                {countProduct}
              </span>
              <NavLinkItem to="/oders">
                <ShoppingBagSvg />
              </NavLinkItem>
            </li>
            <li>
              <NavLinkItem to="/account">
                <UserAccountSvg />
              </NavLinkItem>
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
