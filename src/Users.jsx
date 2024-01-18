import PropTypes from "prop-types";
export default function Users({ users }) {
  return (
    <div className="grid grid-cols-12 gap-4 py-4">
      {users?.map((user) => (
        <div
          key={user._id}
          style={{ height: "50px", width: "300px", border: "1px solid black" }}
          className="col-span-3"
        >
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}
Users.propTypes = {
  users: PropTypes.array,
};
