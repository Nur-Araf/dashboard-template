import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import { ThemeProvider } from "./components/provider/ThemeProvider";
import Signin from "./pages/Signin";

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
        element: <div>Home</div>,
      },
      {
        path: "/student",
        element: <h1>Studet</h1>,
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
