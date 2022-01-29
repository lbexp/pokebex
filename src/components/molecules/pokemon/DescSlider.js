import React from 'react';
import { BaseContainer, FlexContainer, SliderContainer } from 'components/atoms/container';
import { HeadingFour } from 'components/atoms/typography';
import { BaseLabel } from 'components/atoms/label';

export default function DescSlider({ title, items }) {
  return (
    <BaseContainer
      margin="0px 0px 30px 0px"
    >
      <BaseContainer
        margin="0px 0px 10px 0px"
      >
        <HeadingFour>
          { title }
        </HeadingFour>
      </BaseContainer>
      <SliderContainer>
        <FlexContainer
          justify="unset"
          gap="10px"
        >
          { items?.map((item, index) => (
            <BaseLabel
              key={index}
            >
              { item }
            </BaseLabel>
          )) }
        </FlexContainer>
      </SliderContainer>
    </BaseContainer>
  )
};
