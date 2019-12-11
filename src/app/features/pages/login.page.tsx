import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";

import useRootService from "../../shared/hooks/useRootService.hook";
import useRootStore from "../../shared/hooks/useRootStore.hook";

const Login = () => {
  const { authenticationService } = useRootService();
  const { userInterfaceStore } = useRootStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // Turn off the loader
    userInterfaceStore.turnOffLoader();
  });

  return (
    <div className="Page Login">
      <div className="container">
        <form
          onSubmit={e => {
            e.preventDefault();
            authenticationService.handleLogin(email, password);
          }}
          className="form form-login"
        >
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
    </div>
  );
};

export default observer(Login);
