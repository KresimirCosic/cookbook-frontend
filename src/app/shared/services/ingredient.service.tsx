import axios, { AxiosRequestConfig } from "axios";

import { rootStore } from "../stores/root.store";
import { RootService } from "./root.service";
import { TARGET } from "../environment";

const { userInterfaceStore, ingredientStore, authenticationStore } = rootStore;

const requestOptions: AxiosRequestConfig = {
  withCredentials: true
};

export default class IngredientService {
  constructor(private rootService: RootService) {}

  handleFetchingIngredients = () => {
    console.log("Fetching all ingredients.");
    axios
      .get(`${TARGET}/api/ingredients`, requestOptions)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error.response);
      });
  };

  handleCreatingIngredient = () => {
    // TODO
    console.log("Creating a new ingredient.");
  };

  handleUpdatingIngredient = () => {
    // TODO
    console.log("Updating an existing ingredient.");
  };

  handleDeletingIngredient = () => {
    // TODO
    console.log("Deleting an existing ingredient.");
  };
}
