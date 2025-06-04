import "./App.css";
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import UsersPage from "./pages/Users";
import NotFound from "./components/shared/PageNotFound";
import { Toaster } from "sonner";

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
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/profile",
        element: <Profile />,
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
