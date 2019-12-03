import React from "react";
import { observer } from "mobx-react";

import axios from "axios";

import useRootStore from "../../shared/hooks/useRootStore.hook";
import { TARGET } from "../../shared/environment";
import { LOADER_ENTRY_DURATION } from "../components/loader.component";

const Navbar = () => {
  const rootStore = useRootStore();
  const { routerStore, userInterfaceStore } = rootStore;

  const handleLogout = async () => {
    userInterfaceStore.turnOnLoader();
    axios
      .post(
        `${TARGET}/api/logout`,
        {},
        {
          withCredentials: true
        }
      )
      .then(response => {
        setTimeout(
          () => userInterfaceStore.turnOffLoader(),
          LOADER_ENTRY_DURATION
        );
      });
  };

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
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default observer(Navbar);
