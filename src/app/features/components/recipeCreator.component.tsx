import React, { FC, useState } from "react";
import { observer } from "mobx-react";
import { CSSTransition } from "react-transition-group";

import Modal, {
  MODAL_ENTRY_DURATION,
  MODAL_EXIT_DURATION
} from "./modal.component";

const RecipeCreator: FC = () => {
  const [modal, setModal] = useState(false);

  const turnOnModal = () => {
    setModal(true);
  };

  const turnOffModal = () => {
    setModal(false);
  };

  return (
    <div className="RecipeCreator">
      <button
        onClick={turnOnModal}
        className="creator-button creator-button-recipe"
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
          <button onClick={turnOffModal} type="button">
            Cancel
          </button>
          <button type="submit">Submit recipe</button>
        </Modal>
      </CSSTransition>
    </div>
  );
};

export default observer(RecipeCreator);
