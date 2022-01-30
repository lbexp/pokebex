/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function HeadingOne({ children, align }) {
  return (
    <h1
      css={css`
        color: #616161;
        text-align: ${align}
      `}
    >
      { children }
    </h1>
  )
};

HeadingOne.defaultProps = {
  align: 'inherit',
}

export default HeadingOne;
