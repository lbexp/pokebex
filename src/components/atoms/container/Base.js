/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function Base({ children, padding, margin }) {
  return (
    <div
      css={css`
        padding: ${padding};
        margin: ${margin}
      `}
    >
      { children }
    </div>
  )
};

Base.defaultProps = {
  padding: "0px",
  margin: '0px',
};

export default Base;
