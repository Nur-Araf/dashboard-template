import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import UsersPage from "./pages/Users";
import NotFound from "./components/shared/PageNotFound";
import { Toaster } from "sonner";
import AdminProfile from "./pages/AdminProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/admins",
        element: <Admin />,
      },

      {
        path: "/profile",
        element: <AdminProfile />,
      },
      {
        path: "/users",
        element: <UsersPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <Signin />,
  },
  {
    path: "/404",
    element: <NotFound />,
  },
  {
    path: "*",
    element: <Navigate to="/404" replace />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster /> {/* ✅ Global toast container */}
    </>
  );
}

export default App;
