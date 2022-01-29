/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function Grid({ children, padding, margin, column, gap }) {
  return (
    <div
      css={css`
        padding: ${padding};
        margin: ${margin};
        display: grid;
        gap: ${gap};
        grid-template-columns: ${column};
      `}
    >
      { children }
    </div>
  )
};

Grid.defaultProps = {
  padding: '0px',
  margin: '0px',
  column: '',
  gap: '0px',
};

export default Grid;
