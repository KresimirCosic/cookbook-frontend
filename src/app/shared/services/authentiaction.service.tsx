import axios, { AxiosRequestConfig } from "axios";

import { rootStore } from "../stores/root.store";
import { RootService } from "./root.service";
import { TARGET } from "../environment";

const { routerStore, userInterfaceStore, authenticationStore } = rootStore;

const requestOptions: AxiosRequestConfig = {
  withCredentials: true
};

export default class AuthenticationService {
  constructor(private rootService: RootService) {}

  handleRegistration = (username: string, email: string, password: string) => {
    // Turning on loader
    userInterfaceStore.turnOnLoader();

    // Sending the request to create a new user with provided information
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

        // Turning off the loader after routing
        userInterfaceStore.turnOffLoader();
      })
      .catch(error => {
        console.log(error.response);

        // Turning off the loader after error
        userInterfaceStore.turnOffLoader();
      });
  };

  handleLogin = (email: string, password: string) => {
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
        const { email, username } = response.data;

        authenticationStore.setUserInformation(email, username);
        routerStore.goTo("home");
      })
      .catch(error => {
        console.log(error.response);
        userInterfaceStore.turnOffLoader();
      });
  };

  handleLogout = async () => {
    userInterfaceStore.turnOnLoader();

    axios.post(`${TARGET}/api/logout`, {}, requestOptions).then(response => {
      authenticationStore.removeUserInformation();
      routerStore.goTo("login");
    });
  };
}
