import React, { useEffect } from "react";
import { observer } from "mobx-react";

import useRootStore from "../../shared/hooks/useRootStore.hook";

const NotFound = () => {
  const { userInterfaceStore } = useRootStore();

  useEffect(() => {
    // Turn off the loader
    userInterfaceStore.turnOffLoader();
  });

  return (
    <div className="Page NotFound">
      <div className="container">
        <h1>404 - Not found</h1>
      </div>
    </div>
  );
};

export default observer(NotFound);
