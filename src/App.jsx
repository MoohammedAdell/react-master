import { useEffect, useState } from "react";
import Crud from "./components/crudOperation/Crud";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    async function getUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      const data = await response.json();
      setUsers(data);
    }
    getUsers();
  }, []);

  const handelAddUser = () => {
    async function addUser() {
      if (name.trim().length === 0 || age <= 0) return;
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            age: age,
          }),
        },
      );
      const data = await response.json();
      setUsers((prev) => [...prev, data]);

      setName("");
      setAge("");
    }
    addUser();
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter Name of user.."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter Age of user.."
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />
      <button onClick={handelAddUser}>Add User</button>
      {users.map((user) => (
        <h1 key={user.id}>{user.name}</h1>
      ))}
    </>
  );
}

export default App;
