import React, { SyntheticEvent, useState } from "react";
import { observer } from "mobx-react";
import axios from "axios";

import useRootStore from "../../shared/hooks/useRootStore.hook";

import { TARGET } from "../../shared/environment";

const Login = () => {
  const { routerStore, userInterfaceStore } = useRootStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: SyntheticEvent) => {
    e.preventDefault();
    userInterfaceStore.turnOnLoader();

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
      .then(response => {
        routerStore.goTo("home");
      })
      .catch(error => {
        console.log(error.response);
        userInterfaceStore.turnOffLoader();
      });
  };

  return (
    <div className="Page Login">
      <form onSubmit={handleLogin} className="form form-login">
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

      <h4>
        Don't have an account?
        <button onClick={() => routerStore.goTo("register")}>
          Register for free!
        </button>
      </h4>
    </div>
  );
};

export default observer(Login);
