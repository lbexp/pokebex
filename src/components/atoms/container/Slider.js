/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function Slider({ children }) {
  return (
    <div 
      css={css`
        overflow: auto;
        white-space: nowrap;
        padding-bottom: 10px;
      `}
    >
      { children }
    </div>
  )
};

Slider.defaultProps = {
  padding: '0px',
  margin: '0px',
  column: '',
  gap: '0px',
};

export default Slider;
