import Button from "./components/Button";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";

const users = [
  {
    id: 1,
    name: "Mohamed",
    age: 22,
    job: "Frontend Developer",
  },
  {
    id: 2,
    name: "Ahmed",
    age: 25,
    job: "Backend Developer",
  },
  {
    id: 3,
    name: "Ali",
    age: 30,
  },
];

function App() {
  return (
    <div className="card">
      <Navbar />
      <br />
      {users.map((user) => (
        <>
          <UserCard
            key={user.id}
            name={user.name}
            age={user.age}
            job={user.job}
          />
          <Button>View Profile</Button>
          <br />
        </>
      ))}
    </div>
  );
}

export default App;
