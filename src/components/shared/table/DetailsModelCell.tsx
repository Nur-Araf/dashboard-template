import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { AdminUser } from "@/constants/data";
import { Avatar } from "@radix-ui/react-avatar";
import type { Row } from "@tanstack/react-table";
import { Eye, Save } from "lucide-react";
import { useState } from "react";

export const DetailsModalCell = ({ row }: { row: Row<AdminUser> }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [role, setRole] = useState<string>(row.original.role ?? "");
  const defaultImageUrl = "https://via.placeholder.com/150?text=No+Image";

  const getInitials = (name: string): string => {
    return name
      .split(" ")
      .map((word) => word.charAt(0))
      .slice(0, 2)
      .join("")
      .toUpperCase();
  };

  const handleRoleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically call an API to update the role
    console.log("Updated role:", role);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center gap-2 dark:text-gray-200"
        >
          <Eye className="h-4 w-4" />
          View
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] overflow-y-auto bg-white dark:bg-gray-800">
        <DialogHeader>
          <DialogTitle>
            Admin Details
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col sm:flex-row items-center gap-6 p-6">
          <Avatar className="h-24 w-24">
            <AvatarImage
              src={row.original.imageUrl || defaultImageUrl}
              alt="Profile"
              className="object-cover"
            />
            <AvatarFallback className="text-2xl bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200">
              {getInitials(row.original.name)}
            </AvatarFallback>
          </Avatar>
          <div className="text-center sm:text-left">
            <div className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
              {row.original.name}
            </div>
            <div className="text-gray-600 dark:text-gray-300 mb-4">
              {row.original.gmail}
            </div>
          </div>
        </div>
        <form onSubmit={handleRoleUpdate} className="space-y-6 p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label
                htmlFor="name"
                className="text-lg text-gray-700 dark:text-gray-200"
              >
                Full Name
              </Label>
              <Input
                id="name"
                name="name"
                disabled
                value={row.original.name}
                className="w-full text-lg py-3 px-4 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="joinDate"
                className="text-lg text-gray-700 dark:text-gray-200"
              >
                Join Date
              </Label>
              <Input
                id="joinDate"
                name="joinDate"
                disabled
                value={row.original.joinDate}
                className="w-full text-lg py-3 px-4 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label
                htmlFor="phone"
                className="text-lg text-gray-700 dark:text-gray-200"
              >
                Phone Number
              </Label>
              <Input
                id="phone"
                name="phone"
                disabled
                value={row.original.phoneNumber || "Not provided"}
                className="w-full text-lg py-3 px-4 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="role"
                className="text-lg text-gray-700 dark:text-gray-200"
              >
                Role
              </Label>
              <Input
                id="role"
                name="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full text-lg py-3 px-4 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <Button
              type="submit"
              className="flex items-center gap-2 "
            >
              <Save className="h-4 w-4" />
              Save Role
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
