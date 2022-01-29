/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function HeadingFour({ children }) {
  return (
    <h4
      css={css`
        color: #ffcc01;
      `}
    >
      { children }
    </h4>
  )
};
