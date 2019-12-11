import React from "react";

import NotFound from "../../features/pages/notFound.page";
import Register from "../../features/pages/register.page";
import Login from "../../features/pages/login.page";
import Ingredients from "../../features/pages/ingredients.page";
import Recipes from "../../features/pages/recipes.page";
import Home from "../../features/pages/home.page";

const viewMap = {
  notFound: <NotFound />,
  register: <Register />,
  login: <Login />,
  ingredients: <Ingredients />,
  recipes: <Recipes />,
  home: <Home />
};

export default viewMap;
