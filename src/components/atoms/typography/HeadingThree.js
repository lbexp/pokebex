/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function HeadingThree({ children }) {
  return (
    <h3
      css={css`
        color: #ffcc01;
      `}
    >
      { children }
    </h3>
  )
};
