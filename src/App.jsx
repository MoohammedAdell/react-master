import { useState } from "react";
import UserCard from "./components/UserCard";

const initialUsers = [
  { id: 1, name: "Mohamed", age: 22 },
  { id: 2, name: "Ahmed", age: 20 },
  { id: 3, name: "Ali", age: 25 },
];

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handelAddUser = () => {
    const newUser = {
      id: Date.now,
      name: name,
      age: Number(age),
    };
    if (name.trim().length > 0 && age > 0) {
      setUsers((prev) => [...prev, newUser]);
    }
    setName("");
    setAge("");
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter Your Name.."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter Your Age.."
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={handelAddUser}>Add User</button>

      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </>
  );
}

export default App;
