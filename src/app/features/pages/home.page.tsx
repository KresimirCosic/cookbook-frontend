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

  return (
    <div className="Page Home">
      <h4>All ingredients:</h4>
      <ul>
        {ingredientStore.allIngredients.map(allIngredient => (
          <li key={allIngredient.id}>
            <p>
              <small>{allIngredient.id}.</small>
              &nbsp;
              {allIngredient.name} ({allIngredient.unit})
            </p>
          </li>
        ))}
      </ul>
      <h4>Your ingredients:</h4>
      <ul>
        {ingredientStore.userIngredients.map(userIngredient => (
          <li key={userIngredient.id}>
            <p>
              <small>{userIngredient.id}.</small>
              &nbsp;
              {userIngredient.name} - {userIngredient.amount} (
              {userIngredient.unit})
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default observer(Home);
