import React, { useEffect } from "react";
import { observer } from "mobx-react";

import useRootStore from "../../shared/hooks/useRootStore.hook";

const Ingredients = () => {
  const { userInterfaceStore } = useRootStore();

  useEffect(() => {
    // Turn off the loader
    userInterfaceStore.turnOffLoader();
  });

  return (
    <div className="Page Ingredients">
      <div className="container">
        <h1>Ingredients</h1>
      </div>
    </div>
  );
};

export default observer(Ingredients);
