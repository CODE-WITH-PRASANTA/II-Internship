import { SidebarProvider, useSidebar } from "../context/SidebarContext";
import { Outlet } from "react-router";
import AppHeader from "./AppHeader";
import Backdrop from "./Backdrop";
import AppSidebar from "./AppSidebar";

const LayoutContent: React.FC = () => {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

   return (
    <div className="h-screen xl:flex overflow-hidden">
      
      {/* Sidebar */}
      <div className="flex-shrink-0">
        <AppSidebar />
        <Backdrop />
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ease-in-out
        ${isExpanded || isHovered ? "lg:ml-[290px]" : "lg:ml-[90px]"}
        ${isMobileOpen ? "ml-0" : ""}`}
      >
        <AppHeader />

        {/* 👇 THIS ENABLES SCROLL */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 w-full ">
          <Outlet />
        </div>

      </div>
    </div>
  );
};

const AppLayout: React.FC = () => {
  return (
    <SidebarProvider>
      <LayoutContent />
    </SidebarProvider>
  );
};

export default AppLayout;
