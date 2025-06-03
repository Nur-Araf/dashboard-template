import { columns } from "./Columns";
import DataTable from "./DataTable";
import UsersTableActions from "./UsersTableAction";

type TUsersTableProps = {
  users: any;
  page: number;
  totalUsers: number;
  pageCount: number;
};

export default function UsersTable({ users, pageCount }: TUsersTableProps) {
  return (
    <>
      <UsersTableActions />
      {users && (
        <DataTable columns={columns} data={users} pageCount={pageCount} />
      )}
    </>
  );
}
