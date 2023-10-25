import { useRoutes, BrowserRouter } from "react-router-dom";

import { Home } from "../Home";
import { MyAccount } from "../MyAccount";
import { Product } from "../Product";
import { MyOrders } from "../MyOrders";
import { NotFound } from "../NotFound";
import { SignIn } from "../SignIn";
import { Layout } from "../../components/Layout";
import { ShoppingContextProvider } from "../../context";

import "./App.css";

const AppRoutes = () => {
  let routers = useRoutes([
    {
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/account", element: <MyAccount /> },
        { path: "/product/:id", element: <Product /> },
        { path: "/my-orders", element: <MyOrders /> },
        { path: "/sign-in", element: <SignIn /> },
        { path: "/*", element: <NotFound /> },
      ],
    },
  ]);

  return routers;
};

export const App = () => {
  return (
    <ShoppingContextProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ShoppingContextProvider>
  );
};
