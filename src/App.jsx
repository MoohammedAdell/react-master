// import { use, useEffect, useState } from "react";
// import Crud from "./components/crudOperation/Crud";
// import axios from "axios";
// import getUsers, { addUser } from "./services/userService";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/contact";
import About from "./pages/About";
import Nav from "./pages/Nav";
import User from "./pages/User";
import ErrorPage from "./pages/ErrorPage";
import DashboardLayout from "./pages/DashboardLayout";
import Profile from "./pages/Profile";
import Orders from "./pages/Orders";
import Login from "./pages/Login";

function App() {
  //   const [users, setUsers] = useState([]);
  //   const [name, setName] = useState("");
  //   const [age, setAge] = useState("");
  //   const [editId, setEditID] = useState(null);
  //   const [error, setError] = useState("");
  //   const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     async function fetchUsers() {
  //       try {
  //         setLoading(true);
  //         const data = await getUsers();
  //         setUsers(data);
  //       } catch (error) {
  //         console.log(error);
  //         setError("حدث خطأ أثناء تحميل البيانات");
  //       } finally {
  //         setLoading(false);
  //       }
  //     }

  //     fetchUsers();
  //   }, []);

  //   const handelAddUser = () => {
  //     async function addingUser() {
  //       try {
  //         const user = {
  //           name,
  //           age,
  //         };
  //         const data = await addUser(user);

  //         setUsers((prev) => [...prev, data]);

  //         setName("");
  //         setAge("");
  //       } catch (error) {
  //         console.log(error);
  //         setError("حدث خطأ أثناء إضافة المستخدم");
  //       }
  //     }
  //     addingUser();
  //   };

  //   async function handelDeleteUser(id) {
  //     try {
  //       const deletedId = await deleteUser(id);
  //       setUsers((prev) => prev.filter((user) => user.id !== deletedId));
  //     } catch (error) {
  //       console.log(error);
  //       setError("حدث خطأ أتناء حذف المستخدم");
  //     }
  //   }

  //   const editUserID = (user) => {
  //     setEditID(user);
  //     setName(user.name);
  //     setAge(user.age);
  //   };

  //   async function updateUser(id) {
  //     try {
  //       const user = {
  //         name,
  //         age,
  //       };

  //       const updatedUser = await updateUser(id, user);

  //       setUsers((prev) =>
  //         prev.map((item) =>
  //           item.id === id ? { ...item, ...updatedUser } : item,
  //         ),
  //       );

  //       setEditId(null);
  //       setName("");
  //       setAge("");
  //     } catch (error) {
  //       console.log(error);
  //       setError("حدث خطأ أثناء تعديل المستخدم");
  //     }
  //   }

  return (
    // <>
    //   <input
    //     type="text"
    //     placeholder="Enter Name of user.."
    //     value={name}
    //     onChange={(e) => setName(e.target.value)}
    //   />
    //   <input
    //     type="number"
    //     placeholder="Enter Age of user.."
    //     value={age}
    //     onChange={(e) => setAge(Number(e.target.value))}
    //   />
    //   <button onClick={editId ? () => updateUser(editId) : handelAddUser}>
    //     {editId ? "Update User" : "Add User"}
    //   </button>

    //   {error && <h2 style={{ color: "red" }}>{error}</h2>}

    //   {loading ? (
    //     <h1>loading .. </h1>
    //   ) : (
    //     users.map((user) => (
    //       <>
    //         <h1 key={user.id}>{user.name}</h1>
    //         <button onClick={() => handelDeleteUser(user.id)}>
    //           Delete User
    //         </button>
    //         <button onClick={() => editUserID(user)}>Edit User</button>
    //       </>
    //     ))
    //   )}
    // </>
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route path="profile" element={<Profile />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
