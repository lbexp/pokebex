/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function Link({ children, href }) {
  return (
    <a
      css={css`
        color: white;
        &:hover {
          color: #ffcc01
        }
      `}
      href={href}
    >
      { children }
    </a>
  )
};
