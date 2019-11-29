import React from "react";

import NotFound from "../../features/pages/notFound.page";
import Home from "../../features/pages/home.page";
import Register from "../../features/pages/register.page";
import Login from "../../features/pages/login.page";

const viewMap = {
  notFound: <NotFound />,
  register: <Register />,
  login: <Login />,
  home: <Home />
};

export default viewMap;
