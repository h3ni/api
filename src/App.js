import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [user, setUser] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) =>
        // handle success
        {
          setUser(response.data);
          console.log(response);
        }
      )
      .catch((error) =>
        // handle error
        console.log(error)
      );
  }, []);

  const handleChange = (e) =>
    setUser({ id: Date.now(), [e.target.name]: e.target.value });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Person Name:
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <button type="submit">Add</button>
      </form>
      <div>
        {user.map((user) => {
          return <h>{user.name} | </h>;
        })}
      </div>
    </div>
  );
};
export default App;
