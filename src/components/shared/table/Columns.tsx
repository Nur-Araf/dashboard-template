import { type ColumnDef } from "@tanstack/react-table";
import { Calendar } from "lucide-react";

import type { User } from "@/constants/data";
import { AdminAccessCell, DetailsCell, SubscriptionsCell } from "./ColumnsComponents";

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: () => <div className="pl-4">NAME</div>,
    cell: ({ row }) => <div className="pl-4">{row.original.name}</div>,
  },
  {
    accessorKey: "gmail",
    header: "EMAIL",
  },
  {
    accessorKey: "joinDate",
    header: "JOIN DATE",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Calendar className="h-4 w-4" />
        {row.original.joinDate}
      </div>
    ),
  },
  {
    accessorKey: "subscriptions",
    header: "SUBSCRIPTIONS",
    cell: ({ row }) => <SubscriptionsCell row={row} />,
  },
  {
    id: "details",
    header: "DETAILS",
    cell: ({ row }) => <DetailsCell row={row} />,
  },
  {
    id: "adminAccess",
    header: "ADMIN ACCESS",
    cell: ({ row }) => <AdminAccessCell row={row} />,
  },
];
