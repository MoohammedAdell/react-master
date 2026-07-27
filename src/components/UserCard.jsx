function UserCard({ user, handleDelete, handelEdit }) {
  return (
    <div>
      <h2>👤 {user.name}</h2>
      <p>Age: {user.age}</p>
      <button onClick={() => handleDelete(user.id)}>Delete User</button>
      <button onClick={() => handelEdit(user)}>Edit User</button>
    </div>
  );
}
export default UserCard;
