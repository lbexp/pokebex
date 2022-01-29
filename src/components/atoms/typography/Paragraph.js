/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function HeadingTwo({ children }) {
  return (
    <paragraph
      css={css`
        color: #616161;
      `}
    >
      { children }
    </paragraph>
  )
};
