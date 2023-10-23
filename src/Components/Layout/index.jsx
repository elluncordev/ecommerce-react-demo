import { Navbar } from "../NavBar";
import { Outlet as Page } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col m-5 items-center">
        <Page />
      </main>
    </>
  );
};
