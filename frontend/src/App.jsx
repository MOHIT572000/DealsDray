import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import LoginForm from "./components/core/login/LoginForm";
import Signup from "./components/core/signup/Signup";
import CreateEmployee from "./components/core/createEmployee/CreateEmployee";
import Home from "./components/core/home/Home";
import Dashboard from "./components/core/dashboard/Dashboard";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        index: true,
        element: <LoginForm />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/create-employee",
        element: <CreateEmployee />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
