/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function Float({ children, img, clickEvent }) {
  return (
    <button
      css={css`
        font-size: 18px;
        position: fixed;
        bottom: 16px;
        right: 16px;
        ${
          img ?
            `background-image: url(${img});
            background-repeat: no-repeat;
            background-size: 55px 55px;`
          :
            'background: #385ca9;'
        }
        color: white;
        border: 0;
        border-radius: 50%;
        width: 55px;
        height: 55px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
      `}
      onClick={clickEvent}
    >
      { children }
    </button>
  );
};
