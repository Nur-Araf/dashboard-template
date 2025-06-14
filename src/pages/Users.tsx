import { useSearchParams } from "react-router-dom";
import { DataTableSkeleton } from "@/components/shared/table/TableSkeleton";
import UsersTable from "@/components/shared/table/UsersTable";

// Define User type
type User = {
  id: number;
  name: string;
  gmail: string;
  role: string;
  subscriptions: string[];
  joinDate: string;
};

// Fake static data
const fakeUsers: User[] = [
  {
    id: 1,
    name: "John Doe",
    gmail: "john.doe@gmail.com",
    role: "Admin",
    subscriptions: ["Premium", "Newsletter"],
    joinDate: "2023-01-15",
  },
  {
    id: 2,
    name: "Jane Smith",
    gmail: "jane.smith@gmail.com",
    role: "User",
    subscriptions: ["Basic"],
    joinDate: "2023-06-22",
  },
  {
    id: 3,
    name: "Alex Johnson",
    gmail: "alex.johnson@gmail.com",
    role: "Editor",
    subscriptions: ["Premium", "Pro"],
    joinDate: "2024-02-10",
  },
  {
    id: 4,
    name: "Sarah Williams",
    gmail: "sarah.williams@gmail.com",
    role: "User",
    subscriptions: ["Free", "Newsletter"],
    joinDate: "2024-08-05",
  },
];

export default function UsersPage() {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page") || 1);
  const pageLimit = Number(searchParams.get("limit") || 10);
  const search = searchParams.get("search") || null;
  const offset = (page - 1) * pageLimit;

  // Filter users by name or gmail
  const filteredUsers = search
    ? fakeUsers.filter(
        (user) =>
          user.name.toLowerCase().includes(search.toLowerCase()) ||
          user.gmail.toLowerCase().includes(search.toLowerCase())
      )
    : fakeUsers;

  // Simulate pagination
  const paginatedUsers = filteredUsers.slice(offset, offset + pageLimit);
  const totalUsers = filteredUsers.length;
  const pageCount = Math.ceil(totalUsers / pageLimit);

  // Simulate loading state
  const isLoading = false;
  const data = {
    users: paginatedUsers,
    total_users: totalUsers,
  };

  if (isLoading) {
    return (
      <div className="p-5">
        <DataTableSkeleton
          columnCount={6} // Adjusted for select, name, gmail, joinDate, subscriptions, details, admin access
          filterableColumnCount={2}
          searchableColumnCount={1}
        />
      </div>
    );
  }

  return (
    <div className="p-4 md:p-8">
      <UsersTable
        users={data.users}
        page={page}
        totalUsers={data.total_users}
        pageCount={pageCount}
      />
    </div>
  );
}
