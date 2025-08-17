import { lazy } from "react";
import { Outlet } from "react-router-dom";

const Header = lazy(() => import("./Header"));
const Sidebar = lazy(() => import("./Sidebar"));

const Layout = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      {/* Header */}
      <div className="sticky top-0 z-50">
        <Header />
      </div>

      {/* Sidebar + Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-[60px] bg-[#020234] h-full">
          <Sidebar />
        </div>

        {/* Main Content (scrollable Outlet) */}
        <main className="flex-1 h-full bg-gray-50 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
