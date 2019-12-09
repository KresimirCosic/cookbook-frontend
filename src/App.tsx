import React, { FC } from "react";
import { Provider } from "mobx-react";
import { HistoryAdapter } from "mobx-state-router";

import Shell from "./app/features/components/shell.component";
import history from "./app/shared/routing/history.routing";
import { rootStore } from "./app/shared/stores/root.store";
import { verifyAuthenticationStorage } from "./app/shared/utils/localStorage.util";

const historyAdapter = new HistoryAdapter(rootStore.routerStore, history);
historyAdapter.observeRouterStateChanges();

const App: FC = () => {
  verifyAuthenticationStorage();

  return (
    <div className="App">
      <Provider rootStore={rootStore}>
        <Shell />
      </Provider>
    </div>
  );
};

export default App;
