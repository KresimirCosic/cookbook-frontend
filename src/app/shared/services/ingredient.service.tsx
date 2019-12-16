import axios, { AxiosRequestConfig } from "axios";

import { rootStore } from "../stores/root.store";
import {
  IAllIngredient,
  IUserIngredient,
  IMeasure
} from "../stores/ingredient.store";
import { RootService } from "./root.service";
import { TARGET } from "../environment";

const { ingredientStore } = rootStore;

const requestOptions: AxiosRequestConfig = {
  withCredentials: true
};

export default class IngredientService {
  constructor(private rootService: RootService) {}

  handleFetchingIngredients = () => {
    axios
      .get(`${TARGET}/api/ingredients`, requestOptions)
      .then(response => {
        const {
          allMeasures,
          allIngredients,
          userIngredients
        }: {
          allMeasures: IMeasure[];
          allIngredients: IAllIngredient[];
          userIngredients: IUserIngredient[];
        } = response.data;

        // Adding all measures to the store
        allMeasures.forEach(measure => ingredientStore.addMeasure(measure));

        // Adding all ingredients to the store
        allIngredients.forEach(allIngredient =>
          ingredientStore.addAllIngredient(allIngredient)
        );

        // Adding user ingredients to the store
        userIngredients.forEach(userIngredient =>
          ingredientStore.addUserIngredient(userIngredient)
        );
      })
      .catch(error => {
        console.log(error.response);
      });
  };

  handleCreatingIngredient = () => {
    // TODO
  };

  handleUpdatingIngredient = () => {
    // TODO
  };

  handleDeletingIngredient = () => {
    // TODO
  };
}
