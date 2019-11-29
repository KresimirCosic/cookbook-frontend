import { Route } from "mobx-state-router";

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

export default routes;
