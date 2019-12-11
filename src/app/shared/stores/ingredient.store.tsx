import { decorate, observable, computed, action } from "mobx";

import RootStore from "./root.store";

export interface IAllIngredient {
  id: number;
  name: string;
  unit: string;
}

export interface IUserIngredient {
  id: number;
  name: string;
  amount: number;
  unit: string;
}

export default class IngredientStore {
  allIngredients: IAllIngredient[] = [];
  userIngredients: IUserIngredient[] = [];

  constructor(private rootStore: RootStore) {}

  get totalAllIngredients() {
    return this.allIngredients.length;
  }

  get totalUserIngredients() {
    return this.userIngredients.length;
  }

  addAllIngredient = (allIngredient: IAllIngredient) => {
    this.allIngredients.push(allIngredient);
  };

  addUserIngredient = (userIngredient: IUserIngredient) => {
    this.userIngredients.push(userIngredient);
  };

  updateIngredient = () => {
    // TODO
  };

  deleteIngredient = () => {
    // TODO
  };

  clearIngredientStore = () => {
    this.allIngredients = [];
    this.userIngredients = [];
  };
}

decorate(IngredientStore, {
  allIngredients: observable,
  userIngredients: observable,

  totalAllIngredients: computed,
  totalUserIngredients: computed,

  addAllIngredient: action,
  addUserIngredient: action,
  updateIngredient: action,
  deleteIngredient: action,
  clearIngredientStore: action
});
