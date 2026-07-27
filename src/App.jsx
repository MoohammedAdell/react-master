import { useEffect, useState } from "react";
import Crud from "./components/crudOperation/Crud";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      const data = await response.json();
      console.log(data);
      setUsers(data);
    }
    getUsers();
  }, []);

  return (
    <>
      {users.map((user) => (
        <h1 key={user.id}>{user.name}</h1>
      ))}
    </>
  );
}

export default App;
