import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingContext } from "../../context";
import { NavLinkItem } from "../NavBarItem";
import { CheckoutCart } from "../CheckoutCart";
import { ShoppingBanIcon, UserIcon, SearchIcon } from "../../assets/Icons";

export const Navbar = () => {
  const { countProduct, openCheckoutCart, handleSearchProduct } =
    useContext(ShoppingContext);
  return (
    <header className="flex flex-col m-5">
      <nav>
        <div className=" flex flex-row items-center justify-between">
          <h1 className="font-bebas font-bold text-4xl text-black">
            <Link to="/">Random Shop</Link>
          </h1>
          <div className="w-80 h-10 flex gap-2 items-center bg-gray-100 px-2">
            <SearchIcon />
            <input
              onChange={(event) => handleSearchProduct(event.target.value)}
              className="w-full h-full outline-0 border-none bg-gray-100 "
              type="text"
              placeholder="Search products"
            />
          </div>
          <ul className="flex flex-row gap-7 items-center cursor-pointer select-none">
            <li onClick={openCheckoutCart} className="relative">
              <span className="absolute w-5 h-5 text-xs -top-2 -right-4 bg-orange-300 p-1 rounded-full flex items-center justify-center">
                {countProduct}
              </span>
              <ShoppingBanIcon />
            </li>
            <li>
              <NavLinkItem to="/account">
                <UserIcon />
              </NavLinkItem>
            </li>
          </ul>
        </div>
        <CheckoutCart />
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
