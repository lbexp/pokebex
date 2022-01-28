/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function Base({ children }) {
  return (
    <label
      css={css`
        padding: 10px;
        background-color: #385ca9;
        color: #ffffff;
        border-radius: 5px;
      `}
    >
      { children }
    </label>
  );
};
