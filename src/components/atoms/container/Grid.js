/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function Grid({ children, align, justify, column, gap }) {
  return (
    <div
      css={css`
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
  column: '',
  gap: '0px',
};

export default Grid;
