import { useState, useEffect } from "react";
import InputField from "./Components/inputField";
import Button from "./Components/Button";
import Users from "./Users";
import useServices from "./hooks/useServices";
const form = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const RegistrationForm = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState(form);

  const services = useServices({ setUsers });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    services.fetchUsers();
  }, [services]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await services.sendUsers(formData);
      console.log("Form submitted with data:", formData);
    } catch (error) {
      console.error(error);
    }
    console.log("Form submitted with data:", formData);
    setFormData(form);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
        <InputField
          label="Name:"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <InputField
          label="Email:"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />

        <InputField
          label="Password:"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <InputField
          label="Confirm Password:"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />
        <Button label="Submit" />
      </form>
      <Users users={users} />
    </>
  );
};

export default RegistrationForm;
