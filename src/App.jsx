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
  const [edit, setEdit] = useState(null);

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

  const handleDelete = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  const handelEdit = (user) => {
    setEdit(user);
    setName(user.name);
    setAge(user.age);
  };
  const handleUpdateUser = (id) => {
    setUsers((prev) =>
      prev.map((user) => {
        if (user.id === edit.id) {
          return {
            ...user,
            name,
            age: Number(age),
          };
        }

        return user;
      }),
    );
    setEdit(null);
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
      <button onClick={edit ? handleUpdateUser : handelAddUser}>
        {edit ? "Update User" : "Add User"}
      </button>

      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          handleDelete={handleDelete}
          handelEdit={handelEdit}
          handleUpdateUser={handleUpdateUser}
        />
      ))}
    </>
  );
}

export default App;
