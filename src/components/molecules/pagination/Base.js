import React from 'react';
import { FlexContainer } from 'components/atoms/container';
import { IconButton } from 'components/atoms/button';
import { Paragraph } from 'components/atoms/typography';

export default function DescSlider({ currentPage, totalPage, prevPageEvent, nextPageEvent }) {
  return (
    <FlexContainer
      align="center"
      justify="center"
      gap="10px"
    >
      <IconButton
        clickEvent={prevPageEvent}
        disabled={currentPage === 1}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        </svg>
      </IconButton>
      <Paragraph
        whiteSpace="nowrap"
      >
        { currentPage }
      </Paragraph>
      <IconButton
        clickEvent={nextPageEvent}
        disabled={currentPage === totalPage}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      </IconButton>
    </FlexContainer>
  )
};
