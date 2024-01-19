import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import InputField from "../Components/inputField";
import Button from "../Components/Button";
import PropTypes from "prop-types";

function EditUser({ services }) {
  const navigate = useNavigate();
  const location = useLocation();
  const userDetails = location.state;

  const [updatedUserData, setUpdatedUserData] = useState({
    name: userDetails.name,
    email: userDetails.email,
  });

  const handleUpdate = async () => {
    console.log("updatedUserData", updatedUserData);

    try {
      await services.updateUser(userDetails._id, updatedUserData);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (fieldName, value) => {
    setUpdatedUserData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  return (
    <div className="flex justify-center items-center flex-col p-4">
      <h2 className="text-2xl font-bold p-4">Update User</h2>
      <div className="w-2/5 border p-4 bg-sky-300 rounded-md">
        <InputField
          label="Name"
          defaultValue={userDetails.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
        />
        <InputField
          label="Email"
          defaultValue={userDetails.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
        />

        <div className="flex justify-evenly">
          <Link to="/">
            <Button label="Cancel" color="gray" />
          </Link>
          <Button label="Update" color="green" handleBtnClick={handleUpdate} />
        </div>
      </div>
    </div>
  );
}

EditUser.propTypes = {
  services: PropTypes.object,
};
export default EditUser;
