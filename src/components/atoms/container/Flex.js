/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function Flex({ children, align, justify, gap, direction }) {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: ${direction};
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
  direction: 'row',
  align: 'start',
  justify: 'center',
  gap: '0px',
};

export default Flex;
