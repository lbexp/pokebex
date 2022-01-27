/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function HeadingTwo({ children }) {
  return (
    <h2
      css={css`
        color: #ffcc01;
      `}
    >
      { children }
    </h2>
  )
};
