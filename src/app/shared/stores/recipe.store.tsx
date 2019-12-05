import { decorate, observable, computed, action } from "mobx";

import RootStore from "./root.store";

export default class RecipeStore {
  userRecipes: [] = [];

  constructor(private rootStore: RootStore) {}

  get totalUserRecipes(): number {
    return this.userRecipes.length;
  }

  addRecipe = () => {
    // TODO
  };

  updateRecipe = () => {
    // TODO
  };

  deleteRecipe = () => {
    // TODO
  };
}

decorate(RecipeStore, {
  userRecipes: observable,

  totalUserRecipes: computed,

  addRecipe: action,
  updateRecipe: action,
  deleteRecipe: action
});
