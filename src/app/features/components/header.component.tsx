import React from "react";
import { observer } from "mobx-react";

import useRootStore from "../../shared/hooks/useRootStore.hook";

const Header = () => {
  const { userInterfaceStore } = useRootStore();
  const { turnOnOverlay, turnOnMenu } = userInterfaceStore;

  return (
    <div className="Header">
      <button
        onClick={() => {
          turnOnOverlay();
          turnOnMenu();
        }}
      >
        <i className="icon-home"></i>
      </button>
    </div>
  );
};

export default observer(Header);
