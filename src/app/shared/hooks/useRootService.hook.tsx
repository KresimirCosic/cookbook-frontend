import { useContext } from "react";

import RootServiceContext from "../context/rootService.context";

function useRootService() {
  return useContext(RootServiceContext);
}

export default useRootService;
