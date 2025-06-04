import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { User as UserIcon, FileText } from "lucide-react";
import { useState } from "react";
import type { User } from "@/constants/data";
import type { Row } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";

export const SubscriptionsCell = ({ row }: { row: Row<User> }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-2">
          <FileText className="h-4 w-4" />
          <span>
            {row.original.subscriptions.length}{" "}
            {row.original.subscriptions.length === 1
              ? "Subscription"
              : "Subscriptions"}
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Subscription Details for {row.original.name}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-2">
          {row.original.subscriptions.length > 0 ? (
            <ul className="list-disc pl-5">
              {row.original.subscriptions.map((sub: string, index: number) => (
                <li key={index}>
                  <Badge variant="secondary">{sub}</Badge>
                </li>
              ))}
            </ul>
          ) : (
            <p>No subscriptions found.</p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export const DetailsCell = ({ row }: { row: Row<User> }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <UserIcon className="h-4 w-4 mr-2" />
          View
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>User Details</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p>
            <strong>Name:</strong> {row.original.name}
          </p>
          <p>
            <strong>Email:</strong> {row.original.gmail}
          </p>
          <p>
            <strong>Role:</strong> {row.original.role}
          </p>
          <p>
            <strong>Join Date:</strong> {row.original.joinDate}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export const AdminAccessCell = ({ row }: { row: Row<User> }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isAdmin: boolean = row.original.role === "Admin";
  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button variant={isAdmin ? "destructive" : "default"} size="sm">
          {isAdmin ? "Revoke Admin" : "Grant Admin"}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {isAdmin ? "Revoke Admin Access" : "Grant Admin Access"}
          </AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to{" "}
            {isAdmin ? "revoke admin access from" : "grant admin access to"}{" "}
            {row.original.name}?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              console.log(
                `${isAdmin ? "Revoking" : "Granting"} admin access for ${
                  row.original.name
                }`
              );
            }}
          >
            Confirm
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
