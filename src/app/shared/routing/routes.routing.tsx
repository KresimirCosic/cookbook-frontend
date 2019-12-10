import { Route, RouterStore } from "mobx-state-router";

import RootStore from "../stores/root.store";

const routes: Route[] = [
  {
    name: "notFound",
    pattern: "/not-found"
  },
  {
    name: "register",
    pattern: "/register"
  },
  {
    name: "login",
    pattern: "/login"
  },
  {
    name: "home",
    pattern: "/"
  }
];

// General behavior when routing to and from each routes (not definitive and prone to some changes)
routes.forEach(route => {
  route.onEnter = async (fromState, toState, routerStore: RouterStore) => {
    const { rootStore }: { rootStore: RootStore } = routerStore;
    const { userInterfaceStore } = rootStore;

    // "Resetting" the view when entering a route
    window.scrollTo(0, 0);
    userInterfaceStore.turnOffOverlay();
    userInterfaceStore.turnOffMenu();
  };

  // Turning on loader upon exiting a route
  route.onExit = async (fromState, toState, routerStore: RouterStore) => {
    const { rootStore }: { rootStore: RootStore } = routerStore;
    const { userInterfaceStore } = rootStore;

    userInterfaceStore.turnOnLoader();
  };
});

export default routes;
