import APIRequest from "../utils/APIRequest";

export default function useServices({ setUsers }) {
  const fetchUsers = async () => {
    try {
      const response = await APIRequest.request(
        "GET",
        "http://localhost:3000/api/users",
        ""
      );
      console.log("users", response);
      setUsers(response);
    } catch (error) {
      console.error(error);
    }
  };

  const sendUsers = async (data) => {
    try {
      const response = await APIRequest.request(
        "POST",
        "http://localhost:3000/api/users",
        JSON.stringify(data)
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return { fetchUsers, sendUsers };
}
