import { useState } from "react";
import InputField from "./Components/inputField";
import Button from "./Components/Button";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted with data:", formData);

    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      <InputField
        label="Username:"
        type="text"
        name="username"
        value={formData.username}
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
  );
};

export default RegistrationForm;
