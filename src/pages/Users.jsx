import PropTypes from "prop-types";
import Button from "../Components/Button";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export default function Users({ services, users }) {
  console.log(services);
  console.log(users);
  const navigate = useNavigate();

  useEffect(() => {
    services?.fetchUsers();
  }, []);

  const handleEdit = (user) => {
    navigate("/edit", { state: user });
  };

  const handleDelete = (id) => {
    services.deleteUser(id);
    toast.info("User deleted!!!");
  };

  return (
    <>
      <p className="text-xl font-semibold p-3">Total Users: {users.length}</p>
      <div className="grid grid-cols-12 gap-4 py-4">
        {users?.map((user) => (
          <div
            key={user._id}
            style={{
              height: "100px",
              width: "300px",
              border: "1px solid black",
            }}
            className="col-span-3 p-2"
          >
            <p>{user.name}</p>
            <p>{user.email}</p>
            <div className="flex justify-evenly">
              <Button label="Edit" handleBtnClick={() => handleEdit(user)} />
              <Button
                label="Delete"
                color="red"
                handleBtnClick={() => handleDelete(user._id)}
              />
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </>
  );
}
Users.propTypes = {
  users: PropTypes.array,
  services: PropTypes.any,
};
