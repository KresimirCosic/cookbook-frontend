import { RouterState, RouterStore } from "mobx-state-router";

import routes from "../routing/routes.routing";
import UserInterfaceStore from "./userInterface.store";

const notFound = new RouterState("notFound");

export default class RootStore {
  routerStore = new RouterStore(this, routes, notFound);
  userInterfaceStore = new UserInterfaceStore(this);
}

export const rootStore = new RootStore();
