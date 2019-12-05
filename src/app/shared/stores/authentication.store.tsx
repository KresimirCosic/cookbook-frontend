import { decorate, observable, computed, action } from "mobx";

import RootStore from "./root.store";

export default class AuthenticationStore {
  loggedIn: boolean = false;
  UID: number | null = null;
  username: string | null = null;
  email: string | null = null;

  constructor(private rootStore: RootStore) {}
}
