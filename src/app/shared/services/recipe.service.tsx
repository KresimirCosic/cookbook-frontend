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

  handleFetchingRecipes = () => {
    // TODO
    console.log("Fetching all recipes.");
  };

  handleCreatingRecipe = () => {
    // TODO
    console.log("Creating a new recipe.");
  };

  handleUpdatingRecipe = () => {
    // TODO
    console.log("Updating an existing recipe.");
  };

  handleDeletingRecipe = () => {
    // TODO
    console.log("Updating an existing recipe.");
  };
}
