import { Outlet } from "react-router-dom";
import { Header } from "../../common/components";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="h-full">
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
