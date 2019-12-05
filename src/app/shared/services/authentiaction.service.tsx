import axios, { AxiosRequestConfig } from "axios";

import { rootStore } from "../stores/root.store";
import { RootService } from "./root.service";
import { TARGET } from "../environment";
import { SyntheticEvent } from "react";

const { routerStore, userInterfaceStore } = rootStore;

const requestOptions: AxiosRequestConfig = {
  withCredentials: true
};

export class AuthenticationService {
  constructor(private rootService: RootService) {}

  handleRegistration = (
    e: SyntheticEvent,
    username: string,
    email: string,
    password: string
  ) => {
    e.preventDefault();
    userInterfaceStore.turnOnLoader();

    axios
      .post(
        `${TARGET}/api/register`,
        {
          username: username,
          email: email,
          password: password
        },
        requestOptions
      )
      .then(response => {
        routerStore.goTo("login");
      })
      .catch(error => {
        console.log(error.response);
        userInterfaceStore.turnOffLoader();
      });
  };

  handleLogin = (e: SyntheticEvent, email: string, password: string) => {
    e.preventDefault();
    userInterfaceStore.turnOnLoader();

    axios
      .post(
        `${TARGET}/api/login`,
        {
          email: email,
          password: password
        },
        requestOptions
      )
      .then(response => {
        routerStore.goTo("home");
      })
      .catch(error => {
        console.log(error.response);
        userInterfaceStore.turnOffLoader();
      });
  };

  handleLogout = async () => {
    userInterfaceStore.turnOnLoader();

    axios
      .post(`${TARGET}/api/logout`, {}, requestOptions)
      .then(response => routerStore.goTo("login"));
  };
}
