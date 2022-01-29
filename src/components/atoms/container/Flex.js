/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function Flex({ children, padding, align, justify, gap, direction }) {
  return (
    <div
      css={css`
        padding: ${padding};
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
  padding: "0px",
  direction: 'row',
  align: 'start',
  justify: 'center',
  gap: '0px',
};

export default Flex;
