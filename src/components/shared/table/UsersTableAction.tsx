import TableSearchInput from "./TableSearchInput";

export default function UsersTableActions() {
  return (
    <div className="flex items-center justify-between gap-2 py-5">
      <div className="flex flex-1 gap-4">
        <TableSearchInput />
      </div>
    </div>
  );
}
