import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import { ThemeProvider } from "./components/provider/ThemeProvider";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import Subscriptions from "./pages/Subscriptions";

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
        element: <h1>Admin</h1>,
      },
      {
        path: "/subscription",
        element: <Subscriptions />,
      },
      {
        path: "/statistics",
        element: <h1>Statistics</h1>,
      },
      {
        path: "/settings",
        element: <h1>Settings</h1>,
      },
      {
        path: "/transaction",
        element: <h1>Transaction</h1>,
      },
      {
        path: "/profile",
        element: <h1>Profile</h1>,
      },
      {
        path: "/users",
        element: <h1>Users</h1>,
      },
    ],
  },
  {
    path: "/login",
    element: <Signin />,
  },
]);
function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
