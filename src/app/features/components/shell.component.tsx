import React, { FC } from "react";
import { RouterView } from "mobx-state-router";

import Footer from "./footer.component";
import Overlay from "./overlay.component";
import Loader from "./loader.component";
import Menu from "./menu.component";
import Controls from "./controls.component";

import viewMap from "../../shared/routing/viewMap.routing";
import useRootStore from "../../shared/hooks/useRootStore.hook";

const Shell: FC = () => {
  const { routerStore } = useRootStore();

  return (
    <div className="Shell">
      <Loader />
      <Controls />
      <Overlay />
      <Menu />
      <RouterView routerStore={routerStore} viewMap={viewMap} />
      <Footer />
    </div>
  );
};

export default Shell;
