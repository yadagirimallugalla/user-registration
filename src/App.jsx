import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./pages";
import EditUser from "./pages/EditUser";
import RegistrationForm from "./pages/Registration";
import Users from "./pages/Users";
import { useState } from "react";
import useServices from "./hooks/useServices";
const form = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function App() {
  const [formData, setFormData] = useState(form);
  const services = useServices();

  const users = services.users;
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <Users services={services} users={users} /> },
        {
          path: "/register",
          element: (
            <RegistrationForm
              form={form}
              formData={formData}
              setFormData={setFormData}
              services={services}
            />
          ),
        },
        { path: "/edit", element: <EditUser services={services} /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
