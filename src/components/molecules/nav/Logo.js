import React from 'react';
import { ImageLogo } from 'components/atoms/image';
import { AnchorWrapper } from 'components/atoms/anchor';

export default function NavLogo({ href, src, width, height }) {
  return (
    <AnchorWrapper
      href={href}
    >
      <ImageLogo
        src={src}
        width={width}
        height={height}
      />
    </AnchorWrapper>
  )
};
