import React, { FC } from "react";
import { observer } from "mobx-react";
import { CSSTransition } from "react-transition-group";

import useRootStore from "../../shared/hooks/useRootStore.hook";

const OVERLAY_ENTRY_DURATION = 150;
const OVERLAY_EXIT_DURATION = 250;

const Overlay: FC = () => {
  const { userInterfaceStore } = useRootStore();
  let { overlayStatus, turnOffOverlay, turnOffMenu } = userInterfaceStore;

  return (
    <CSSTransition
      in={overlayStatus}
      timeout={{
        appear: OVERLAY_ENTRY_DURATION,
        enter: OVERLAY_ENTRY_DURATION,
        exit: OVERLAY_EXIT_DURATION
      }}
      classNames="Overlay"
      onClick={() => {
        turnOffOverlay();
        turnOffMenu();
      }}
      unmountOnExit
    >
      <div className="Overlay absolute"></div>
    </CSSTransition>
  );
};

export default observer(Overlay);
