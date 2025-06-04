import AdminTable from "@/components/shared/table/AdminTable";


const Admin = () => {
  const adminData = [
    {
      name: "Araf",
      gmail: "polariz.test@gmail.com",
      joinDate: "4/21/2025",
      role: "Admin",
      imageUrl: "https://example.com/profile.jpg", // Optional image URL
      phoneNumber: "123-456-7890",
    },
    {
      name: "Nur",
      gmail: "another.user@gmail.com",
      joinDate: "5/1/2025",
      role: "Super Admin",
      imageUrl: undefined, // Will use default image
      phoneNumber: "123-456-7890",
    },
  ];
  return (
    <div>
      <AdminTable data={adminData} />
    </div>
  );
};

export default Admin;
