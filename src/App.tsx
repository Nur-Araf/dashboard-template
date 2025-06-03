import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import { ThemeProvider } from "./components/provider/ThemeProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout>
      <Outlet />
    </DashboardLayout>,
    children: [
      {
        index: true,
        element: <div>Home</div>
      }
    ]
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
