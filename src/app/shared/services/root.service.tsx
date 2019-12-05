import AuthenticationService from "./authentiaction.service";
import IngredientService from "./ingredient.service";
import RecipeService from "./recipe.service";

export class RootService {
  authenticationService = new AuthenticationService(this);
  ingredientService = new IngredientService(this);
  recipeService = new RecipeService(this);
}

export const rootService = new RootService();
