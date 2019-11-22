import React from 'react';
import { observer } from 'mobx-react';

const Navbar = () => {
  return (
    <div className='Navbar'>
      <h4>This is the navbar.</h4>
    </div>
  );
};

export default observer(Navbar);
