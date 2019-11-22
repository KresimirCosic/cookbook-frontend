import React, { FC } from 'react';
import { RouterView } from 'mobx-state-router';

import Header from './header.component';
import Footer from './footer.component';

import withRootStore from '../../shared/hocs/withRootStore.hoc';
import viewMap from '../../shared/routing/viewMap.routing';
import RootStore from '../../shared/stores/root.store';
import useRootStore from '../../shared/hooks/useRootStore.hook';

interface ShellProps {
  rootStore: RootStore;
}

const Shell: FC = () => {
  const { routerStore } = useRootStore();

  return (
    <div className='Shell'>
      <Header />
      <RouterView routerStore={routerStore} viewMap={viewMap} />
      <Footer />
    </div>
  );
};

export default withRootStore(Shell);
