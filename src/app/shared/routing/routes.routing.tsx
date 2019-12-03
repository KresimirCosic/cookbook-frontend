import { Route, RouterStore } from "mobx-state-router";

import { LOADER_ENTRY_DURATION } from "../../features/components/loader.component";

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

routes.forEach(route => {
  // Turning off loader upon entering
  route.onEnter = async (fromState, toState, routerStore: RouterStore) => {
    const { rootStore } = routerStore;

    window.scrollTo(0, 0);
    setTimeout(
      () => rootStore.userInterfaceStore.turnOffLoader(),
      LOADER_ENTRY_DURATION
    );
  };

  // Turning on loader upon exiting
  route.onExit = async (fromState, toState, routerStore: RouterStore) => {
    const { rootStore } = routerStore;

    rootStore.userInterfaceStore.turnOnLoader();
  };
});

export default routes;
