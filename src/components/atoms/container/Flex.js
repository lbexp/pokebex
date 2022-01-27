/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function Flex({ children, align, justify, gap }) {
  return (
    <div
      css={css`
        display: flex;
        gap: ${gap};
        justify-content: ${justify};
        align-items: ${align}};
      `}
    >
      { children }
    </div>
  )
};

Flex.defaultProps = {
  align: 'start',
  justify: 'flex-start',
  gap: '0px',
};

export default Flex;
