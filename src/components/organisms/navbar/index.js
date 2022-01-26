import React from 'react';
import { Menu } from 'components/molecules/nav';

export default function Navbar({ menu }) {
  return (
    <Menu
      links={menu}
    />
  );
};
