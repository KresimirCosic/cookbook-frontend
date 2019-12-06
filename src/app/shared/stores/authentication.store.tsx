import { decorate, observable, computed, action } from "mobx";

import RootStore from "./root.store";

export default class AuthenticationStore {
  loggedIn: boolean = false;
  username: string | null = null;
  email: string | null = null;

  constructor(private rootStore: RootStore) {}

  get loggedInStatus() {
    return this.loggedIn;
  }

  get usernameValue() {
    return this.username;
  }

  get emailValue() {
    return this.email;
  }

  logIn = (email: string, username: string) => {
    this.loggedIn = true;
    this.username = username;
    this.email = email;
  };

  logOut = () => {
    this.loggedIn = false;
    this.username = null;
    this.email = null;
  };
}

decorate(AuthenticationStore, {
  loggedIn: observable,
  username: observable,
  email: observable,

  loggedInStatus: computed,
  usernameValue: computed,
  emailValue: computed,

  logIn: action,
  logOut: action
});
