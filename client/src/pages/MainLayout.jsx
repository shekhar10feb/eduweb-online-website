import { Outlet } from "react-router-dom";
// import { Footer } from "./Footer";
import { Header } from "./Header";
// import { HeaderAll } from "./HeaderAll";

export const MainLayout = () => {
  return (
    <>
      <Header />
      {/* <HeaderAll /> */}
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};
