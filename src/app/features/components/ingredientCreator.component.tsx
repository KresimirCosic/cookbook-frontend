import React, { FC, useState } from "react";
import { observer } from "mobx-react";
import { CSSTransition } from "react-transition-group";

import useRootStore from "../../shared/hooks/useRootStore.hook";
import Modal, {
  MODAL_ENTRY_DURATION,
  MODAL_EXIT_DURATION
} from "./modal.component";

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
      <button
        onClick={turnOnModal}
        className="creator-button creator-button-ingredient"
      >
        <i className="icon-file-text2"></i>
      </button>

      <CSSTransition
        in={modal}
        timeout={{
          appear: MODAL_ENTRY_DURATION,
          enter: MODAL_ENTRY_DURATION,
          exit: MODAL_EXIT_DURATION
        }}
        classNames="Modal"
        unmountOnExit
      >
        <Modal>
          <button onClick={turnOffModal}>Cancel</button>
          <button>Submit ingredient</button>
        </Modal>
      </CSSTransition>
    </div>
  );
};

export default observer(IngredientCreator);
