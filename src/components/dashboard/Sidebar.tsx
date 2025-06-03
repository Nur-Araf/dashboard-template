import { navItems } from "@/constants/data";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/routes/hooks/UseSidebar";
import { PanelLeftClose } from "lucide-react";
import { useState } from "react";
import DashboardNav from "../shared/DashboardNav";
type SidebarProps = {
  className?: string;
};

export default function Sidebar({ className }: SidebarProps) {
  const { isMinimized, toggle } = useSidebar();
  const [status, setStatus] = useState(false);

  const handleToggle = () => {
    // console.log("Toggling sidebar");
    setStatus(true);
    toggle();
    setTimeout(() => setStatus(false), 500);
  };

  return (
    <nav
      className={cn(
        `relative z-10 hidden h-screen flex-none  px-3 md:block`,
        status && "duration-500",
        !isMinimized ? "w-72" : "w-[80px]",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center px-0 py-5 md:px-2",
          isMinimized ? "justify-center " : "justify-between"
        )}
      >
        {!isMinimized && <h1 className="text-2xl font-bold">Logo</h1>}
        <PanelLeftClose
          className={cn(
            "size-8 cursor-pointer bg-transparent text-foreground",
            isMinimized && "rotate-180"
          )}
          onClick={handleToggle}
        />
      </div>
      <div className="space-y-4 py-4">
        <div className="px-2 py-2">
          <div className="mt-3 space-y-1">
            <DashboardNav items={navItems} />
          </div>
        </div>
      </div>
    </nav>
  );
}
