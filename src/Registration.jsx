import { useState, useEffect } from "react";
import InputField from "./Components/inputField";
import Button from "./Components/Button";
import Users from "./Users";

const RegistrationForm = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000//api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const newUser = await response.json();
        console.log("New user created successfully", newUser);
        setUsers([...users, newUser.user]);

        setFormData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      } else {
        console.error("Failed to add user:", response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
    console.log("Form submitted with data:", formData);
  };
  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://localhost:3000/api/users")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setUsers(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };

    fetchData();
  }, []);

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
