import React, { useEffect } from "react";
import { observer } from "mobx-react";

import useRootService from "../../shared/hooks/useRootService.hook";
import useRootStore from "../../shared/hooks/useRootStore.hook";

const Home = () => {
  const { ingredientService, recipeService } = useRootService();
  const {
    authenticationStore,
    userInterfaceStore,
    ingredientStore
  } = useRootStore();

  useEffect(() => {
    // Fetching data if user logged in
    if (authenticationStore.loggedInStatus) {
      ingredientService.handleFetchingIngredients();
      recipeService.handleFetchingRecipes();

      // Turn off the loader
      userInterfaceStore.turnOffLoader();
    } else {
      // If there is no need to fetch data, just turn off the loader
      userInterfaceStore.turnOffLoader();
    }

    return () => {
      // Clearing the ingredient store when unmounting the page
      ingredientStore.clearIngredientStore();
    };
  }, []);

  return <div className="Page Home"></div>;
};

export default observer(Home);
