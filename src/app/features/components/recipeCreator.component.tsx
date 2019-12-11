import React, { FC, useState } from "react";
import { observer } from "mobx-react";

import useRootStore from "../../shared/hooks/useRootStore.hook";

const RecipeCreator: FC = () => {
  const { recipeStore } = useRootStore();
  const [modal, setModal] = useState(false);

  const turnOnModal = () => {
    setModal(true);
  };

  const turnOffModal = () => {
    setModal(false);
  };

  return (
    <div className="RecipeCreator">
      <button onClick={turnOnModal}>
        <i className="icon-spoon-knife"></i>
      </button>

      {modal ? (
        <div className="modal absolute">
          <div className="relative">
            <div className="container">
              <button onClick={turnOffModal}>Cancel</button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default observer(RecipeCreator);
