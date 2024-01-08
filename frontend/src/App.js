import { useState } from "react";
import "./App.css";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();

    const credentials = `${email}:${password}`;
    const encodedCredentials = btoa(credentials);

    try {
      await fetch("http://localhost:8000/basicAuthLogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${encodedCredentials}`,
        },
      });
    } catch (error) {
      console.log("---error---", error)
    }
   
  };

  return (
    <div className="container">
      <form onSubmit={handleForm} className="mainForm">
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
