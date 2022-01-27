import React from 'react';
import { FlexContainer } from 'components/atoms/container';
import { NavLink } from 'components/atoms/nav';

export default function Menu({ links }) {
  return (
    <FlexContainer
      align="center"
      justify="flex-end"
      gap="15px"
    >
      { links.map((link, index) => (
        <NavLink
          key={index}
          href={link.href}
        >
          { link.children }
        </NavLink>
      ))}
    </FlexContainer>
  )
};
