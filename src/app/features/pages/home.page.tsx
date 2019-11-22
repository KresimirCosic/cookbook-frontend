import React from 'react';
import { observer } from 'mobx-react';

import withRootStore from '../../shared/hocs/withRootStore.hoc';
import useRootStore from '../../shared/hooks/useRootStore.hook';

const Home = () => {
  const rootStore = useRootStore();

  return (
    <div className='Page Page-Home'>
      <h1>This is the page: {rootStore.routerStore.getCurrentRoute().name}.</h1>
    </div>
  );
};

export default withRootStore(observer(Home));
