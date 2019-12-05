import React from "react";
import { observer } from "mobx-react";
import { RouterLink } from "mobx-state-router";

import useRootService from "../../shared/hooks/useRootService.hook";

const Navbar = () => {
  const { authenticationService } = useRootService();

  return (
    <div className="Navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <RouterLink routeName="home" activeClassName="active">
            Home
          </RouterLink>
        </li>
        <li className="navbar-item">
          <RouterLink routeName="login" activeClassName="active">
            Login
          </RouterLink>
        </li>
        <li className="navbar-item">
          <RouterLink routeName="register" activeClassName="active">
            Register
          </RouterLink>
        </li>
        <li className="navbar-item">
          <button onClick={authenticationService.handleLogout}>Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default observer(Navbar);
