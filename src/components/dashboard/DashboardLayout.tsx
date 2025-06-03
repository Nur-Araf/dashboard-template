import { useState } from "react";
import MobileSidebar from "../shared/MobileSidebar";
import Sidebar from "./Sidebar";
import { MenuIcon } from "lucide-react";
import Header from "../shared/Header";
import { SidebarProvider } from "@/routes/hooks/UseSidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  return (
    <SidebarProvider>
      <div className="flex h-screen overflow-hidden bg-secondary">
        <MobileSidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <Sidebar />
        <div className="flex w-0 flex-1 flex-col overflow-hidden">
          <div className="relative z-10 flex h-20 flex-shrink-0">
            <button
              className="pl-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <Header />
          </div>
          <main className="relative p-4 flex-1 overflow-hidden rounded-tl-xl bg-background focus:outline-none ">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
