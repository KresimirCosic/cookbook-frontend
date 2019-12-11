import React, { useEffect } from "react";
import { observer } from "mobx-react";

import useRootStore from "../../shared/hooks/useRootStore.hook";

const Recipes = () => {
  const { userInterfaceStore } = useRootStore();

  useEffect(() => {
    // Turn off the loader
    userInterfaceStore.turnOffLoader();
  });

  return (
    <div className="Page Recipes">
      <h1>Recipes</h1>
    </div>
  );
};

export default observer(Recipes);
