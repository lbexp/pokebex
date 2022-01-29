import React from 'react';
import { NavWrapper } from 'components/atoms/nav';
import { NavLogo, NavMenu } from 'components/molecules/nav';

export function Navbar({ logo, menus }) {
  return (
    <NavWrapper>
      <NavLogo
        href={logo.href}
        width={logo.width}
        height={logo.height}
        src={logo.src}
      />
      <NavMenu
        links={menus}
      />
    </NavWrapper>
  );
};
