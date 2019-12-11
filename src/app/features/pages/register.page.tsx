import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";

import useRootService from "../../shared/hooks/useRootService.hook";
import useRootStore from "../../shared/hooks/useRootStore.hook";

const Register = () => {
  const { authenticationService } = useRootService();
  const { userInterfaceStore } = useRootStore();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // Turn off the loader
    userInterfaceStore.turnOffLoader();
  });

  return (
    <div className="Page Register">
      <div className="container">
        <form
          onSubmit={e => {
            e.preventDefault();
            authenticationService.handleRegistration(username, email, password);
          }}
        >
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            placeholder="Username"
            id="username"
            onChange={e => setUsername(e.target.value)}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
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
      </div>
    </div>
  );
};

export default observer(Register);
