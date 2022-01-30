/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function Paragraph({ children, whiteSpace }) {
  return (
    <p
      css={css`
        color: #616161;
        white-space: ${whiteSpace};
      `}
    >
      { children }
    </p>
  )
};

Paragraph.defaultProps = {
  whiteSpace: 'inherit',
};

export default Paragraph;
