import React from 'react';

import RootStoreContext from '../context/rootStore.context';

function withRootStore(Component: any) {
  return function WrapperComponent(props: any) {
    return (
      <RootStoreContext.Consumer>
        {rootStore => <Component {...props} rootStore={rootStore} />}
      </RootStoreContext.Consumer>
    );
  };
}

export default withRootStore;
