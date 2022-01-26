import React from 'react';
import { Link } from 'components/atoms/nav';

export default function Menu({ links }) {
  return (
    <div>
      { links.map((link) => (
        <Link
          href={link.href}
        >
          { link.children }
        </Link>
      ))}
    </div>
  )
};
