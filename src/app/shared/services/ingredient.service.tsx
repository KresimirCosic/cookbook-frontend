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

  handleIngredientsFetching = () => {
    // TODO
  };

  handleIngredientCreation = () => {
    // TODO
  };

  handleIngredientUpdate = () => {
    // TODO
  };

  handleIngredientDeletion = () => {
    // TODO
  };
}
