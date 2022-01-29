import React from 'react';

export default function Wrapper({ children, href }) {
  return (
    <a
      href={href}
    >
      { children }
    </a>
  );
};
