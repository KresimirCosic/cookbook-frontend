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
  const [newIngredient, setNewIngredient] = useState("default");
  const [newIngredientAmount, setNewIngredientAmount] = useState("");

  const resetForm = () => {
    setNewIngredient("default");
    setNewIngredientAmount("");
  };

  const turnOnModal = () => {
    setModal(true);
  };

  const turnOffModal = () => {
    setModal(false);
    resetForm();
  };

  const handleSubmit = () => {
    turnOffModal();
  };

  const handleFilteringAllIngredients = () => {
    return ingredientStore.allIngredients.filter(
      ingredient =>
        !ingredientStore.userIngredients.find(
          userIngredient => userIngredient.name === ingredient.name
        )
    );
  };

  return (
    <div className="IngredientCreator">
      <button
        onClick={turnOnModal}
        className="creator-button creator-button-ingredient"
      >
        <i className="icon-lab"></i>
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
          <form
            onSubmit={e => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <select
              name="ingredients"
              id="ingredients"
              onChange={e => {
                setNewIngredient(e.target.value);
              }}
              defaultValue="default"
            >
              <option value={newIngredient} disabled>
                Choose an ingredient
              </option>
              {handleFilteringAllIngredients().map(allIngredient => (
                <option key={allIngredient.id} value={allIngredient.id}>
                  {allIngredient.name} ({allIngredient.unit})
                </option>
              ))}
            </select>

            <label htmlFor="amount">Amount:</label>
            <input
              type="number"
              id="amount"
              placeholder="Amount"
              onChange={e => setNewIngredientAmount(e.target.value)}
            />

            <button type="button" onClick={turnOffModal}>
              Cancel
            </button>
            <input type="submit" value="Submit" />
          </form>
        </Modal>
      </CSSTransition>
    </div>
  );
};

export default observer(IngredientCreator);
