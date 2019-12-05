import React from "react";
import { observer } from "mobx-react";

import useRootStore from "../../shared/hooks/useRootStore.hook";
import useRootService from "../../shared/hooks/useRootService.hook";

const Navbar = () => {
  const { routerStore } = useRootStore();
  const { authenticationService } = useRootService();

  return (
    <div className="Navbar">
      <ul>
        <li>
          <button onClick={() => routerStore.goTo("home")}>Home</button>
        </li>
        <li>
          <button onClick={() => routerStore.goTo("register")}>Register</button>
        </li>
        <li>
          <button onClick={() => routerStore.goTo("login")}>Login</button>
        </li>
        <li>
          <button onClick={authenticationService.handleLogout}>Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default observer(Navbar);
