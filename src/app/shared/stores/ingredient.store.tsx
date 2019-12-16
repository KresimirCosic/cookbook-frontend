import { decorate, observable, computed, action } from "mobx";

import RootStore from "./root.store";

export interface IMeasure {
  id: number;
  name: string;
}

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
  measures: IMeasure[] = [];
  allIngredients: IAllIngredient[] = [];
  userIngredients: IUserIngredient[] = [];

  constructor(private rootStore: RootStore) {}

  get totalAllMeasures() {
    return this.measures.length;
  }

  get totalAllIngredients() {
    return this.allIngredients.length;
  }

  get totalUserIngredients() {
    return this.userIngredients.length;
  }

  addMeasure = (measure: IMeasure) => {
    this.measures.push(measure);
  };

  addAllIngredient = (allIngredient: IAllIngredient) => {
    this.allIngredients.push(allIngredient);
  };

  addUserIngredient = (userIngredient: IUserIngredient) => {
    this.userIngredients.push(userIngredient);
  };

  updateMeasure = () => {
    // TODO
  };

  updateAllIngredient = () => {
    // TODO
  };

  updateUserIngredient = () => {
    // TODO
  };

  deleteUserIngredient = () => {
    // TODO
  };

  clearIngredientStore = () => {
    this.measures = [];
    this.allIngredients = [];
    this.userIngredients = [];
  };
}

decorate(IngredientStore, {
  measures: observable,
  allIngredients: observable,
  userIngredients: observable,

  totalAllMeasures: computed,
  totalAllIngredients: computed,
  totalUserIngredients: computed,

  addMeasure: action,
  updateMeasure: action,
  addAllIngredient: action,
  updateAllIngredient: action,
  addUserIngredient: action,
  updateUserIngredient: action,
  deleteUserIngredient: action,
  clearIngredientStore: action
});
