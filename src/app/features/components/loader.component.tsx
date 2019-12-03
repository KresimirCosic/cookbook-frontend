import React, { FC } from "react";
import { observer } from "mobx-react";
import { CSSTransition } from "react-transition-group";

import useRootStore from "../../shared/hooks/useRootStore.hook";

export const LOADER_ENTRY_DURATION = 25;
export const LOADER_EXIT_DURATION = 350;

const Loader: FC = () => {
  const { userInterfaceStore } = useRootStore();
  let { loaderStatus } = userInterfaceStore;

  return (
    <CSSTransition
      in={loaderStatus}
      timeout={{
        appear: LOADER_ENTRY_DURATION,
        enter: LOADER_ENTRY_DURATION,
        exit: LOADER_EXIT_DURATION
      }}
      classNames="Loader"
      unmountOnExit
    >
      <div className="Loader absolute">
        <div className="loading-animation">
          <div />
          <div />
          <div />
        </div>
      </div>
    </CSSTransition>
  );
};

export default observer(Loader);
