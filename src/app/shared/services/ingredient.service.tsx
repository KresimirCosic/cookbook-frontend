import axios, { AxiosRequestConfig } from "axios";

import { rootStore } from "../stores/root.store";
import { IAllIngredient, IUserIngredient } from "../stores/ingredient.store";
import { RootService } from "./root.service";
import { TARGET } from "../environment";
import { LOADER_EXIT_DURATION } from "../../features/components/loader.component";

const { ingredientStore } = rootStore;

const requestOptions: AxiosRequestConfig = {
  withCredentials: true
};

const INGREDIENT_ENTRY_DURATION = 350;

export default class IngredientService {
  constructor(private rootService: RootService) {}

  handleFetchingIngredients = () => {
    axios
      .get(`${TARGET}/api/ingredients`, requestOptions)
      .then(response => {
        const {
          allIngredients,
          userIngredients
        }: {
          allIngredients: IAllIngredient[];
          userIngredients: IUserIngredient[];
        } = response.data;

        // Adding all ingredients to the store
        allIngredients.forEach((allIngredient, index) =>
          // Giving some timeouts for UX
          setTimeout(() => {
            setTimeout(() => {
              ingredientStore.addAllIngredient(allIngredient);
            }, index * (INGREDIENT_ENTRY_DURATION / allIngredients.length));
          }, LOADER_EXIT_DURATION)
        );

        // Adding user ingredients to the store
        userIngredients.forEach((userIngredient, index) =>
          setTimeout(() => {
            setTimeout(() => {
              ingredientStore.addUserIngredient(userIngredient);
            }, index * (INGREDIENT_ENTRY_DURATION / userIngredients.length));
          }, LOADER_EXIT_DURATION)
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
