import { useRoutes, BrowserRouter } from "react-router-dom";

import { Home } from "../Home";
import { MyAccount } from "../MyAccount";
import { MyOrder } from "../MyOrder";
import { MyOrders } from "../MyOrders";
import { NotFound } from "../NotFound";
import { SignIn } from "../SignIn";
import { Layout } from "../../Components/Layout";
import { ShoppingContextProvider } from "../../Context";

import "./App.css";

const AppRoutes = () => {
  let routers = useRoutes([
    {
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/account", element: <MyAccount /> },
        { path: "/my-order", element: <MyOrder /> },
        { path: "/my-orders", element: <MyOrders /> },
        { path: "/sign-in", element: <SignIn /> },
        { path: "/*", element: <NotFound /> },
      ],
    },
  ]);

  return routers;
};

function App() {
  return (
    <ShoppingContextProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ShoppingContextProvider>
  );
}

export default App;
