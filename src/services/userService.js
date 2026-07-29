import axios from "axios";

export default async function getUsers() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users",
  );

  return response.data;
}

export async function addUser(user) {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/users",
    user,
  );
  return response.data;
}

export async function deleteUser(id) {
  await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

  return id;
}

export async function updateUser(id, user) {
  const response = await axios.put(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    user
  );

  return response.data;
}
