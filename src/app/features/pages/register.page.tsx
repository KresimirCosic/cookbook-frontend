import React, { SyntheticEvent, useState } from "react";
import { observer } from "mobx-react";
import axios from "axios";

import useRootStore from "../../shared/hooks/useRootStore.hook";

import { TARGET } from "../../shared/environment";

const Register = () => {
  const { routerStore } = useRootStore();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e: SyntheticEvent) => {
    e.preventDefault();

    axios
      .post(
        `${TARGET}/api/register`,
        {
          username: username,
          email: email,
          password: password
        },
        {
          withCredentials: true
        }
      )
      .then(response => console.log(response))
      .catch(error => console.log(error.response));
  };

  return (
    <div className="Page Register">
      <form onSubmit={handleRegister}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          placeholder="Username"
          id="username"
          onChange={e => setUsername(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="text"
          placeholder="Email"
          id="email"
          onChange={e => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="text"
          placeholder="Password"
          id="password"
          onChange={e => setPassword(e.target.value)}
        />

        <input type="submit" value="Register" />
      </form>

      <h4>
        Already have an account?
        <button onClick={() => routerStore.goTo("login")}>Login here</button>
      </h4>
    </div>
  );
};

export default observer(Register);
