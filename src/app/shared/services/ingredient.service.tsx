import { SyntheticEvent } from "react";
import axios, { AxiosRequestConfig } from "axios";

import { rootStore } from "../stores/root.store";
import { RootService } from "./root.service";
import { TARGET } from "../environment";

const { routerStore, userInterfaceStore } = rootStore;

const requestOptions: AxiosRequestConfig = {
  withCredentials: true
};

export default class IngredientService {
  constructor(private rootService: RootService) {}

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
