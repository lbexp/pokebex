/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function Base({ children }) {
  return (
    <div
      css={css`
        position: relative;
        border-radius: 10px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
      `}
    >
      { children }
    </div>
  )
};
