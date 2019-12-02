import React, { SyntheticEvent, useState } from "react";
import { observer } from "mobx-react";
import axios from "axios";

import useRootStore from "../../shared/hooks/useRootStore.hook";

import { TARGET } from "../../shared/environment";

const Login = () => {
  const rootStore = useRootStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: SyntheticEvent) => {
    e.preventDefault();

    axios
      .post(
        `${TARGET}/api/login`,
        {
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
    <div className="Page Page-Login">
      <h1>This is the page: {rootStore.routerStore.getCurrentRoute().name}.</h1>

      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          placeholder="Email"
          id="email"
          onChange={e => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={e => setPassword(e.target.value)}
        />

        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default observer(Login);
