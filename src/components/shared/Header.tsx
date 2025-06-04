import { navItems } from "@/constants/data";
import { ModeToggle } from "../ui/ModeToggle";
import Heading from "./Heading";
import { usePathname } from "@/routes/hooks/UsePathnames";
import UserNav from "./UserNav";

// Custom hook to find the matched path
const useMatchedPath = (pathname: string) => {
  const matchedPath =
    navItems.find((item) => item.href === pathname) ||
    navItems.find(
      (item) => pathname.startsWith(item.href + "/") && item.href !== "/"
    );
  return matchedPath?.title || "";
};

export default function Header() {
  const pathname = usePathname();
  const headingText = useMatchedPath(pathname);

  return (
    <div className="flex flex-1 items-center justify-between bg-secondary px-4">
      <Heading title={headingText} />
      <div className="ml-4 flex gap-6 items-center md:ml-6">
        <UserNav />
        <ModeToggle />
      </div>
    </div>
  );
}
