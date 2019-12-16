import React, { FC, useState } from "react";
import { observer } from "mobx-react";
import { CSSTransition } from "react-transition-group";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  TextField,
  Select,
  MenuItem,
  Button,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";

import useRootStore from "../../shared/hooks/useRootStore.hook";
import Modal, {
  MODAL_ENTRY_DURATION,
  MODAL_EXIT_DURATION
} from "./modal.component";

const IngredientCreator: FC = () => {
  const { ingredientStore } = useRootStore();
  const [modal, setModal] = useState(false);
  const [newIngredientEntryForm, setNewIngredientEntryForm] = useState(false);

  // New user ingredient
  const [newUserIngredient, setNewUserIngredient] = useState("default");
  const [newUserIngredientAmount, setNewUserIngredientAmount] = useState("");

  // New ingredient entry
  const [newIngredientEntryName, setNewIngredientEntryName] = useState("");
  const [newIngredientEntryMeasure, setNewIngredientEntryMeasure] = useState(
    "default"
  );

  const resetForm = () => {
    if (!newIngredientEntryForm) {
      setNewUserIngredient("default");
      setNewUserIngredientAmount("");
    } else {
      setNewIngredientEntryForm(false);
    }
  };

  const turnOnModal = () => {
    setModal(true);
  };

  const turnOffModal = () => {
    resetForm();
    setModal(false);
  };

  const handleNewUserIngredientFormSubmit = () => {
    console.log(newUserIngredient, newUserIngredientAmount);
    turnOffModal();
  };

  const handleNewIngredientEntryFormSubmit = () => {
    // TODO
  };

  const handleFormType = () => {
    setNewIngredientEntryForm(!newIngredientEntryForm);
  };

  const handleFilteringAllIngredients = () => {
    // Finds the ingredients that are in the database, but the user has not entered it and their amount for themselves
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
              handleNewUserIngredientFormSubmit();
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={newIngredientEntryForm}
                  onChange={handleFormType}
                />
              }
              label="New ingredient entry?"
            />

            {!newIngredientEntryForm ? (
              // New user ingredient form
              <>
                <FormControl>
                  <Select
                    id="new-user-ingredient"
                    defaultValue="default"
                    onChange={(e: any) => {
                      setNewUserIngredient(e.target.value);
                    }}
                  >
                    <MenuItem value="default" disabled>
                      Choose...
                    </MenuItem>
                    {handleFilteringAllIngredients().map(allIngredient => (
                      <MenuItem key={allIngredient.id} value={allIngredient.id}>
                        {allIngredient.name} ({allIngredient.unit})
                      </MenuItem>
                    ))}
                  </Select>
                  <FormHelperText>Ingredient you don't have yet</FormHelperText>
                </FormControl>

                <FormControl>
                  <TextField
                    InputLabelProps={{ shrink: true }}
                    id="amount"
                    type="number"
                    onChange={e => setNewUserIngredientAmount(e.target.value)}
                  />
                  <FormHelperText>
                    Amount of the selected ingredient
                  </FormHelperText>
                </FormControl>
              </>
            ) : (
              // New ingredient entry form
              <>
                <FormControl>
                  <TextField
                    InputLabelProps={{ shrink: true }}
                    id="name"
                    type="text"
                  />
                  <FormHelperText>
                    Name for the new ingredient entry
                  </FormHelperText>
                </FormControl>

                <FormControl>
                  <Select
                    id="new-ingredient-entry-name"
                    defaultValue="default"
                    onChange={(e: any) =>
                      setNewIngredientEntryName(e.target.value)
                    }
                  >
                    <MenuItem value="default" disabled>
                      Choose...
                    </MenuItem>
                    {ingredientStore.measures.map(measure => (
                      <MenuItem key={measure.id}>{measure.name}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </>
            )}

            <div className="form-controls">
              <Button type="button" onClick={turnOffModal}>
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Submit
              </Button>
            </div>
          </form>
        </Modal>
      </CSSTransition>
    </div>
  );
};

export default observer(IngredientCreator);
