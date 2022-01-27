/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function HeadingOne({ children }) {
  return (
    <h1
      css={css`
        color: #ffcc01;
      `}
    >
      { children }
    </h1>
  )
};
