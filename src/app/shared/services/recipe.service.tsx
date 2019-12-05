import { SyntheticEvent } from "react";
import axios, { AxiosRequestConfig } from "axios";

import { rootStore } from "../stores/root.store";
import { RootService } from "./root.service";
import { TARGET } from "../environment";

const { userInterfaceStore, recipeStore } = rootStore;

const requestOptions: AxiosRequestConfig = {
  withCredentials: true
};

export default class RecipeService {
  constructor(private rootService: RootService) {}

  handleRecipeCreation = () => {
    // TODO
  };

  handleRecipeUpdate = () => {
    // TODO
  };

  handleRecipeDeletion = () => {
    // TODO
  };
}
