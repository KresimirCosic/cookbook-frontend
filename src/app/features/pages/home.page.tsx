import React from "react";
import { observer } from "mobx-react";

import useRootStore from "../../shared/hooks/useRootStore.hook";

const Home = () => {
  const rootStore = useRootStore();

  return <div className="Page Home"></div>;
};

export default observer(Home);
