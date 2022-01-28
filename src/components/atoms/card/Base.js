/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function Base({ children, position, padding, margin, borderRadius, boxShadow }) {
  return (
    <div
      css={css`
        position: ${position};
        padding: ${padding};
        margin: ${margin};
        border-radius: ${borderRadius};
        box-shadow: ${boxShadow};
      `}
    >
      { children }
    </div>
  )
};

Base.defaultProps = {
  position: 'relative',
  padding: '10px',
  margin: '0px',
  borderRadius: '10px',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)',
};
