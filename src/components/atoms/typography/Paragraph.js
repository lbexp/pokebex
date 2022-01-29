/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function HeadingTwo({ children }) {
  return (
    <p
      css={css`
        color: #616161;
      `}
    >
      { children }
    </p>
  )
};
