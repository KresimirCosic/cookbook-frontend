import { decorate, observable, computed, action } from "mobx";

import RootStore from "./root.store";

export default class IngredientStore {
  allIngredients: [] = [];
  userIngredients: [] = [];

  constructor(private rootStore: RootStore) {}

  get totalAllIngredients(): number {
    return this.allIngredients.length;
  }

  get totalUserIngredients(): number {
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
  allIngredients: observable,
  userIngredients: observable,

  totalAllIngredients: computed,
  totalUserIngredients: computed,

  addIngredient: action,
  updateIngredient: action,
  deleteIngredient: action
});
