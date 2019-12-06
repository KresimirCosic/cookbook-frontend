import { decorate, observable, computed, action } from "mobx";

import RootStore from "./root.store";

export default class IngredientStore {
  userIngredients: [] = [];

  constructor(private rootStore: RootStore) {}

  get totalIngredients() {
    return this.userIngredients.length;
  }

  addIngredient = () => {
    // TODO
  };

  updateIngredient = () => {
    // TODO
  };

  deleteIngredient = () => {
    // TODO
  };
}

decorate(IngredientStore, {
  userIngredients: observable,

  totalIngredients: computed,

  addIngredient: action,
  updateIngredient: action,
  deleteIngredient: action
});
