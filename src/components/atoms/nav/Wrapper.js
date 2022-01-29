/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function Wrapper({ children }) {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 20px;
        background-color: #385ca9;
        &:hover {
          color: ${'white'};
        }
      `}
    >
      { children }
    </div>
  )
};
