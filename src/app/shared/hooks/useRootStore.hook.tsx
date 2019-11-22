import { useContext } from 'react';

import RootStoreContext from '../context/rootStore.context';

function useRootStore() {
  return useContext(RootStoreContext);
}

export default useRootStore;
