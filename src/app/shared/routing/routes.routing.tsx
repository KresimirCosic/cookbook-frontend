import { Route, RouterStore, RouterState } from "mobx-state-router";

import { LOADER_ENTRY_DURATION } from "../../features/components/loader.component";
import RootStore from "../stores/root.store";

const routes: Route[] = [
  {
    name: "notFound",
    pattern: "/not-found"
  },
  {
    name: "register",
    pattern: "/register",
    beforeEnter: async (fromState, toState, routerStore) => {
      // TODO re-direct
      // const { rootStore }: { rootStore: RootStore } = routerStore;
      // const { authenticationStore } = rootStore;
      // if (authenticationStore.loggedInStatus) {
      //   return Promise.reject(new RouterState("home"));
      // }
    }
  },
  {
    name: "login",
    pattern: "/login"
  },
  {
    name: "home",
    pattern: "/",
    beforeEnter: async (fromState, toState, routerStore) => {
      // TODO re-direct
      // const { rootStore }: { rootStore: RootStore } = routerStore;
      // const { authenticationStore } = rootStore;
      // if (!authenticationStore.loggedInStatus) {
      //   return Promise.reject(new RouterState("login"));
      // }
    }
  }
];

routes.forEach(route => {
  // Turning off loader upon entering
  route.onEnter = async (fromState, toState, routerStore: RouterStore) => {
    const { rootStore }: { rootStore: RootStore } = routerStore;
    const { userInterfaceStore } = rootStore;

    // "Resetting" the view
    window.scrollTo(0, 0);
    userInterfaceStore.turnOffOverlay();
    userInterfaceStore.turnOffMenu();

    setTimeout(() => userInterfaceStore.turnOffLoader(), LOADER_ENTRY_DURATION);
  };

  // Turning on loader upon exiting
  route.onExit = async (fromState, toState, routerStore: RouterStore) => {
    const { rootStore }: { rootStore: RootStore } = routerStore;
    const { userInterfaceStore } = rootStore;

    userInterfaceStore.turnOnLoader();
  };
});

export default routes;
