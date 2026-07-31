import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      {user ? (
        <>
        <h3>Welcome {user.name}</h3>
        <h3>Your Email is: {user.email}</h3>
        </>
      ) : (
        <h3>Please Login</h3>
      )}
    </div>
  );
}