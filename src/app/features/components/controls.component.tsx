import React, { FC } from "react";
import { observer } from "mobx-react";

import useRootStore from "../../shared/hooks/useRootStore.hook";

const Controls: FC = () => {
  const { userInterfaceStore } = useRootStore();
  const {
    overlayStatus,
    turnOnOverlay,
    turnOffOverlay,
    menuStatus,
    turnOnMenu,
    turnOffMenu
  } = userInterfaceStore;

  return (
    <div className="Controls absolute">
      {overlayStatus && menuStatus ? (
        <button
          className="control control-cross"
          onClick={() => {
            turnOffOverlay();
            turnOffMenu();
          }}
        >
          <i className="icon-cross"></i>
        </button>
      ) : (
        <button
          className="control control-menu"
          onClick={() => {
            turnOnOverlay();
            turnOnMenu();
          }}
        >
          <i className="icon-menu"></i>
        </button>
      )}
    </div>
  );
};

export default observer(Controls);
