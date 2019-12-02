import React from "react";
import { observer } from "mobx-react";
import axios from "axios";

import useRootStore from "../../shared/hooks/useRootStore.hook";
import { TARGET } from "../../shared/environment";

const Header = () => {
  const { routerStore } = useRootStore();

  const handleLogout = async () => {
    axios.post(
      `${TARGET}/api/logout`,
      {},
      {
        withCredentials: true
      }
    );
  };

  return (
    <div className="Header">
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
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default observer(Header);
