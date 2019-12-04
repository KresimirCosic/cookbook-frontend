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
        <label htmlFor="email">
          <small>Email:</small>
        </label>
        <input
          type="email"
          placeholder="Email"
          id="email"
          onChange={e => setEmail(e.target.value)}
        />

        <label htmlFor="password">
          <small>Password:</small>
        </label>
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
