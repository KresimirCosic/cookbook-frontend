import { createContext } from "react";

import { rootService } from "../services/root.service";

const RootServiceContext = createContext(rootService);

export default RootServiceContext;
