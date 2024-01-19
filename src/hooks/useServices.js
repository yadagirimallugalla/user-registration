import { useState } from "react";
import APIRequest from "../utils/APIRequest";

export default function useServices() {
  const [users, setUsers] = useState([]);

  const serverUrl = "https://user-registration-s17h.onrender.com";
  // const serverUrl = "http://localhost:3000";
  const fetchUsers = async () => {
    try {
      const response = await APIRequest.request(
        "GET",
        serverUrl + "/api/users",
        ""
      );
      setUsers(response);
      console.log("users", response);
    } catch (error) {
      console.error(error);
    }
  };

  const sendUsers = async (data) => {
    try {
      const response = await APIRequest.request(
        "POST",
        serverUrl + "/api/users",
        JSON.stringify(data)
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await APIRequest.request(
        "DELETE",
        serverUrl + "/api/users/" + id,
        ""
      );
      fetchUsers();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const updateUser = async (id, data) => {
    console.log(id);
    console.log(data);
    try {
      const response = await APIRequest.request(
        "PATCH",
        serverUrl + "/api/users/" + id,
        JSON.stringify(data)
      );
      fetchUsers();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return { fetchUsers, sendUsers, deleteUser, updateUser, users };
}
