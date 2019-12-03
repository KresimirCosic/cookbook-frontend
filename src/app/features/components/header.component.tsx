import React from "react";
import { observer } from "mobx-react";

import Navbar from "./navbar.component";

const Header = () => {
  return (
    <div className="Header">
      <Navbar />
    </div>
  );
};

export default observer(Header);
