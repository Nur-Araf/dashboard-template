

// import StudentCreateForm from "../student-forms/student-create-form";
// import PopupModal from "../PopupModal";
import TableSearchInput from "./TableSearchInput";

export default function StudentTableActions() {
  return (
    <div className="flex items-center justify-between gap-2 py-5">
      <div className="flex flex-1 gap-4">
        <TableSearchInput />
      </div>
      {/* <div className="flex gap-3">
        <PopupModal
          renderModal={(onClose) => <StudentCreateForm modalClose={onClose} />}
        />
      </div> */}
    </div>
  );
}
