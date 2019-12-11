import React, { FC, useState } from "react";
import { observer } from "mobx-react";

import useRootStore from "../../shared/hooks/useRootStore.hook";

const IngredientCreator: FC = () => {
  const { ingredientStore } = useRootStore();
  const [modal, setModal] = useState(false);

  const turnOnModal = () => {
    setModal(true);
  };

  const turnOffModal = () => {
    setModal(false);
  };

  return (
    <div className="IngredientCreator">
      <button onClick={turnOnModal}>
        <i className="icon-file-text2"></i>
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

export default observer(IngredientCreator);
