import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import Profile from "./pages/Profile";
import Users from "./pages/Users";
import Settings from "./pages/Settings";

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
        path: "/admin",
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
        element: <Users />,
      },
    ],
  },
  {
    path: "/login",
    element: <Signin />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
