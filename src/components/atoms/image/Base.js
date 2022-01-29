/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function Logo({ src, alt, width, height }) {
  return (
    <img
      css={css`
        border-radius: 5px;
      `}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  )
};
