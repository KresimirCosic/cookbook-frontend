import React from 'react';
import { observer } from 'mobx-react';

const Header = () => {
  return (
    <div className='Header'>
      <h4>This is the header.</h4>
    </div>
  );
};

export default observer(Header);
