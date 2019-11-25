import { createContext } from "react";

import { rootStore } from "../stores/root.store";

const RootStoreContext = createContext(rootStore);

export default RootStoreContext;
