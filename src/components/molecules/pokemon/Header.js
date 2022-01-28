import React from 'react';
import { FlexContainer } from 'components/atoms/container';
import { HeadingTwo, HeadingThree } from 'components/atoms/typography';

export default function Header({ title, subtitle }) {
  return (
    <FlexContainer
      align="center"
      justify="center"
      gap="5px"
      direction="column"
    >
      <HeadingTwo>
        { title }
      </HeadingTwo>
      <HeadingThree>
        ({ subtitle })
      </HeadingThree>
    </FlexContainer>
  )
};
