import { RouterState, RouterStore } from "mobx-state-router";

import routes from "../routing/routes.routing";
import UserInterfaceStore from "./userInterface.store";
import AuthenticationStore from "./authentication.store";
import IngredientStore from "./ingredient.store";
import RecipeStore from "./recipe.store";

const notFound = new RouterState("notFound");

export default class RootStore {
  routerStore = new RouterStore(this, routes, notFound);
  userInterfaceStore = new UserInterfaceStore(this);
  authenticationStore = new AuthenticationStore(this);
  ingredientStore = new IngredientStore(this);
  recipeStore = new RecipeStore(this);
}

export const rootStore = new RootStore();
