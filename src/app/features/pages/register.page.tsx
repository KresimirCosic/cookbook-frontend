import React from "react";
import { observer } from "mobx-react";

import withRootStore from "../../shared/hocs/withRootStore.hoc";
import useRootStore from "../../shared/hooks/useRootStore.hook";

const Register = () => {
  const rootStore = useRootStore();

  return (
    <div className="Page Page-Register">
      <button onClick={() => rootStore.routerStore.goTo("login")}>Login</button>
      <button onClick={() => rootStore.routerStore.goTo("home")}>Home</button>
      <h1>This is the page: {rootStore.routerStore.getCurrentRoute().name}.</h1>
    </div>
  );
};

export default withRootStore(observer(Register));
