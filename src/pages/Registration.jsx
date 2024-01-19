import { ToastContainer, toast } from "react-toastify";
import Button from "../Components/Button";
import InputField from "../Components/inputField";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const RegistrationForm = ({ form, formData, setFormData, services }) => {
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      toast.error("All field are required");
      return;
    }
    if (formData?.password !== formData?.confirmPassword) {
      toast.error("Passwards do not match");
      return;
    }

    try {
      await services?.sendUsers(formData);
      toast.success("User created successfully!");
      console.log("Form submitted with data:", formData);

      navigate("/");
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
          value={formData?.name}
          onChange={handleInputChange}
        />
        <InputField
          label="Email:"
          type="text"
          name="email"
          value={formData?.email}
          onChange={handleInputChange}
        />

        <InputField
          label="Password:"
          type="password"
          name="password"
          value={formData?.password}
          onChange={handleInputChange}
        />
        <InputField
          label="Confirm Password:"
          type="password"
          name="confirmPassword"
          value={formData?.confirmPassword}
          onChange={handleInputChange}
        />
        <Button label="Submit" />
      </form>
      <ToastContainer />
    </>
  );
};
RegistrationForm.propTypes = {
  form: PropTypes.object,
  formData: PropTypes.object,
  setFormData: PropTypes.func,
  services: PropTypes.object,
};

export default RegistrationForm;
