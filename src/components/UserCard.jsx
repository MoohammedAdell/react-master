function UserCard({ name, age, job = "No Job" }) {
  return (
    <div>
      <h2>👤 {name}</h2>
      <p>Age: {age}</p>
      <p>Job: {job}</p>
    </div>
  );
}
export default UserCard;
