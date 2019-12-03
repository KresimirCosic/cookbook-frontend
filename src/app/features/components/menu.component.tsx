import React, { FC } from "react";
import { observer } from "mobx-react";
import { CSSTransition } from "react-transition-group";

import useRootStore from "../../shared/hooks/useRootStore.hook";
import Navbar from "./navbar.component";

const MENU_ENTRY_DURATION: number = 150;
const MENU_EXIT_DURATION: number = 250;

const Menu: FC = () => {
  const { userInterfaceStore } = useRootStore();
  let { menuStatus } = userInterfaceStore;

  return (
    <CSSTransition
      in={menuStatus}
      timeout={{
        appear: MENU_ENTRY_DURATION,
        enter: MENU_ENTRY_DURATION,
        exit: MENU_EXIT_DURATION
      }}
      classNames="Menu"
      unmountOnExit
    >
      <div className="Menu">
        <Navbar />
      </div>
    </CSSTransition>
  );
};

export default observer(Menu);
